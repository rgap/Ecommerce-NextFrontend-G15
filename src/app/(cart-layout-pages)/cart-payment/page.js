"use client";
import { Breadcrumb, Button } from "@/components";
import { sendPostRequest } from "@/services";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
  locale: "es-PE",
});

export default function CartPayment() {
  const debugMode = process.env.NEXT_PUBLIC_DEBUG_MODE;
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({});
  const globalUser = useUserStore(state => state.user);
  const { cart: globalCart, shippingOption: savedShippingOption, setCheckoutInfo } = useCartStore();
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [lastProductPath, setLastProductPath] = useState("/products");

  // Calculate total amount
  const totalAmount = globalCart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  const shippingCosts = {
    regular: "12.00",
    rapido: "20.00",
  };
  const getShippingCost = option => shippingCosts[option] || "0.00";
  const totalShipping = getShippingCost(savedShippingOption);

  const initialization = {
    amount: totalAmount,
    payer: {
      email: globalUser ? globalUser.email : "", // Add a fallback in case globalUser is null or undefined
    },
  };

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

  useEffect(() => {
    const fetchUserParams = async () => {
      try {
        const responseGetByEmail = await sendPostRequest({ endpoint: "users/get-by-email", body: { email: globalUser.email } });
        const foundUser = responseGetByEmail.data;
        const userDetails = {
          id: foundUser.id,
          name: foundUser.name,
          address: foundUser.address,
          city: foundUser.city,
          region: foundUser.region,
          phoneNumber: foundUser.phoneNumber,
        };
        setUserDetails(userDetails);

        if (debugMode) {
          setCheckoutInfo({
            payerEmail: foundUser.email,
            userId: foundUser.id,
            orderId: "000",
          });
        }
      } catch (error) {
        console.error("Error fetching user params:", error);
      }
    };

    if (globalUser && globalUser.email) {
      fetchUserParams();
    }
  }, [globalUser, debugMode, setCheckoutInfo]);

  useEffect(() => {
    if (globalCart.length > 0) {
      const lastProduct = globalCart[globalCart.length - 1];
      setLastProductPath(lastProduct.productPath || "/products");
    }
  }, [globalCart]);

  useEffect(() => {
    if (!globalUser && initialLoadComplete) {
      router.push("/login");
    } else {
      setInitialLoadComplete(true);
    }
  }, [globalUser, router, initialLoadComplete]);

  // Check if the cart is empty on page load
  useEffect(() => {
    if (globalCart.length === 0 && initialLoadComplete) {
      router.replace(lastProductPath); // Redirect to last product page or home
    }
  }, [router, lastProductPath, globalCart.length, initialLoadComplete]);

  async function handleOnSubmitMercadoPago(formData) {
    // formData = {
    //   "token": "f14dbd6a00e40caf4f35c133a397d566",
    //   "issuer_id": "12551",
    //   "payment_method_id": "visa",
    //   "transaction_amount": 100,
    //   "installments": 1,
    //   "payer": {
    //     "email": "beautipol.alpha.1@gmail.com",
    //     "identification": {
    //       "type": "DNI",
    //       "number": "12345678"
    //     }
    //   }
    // }

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

      billingName: userDetails.name,
      billingAddress: userDetails.address,
      billingCity: userDetails.city,
      billingRegion: userDetails.region,
      billingPhoneNumber: userDetails.phoneNumber,

      userId: userDetails.id,
      cart: globalCart, // Fetch cart from useCartStore
    };

    try {
      // console.log(JSON.stringify(bodyOrder, null, 2));
      const responseCreateMercadoPagoOrder = await sendPostRequest({ endpoint: "orders/create-mercadopago-order", body: bodyOrder });
      console.log("responseCreateMercadoPagoOrder received");

      if (!responseCreateMercadoPagoOrder.ok) {
        // Redirect to the checkout fail message page
        router.push("/cart-message-fail");
      }
      const responseData = responseCreateMercadoPagoOrder.data;

      // Create purchase body for the checkout success message page
      const purchaseBody = {
        payerEmail: bodyOrder.payerEmail,
        userId: userDetails.id,
        orderId: responseData.order.id,
      };
      setCheckoutInfo(purchaseBody);

      // Send emails
      await sendPostRequest(bodyOrder, "orders/send-order-email-to-user");
      await sendPostRequest(bodyOrder, "orders/send-order-email-to-admin");

      console.log("Before redirecting to /cart-message");
      // Redirect to the checkout success message page
      router.push("/cart-message");
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  }

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
      <div className="flex flex-col md:flex lg:flex-row justify-center">
        <section className="flex flex-col  md:items-left px-10 md:px-20">
          <Breadcrumb />

          <div className="flex flex-col md:flex-row">
            <section className="flex flex-col md:flex-row justify-center gap-16">
              <div className="flex flex-col justify-center">
                <div className="text-center flex flex-col self-center">
                  <div className="max-w-[400px] mb-5">
                    <p className="text-xl text-center font-bold capitalize leading-8 break-words mb-5 mt-8">Resumen del Carrito</p>
                    <ul className="mb-4">
                      {globalCart.map((product, index) => (
                        <li key={index} className="mb-2">
                          {product.quantity} &nbsp;&nbsp; {product.title} de S/ {parseFloat(product.price).toFixed(2)} c/u
                        </li>
                      ))}
                    </ul>
                    <p>
                      <span className="font-bold">Tipo de Envio: </span>&nbsp;&nbsp;
                      <span>
                        {capitalize(savedShippingOption)} de S/ {parseFloat(totalShipping).toFixed(2)}
                      </span>
                    </p>
                    <p className="mt-5">
                      <span className="font-bold">Total: </span>&nbsp;&nbsp;<span>S/ {parseFloat(totalAmount).toFixed(2)}</span>
                    </p>
                  </div>
                  {debugMode && (
                    <div className="max-w-[400px]">
                      <p>En esta demo, puedes utilizar esta tarjeta de prueba para simular un pago:</p>
                      <ul className="mt-5 text-left text-center">
                        <li>
                          <strong>Número: &nbsp; </strong> 4009175332806176
                        </li>
                        <li>
                          <strong>Fecha de vencimiento: &nbsp; </strong> 1125
                        </li>
                        <li>
                          <strong>Código de seguridad: &nbsp; </strong> 123
                        </li>
                        <li>
                          <strong>Nombre de titular: &nbsp; </strong> BEAUTIPOLALPHA
                        </li>
                        <li>
                          <strong>DNI: &nbsp; </strong> 12345678
                        </li>
                      </ul>
                      <p className="mt-4">Utiliza los botones a continuación para simular el resultado del pago:</p>
                      <div className="flex flex-col items-center justify-center gap-10 mt-8">
                        <div className="flex w-[190px] h-[40px]">
                          <Button ruta="/cart-message" text="Ir a Pago Exitoso" type="button" />
                        </div>
                        <div className="flex w-[190px] h-[40px]">
                          <Button ruta="/cart-message-fail" text="Ir a Pago Fallido" type="button" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <section className="lg:w-1/2 flex flex-col items-center justify-start px-5 pt-5 mb-12 md:px-10 md:min-w-[622px]">
                <button onClick={redirect("/cart-payment")} className="mb-5"></button>
                {initialLoadComplete && Object.keys(userDetails).length > 0 && (
                  <CardPayment onSubmit={handleOnSubmitMercadoPago} initialization={initialization} customization={customization} />
                )}
              </section>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
