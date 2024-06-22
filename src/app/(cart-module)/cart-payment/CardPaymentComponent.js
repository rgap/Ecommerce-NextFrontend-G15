// CardPaymentComponent.js
"use client";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import React from "react";

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY, {
  locale: "es-PE",
});

export default function CardPaymentComponent({ totalAmount, globalUser, handleOnSubmitMercadoPago, customization }) {
  return (
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
  );
}
