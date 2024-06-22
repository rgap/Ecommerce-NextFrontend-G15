"use client";
import { Breadcrumb } from "@/components/cart";
import { Logo } from "@/components/common";
import { basicSchema } from "@/schemas/basicSchema";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { sendPostRequest } from "../../services";
import { getUserByEmail } from "@/mockData";
import createMercadoPagoOrder from "@/mockData/createMercadoPagoOrder";
import { inputs } from "./form";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
  locale: "es-PE",
});

export default function CartPayment() {
  const debugMode = true;
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const globalUser = useUserStore(state => state.user);
  const globalCart = useCartStore(state => state.cart);
  const [showCardPayment, setShowCardPayment] = useState(false);

  // Calculate total amount
  const totalAmount = globalCart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const shippingCosts = {
    regular: "12.00",
    rapido: "20.00",
  };
  const getShippingCost = option => shippingCosts[option] || "0.00";
  const savedShippingOption = typeof window !== "undefined" ? localStorage.getItem("shippingOption") : "regular";
  const totalShipping = getShippingCost(savedShippingOption);

  const customization = {
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
    },
    visual: {
      style: {
        theme: "default",
      },
    },
  };

  const { values, errors, touched, handleBlur, handleChange, setValues } = useFormik({
    initialValues: {
      name: "",
      address: "",
      city: "",
      region: "",
      phoneNumber: "",
    },
    validationSchema: debugMode ? undefined : basicSchema,
  });

  useEffect(() => {
    const fetchUserParams = async () => {
      try {
        const foundUser = getUserByEmail();
        const userDetails = {
          id: foundUser.id,
          name: foundUser.name,
          address: foundUser.address,
          city: foundUser.city,
          region: foundUser.region,
          phoneNumber: foundUser.phoneNumber,
        };
        setUserDetails(userDetails);
        setValues(userDetails);
      } catch (error) {
        console.error("Error fetching user params:", error);
      }
    };

    if (globalUser && globalUser.email) {
      fetchUserParams();
    }
  }, [globalUser, setValues]);

  useEffect(() => {
    if (Object.keys(userDetails).length > 0 && globalUser.email && totalAmount) {
      setShowCardPayment(true);
    }
  }, [userDetails, globalUser, totalAmount]);

  async function handleOnSubmitMercadoPago(formData) {
    const bodyOrder = {
      paymentDate: new Date(),
      payerEmail: formData.payer.email,
      payerDocumentType: formData.payer.identification.type,
      payerDocumentNumber: formData.payer.identification.number,
      installments: formData.installments,
      issuerId: formData.issuer_id,
      paymentMethodId: formData.payment_method_id,
      token: formData.token,
      status: "created",
      transactionAmount: formData.transaction_amount,
      shippingMethod: savedShippingOption,

      shippingName: userDetails.name,
      shippingAddress: userDetails.address,
      shippingCity: userDetails.city,
      shippingRegion: userDetails.region,
      shippingPhoneNumber: userDetails.phoneNumber,

      billingName: values.name,
      billingAddress: values.address,
      billingCity: values.city,
      billingRegion: values.region,
      billingPhoneNumber: values.phoneNumber,

      userId: userDetails.id,
      cart: JSON.parse(localStorage.getItem("cart")),
    };

    const response = createMercadoPagoOrder();

    if (response.ok) {
      const purchaseBody = {
        payerEmail: bodyOrder.payerEmail,
        userId: userDetails.id,
        orderId: response.data.order.id,
      };
      useCartStore.getState().resetCart();
      router.push("/cart-message", { state: { purchaseBody } });
      window.location.reload();
    }
  }

  const handleCheckBoxChange = () => {
    setCheckbox(!checkbox);
    if (!checkbox) {
      setValues(userDetails);
    } else {
      setValues({
        name: "",
        address: "",
        city: "",
        region: "",
        phoneNumber: "",
      });
    }
  };

  useEffect(() => {
    if (!globalUser) {
      router.push("/login");
    }
  }, [globalUser, router]);

  function redirect(route) {
    return event => {
      event.preventDefault();
      router.push(route);
    };
  }

  function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <main>
      <Logo />
      <div className="flex flex-col md:flex lg:flex-row">
        <section className="cart-info-left lg:w-[50%] flex flex-col items-center md:items-left px-12">
          <Breadcrumb />

          <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">Resumen del Carrito</p>

          <section className="text-center mb-5">
            <ul className="mb-4">
              {globalCart.map((product, index) => (
                <li key={index} className="mb-2">
                  {product.title} - {product.quantity} x S/ {parseFloat(product.price).toFixed(2)}
                </li>
              ))}
            </ul>
            <p className="font-bold">Tipo de Envio: {capitalize(savedShippingOption)}</p>
            <p className="font-bold">Envio: S/ {parseFloat(totalShipping).toFixed(2)}</p>
            <p className="font-bold">Total: S/ {parseFloat(totalAmount).toFixed(2)}</p>
          </section>

          <p className="text-xl text-center md:text-left font-bold capitalize leading-8 break-words mb-5 mt-8">Dirección de Facturación</p>

          <form autoComplete="off" className="w-[300px] md:w-[400px] xl:w-[500px] mb-10 flex flex-col gap-2">
            <div className="my-3 flex gap-1">
              <input checked={checkbox} onChange={handleCheckBoxChange} type="checkbox" id="checkboxAddress" name="checkboxAddress" />
              <label className="text-sm">Usar la misma dirección de Envio</label>
            </div>
            {inputs.map(input => (
              <React.Fragment key={input.name}>
                <div className="p-2 border border-gray-700">
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

            <div
              className="flex h-[40px] items-center gap-3 cursor-pointer my-8 justify-center md:justify-normal"
              onClick={redirect("/cart-shipping")}
            >
              <Image
                className="w-6 h-6"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/fcccf12acd7bdce6bdc28e60b4b662dfbffb70cd/icons/arrow_back.svg"
                alt=""
                width={24}
                height={24}
              />
              <span className="text-sm leading-6 hover:underline">Regresar</span>
            </div>
          </form>
        </section>

        <section className="lg:w-[50%] flex flex-col justify-start items-start px-5 pt-5 mb-12 md:px-10 ">
          <button onClick={redirect("/cart-payment")} className="mb-5"></button>
          {showCardPayment && (
            <CardPayment
              key="card-payment"
              onSubmit={handleOnSubmitMercadoPago}
              initialization={{
                amount: totalAmount,
                payer: {
                  email: globalUser.email,
                },
              }}
              customization={customization}
            />
          )}
        </section>
      </div>
    </main>
  );
}
