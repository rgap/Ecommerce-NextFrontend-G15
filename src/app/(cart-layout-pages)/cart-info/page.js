"use client";
import { Breadcrumb, Button, ProductShoppingCart } from "@/components";
import { basicSchema } from "@/schemas/basicSchema";
import { sendPostRequest, sendPutRequest } from "@/services";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { inputs } from "./form";

export default function CartInfo() {
  const router = useRouter();
  const globalUser = useUserStore(state => state.user);
  const globalCart = useCartStore(state => state.cart);
  const [personalData, setPersonalData] = useState([]);
  const total = globalCart.reduce((accumulator, product) => {
    const subtotal = product.quantity * product.price;
    return accumulator + subtotal;
  }, 0);

  const totalCart = total.toFixed(2);
  const [lastProductPath, setLastProductPath] = useState("/products");
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    if (globalCart.length > 0) {
      const lastProduct = globalCart[globalCart.length - 1];
      setLastProductPath(lastProduct.productPath || "/products");
    }
  }, [globalCart]);

  useEffect(() => {
    if (!initialLoadComplete) {
      setInitialLoadComplete(true);
      return;
    }

    if (total === 0) {
      router.replace(lastProductPath);
    }
  }, [lastProductPath, router, total, initialLoadComplete]);

  const onSubmit = async (values, actions) => {
    await sendPutRequest({ endpoint: `users/${personalData.id}`, body: values });
    router.push("/cart-shipping");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      region: "",
      phoneNumber: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  function redirect(route) {
    return event => {
      event.preventDefault();
      router.push(route);
    };
  }

  useEffect(() => {
    async function initializeFormData() {
      if (globalUser) {
        const responseGetByEmail = await sendPostRequest({ endpoint: "users/get-by-email", body: { email: globalUser.email } });
        const foundUser = responseGetByEmail.data;

        if (foundUser) {
          setPersonalData({
            id: foundUser.id,
            name: foundUser.name,
            address: foundUser.address,
            city: foundUser.city,
            region: foundUser.region,
            phoneNumber: foundUser.phoneNumber,
          });
        }
      }
    }

    initializeFormData();
  }, [globalUser]);

  useEffect(() => {
    setValues({
      name: personalData.name,
      address: personalData.address,
      city: personalData.city,
      region: personalData.region,
      phoneNumber: personalData.phoneNumber,
    });
  }, [personalData, setValues]);

  return (
    <main className="lg:flex">
      <section className="cart-info-left lg:w-[55%]">
        {!globalUser ? (
          <section className="flex justify-center h-[50%] items-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg break-words"> ¿Ya tienes una cuenta? </p>
              <div className="border flex w-[120px] h-[40px] justify-center items-center gap-1 flex-shrink-0">
                <Button ruta="/login" text="Ingresar" type="" variant="primary" className="hover:cursor-pointer" />
              </div>
              <p className="text-lg text-center"> o </p>
              <p className="text-lg break-words">!Registrate con nosotros!</p>
              <div className="border flex w-[120px] h-[40px] justify-center items-center gap-1 flex-shrink-0">
                <Button ruta="/register" text="Registrarse" type="" variant="primary" className="hover:cursor-pointer" />
              </div>
            </div>
          </section>
        ) : (
          <div className="mx-10 xl:mx-20 my-0">
            <Breadcrumb />
            <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">Dirección de Envio</p>
            <hr className="h-5 w-full mb-5" />
            <section className="flex flex-col items-center">
              <form onSubmit={handleSubmit} autoComplete="off" className="mb-10 flex flex-col gap-2 px-10 max-w-[520px] w-full m-auto">
                {inputs.map(input => (
                  <React.Fragment key={input.name}>
                    <div className="p-2 border border-gray-700 w-full">
                      <input
                        className="w-full outline-none"
                        id={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        onChange={handleChange}
                        value={values[input.name] || ""}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors[input.name] && touched[input.name] && <p className="text-xs text-red-500">{errors[input.name]}</p>}
                  </React.Fragment>
                ))}

                <div className="w-full flex mt-10 justify-between">
                  <div className="flex w-[190px] h-[40px] items-center gap-3 cursor-pointer" onClick={redirect("/cart")}>
                    <Image
                      className="w-6 h-6"
                      src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span className="text-sm leading-6 hover:underline">Regresar</span>
                  </div>
                  <div className="flex justify-end">
                    <div className="w-[200px] h-[40px]">
                      <Button
                        text="Continuar con Envio"
                        type="submit"
                        clickFunction={false}
                        variant={Object.keys(errors).length > 0 ? "disabled" : "primary"}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </section>
          </div>
        )}
      </section>
      <section className="max-lg:hidden cart-info-right min-h-screen lg:w-[45%] bg-[--color-bg] flex flex-col justify-start items-center min-w-[460px]">
        <div className="w-full flex justify-center">
          <span className="text-xl font-bold mt-10 mb-10">Carrito de Compra</span>
        </div>

        <div className="lg:w-[350px] xl:w-[450px]">
          {globalCart.map(product => (
            <div className="md:mb-2" key={product.id}>
              <ProductShoppingCart
                productId={product.id}
                productImage={product.url}
                productTitle={product.title}
                productSize={product.size}
                productColor={product.color}
                productPrice={product.price}
                productQuantity={product.quantity}
                product={product}
                visible={true}
              />
            </div>
          ))}
          <div className="mt-5 flex flex-col gap-1.5 mb-7">
            <p className="text-lg text-center">
              Subtotal: <span> S/ {totalCart} </span>
            </p>
            <p className="text-md text-center">(*) El importe total que pagará sera calculado en la sección de Envío.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
