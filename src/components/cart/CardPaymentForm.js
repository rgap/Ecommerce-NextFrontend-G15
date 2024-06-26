"use client";
import { generateCardToken } from "@/mockData";
import { creditCardSchema } from "@/schemas/creditCardSchema";
import { useFormik } from "formik";
import React from "react";

export default function CardPaymentForm({ totalAmount, globalUser, handleOnSubmitMercadoPago, customization }) {
  const formik = useFormik({
    initialValues: {
      cardNumber: "4009175332806176",
      cardholderName: "BETATESTER",
      expiration: "11/25",
      securityCode: "123",
      docNumber: "12345678",
    },
    validationSchema: creditCardSchema,
    onSubmit: async values => {
      try {
        const tokenData = generateCardToken();
        handleOnSubmitMercadoPago({
          ...values,
          token: tokenData.id,
          transactionAmount: totalAmount,
          payerEmail: globalUser.email,
          userId: globalUser.id,
          installments: "1", // Default value
          issuerId: "1", // Default value
          docType: "DNI", // Default value
        });
      } catch (error) {
        console.error("Error creating token:", error);
      }
    },
  });

  return (
    <form id="paymentForm" onSubmit={formik.handleSubmit} className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px] mb-10 flex flex-col gap-3 ">
      <h2 className="text-xl font-bold mb-4 text-center">Información de Pago</h2>

      <div className="flex flex-col gap-3">
        <label htmlFor="cardNumber" className="mb-1 text-sm">
          Número de tarjeta
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={"w-full p-2 outline-none border border-[--color-form-border]"}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber && <p className="text-red-500 mt-1 text-xs">{formik.errors.cardNumber}</p>}
      </div>

      <div className="flex flex-col md:flex-row md:gap-3">
        <div className="flex flex-col md:w-1/2">
          <label htmlFor="expiration" className="mb-1 text-sm">
            Vencimiento (MM/YY)
          </label>
          <input
            type="text"
            id="expiration"
            name="expiration"
            value={formik.values.expiration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={"w-full p-2 outline-none border border-[--color-form-border]"}
          />
          {formik.touched.expiration && formik.errors.expiration && <p className="text-red-500 mt-1 text-xs">{formik.errors.expiration}</p>}
        </div>

        <div className="flex flex-col md:w-1/2">
          <label htmlFor="securityCode" className="mb-1 text-sm">
            Código de seguridad
          </label>
          <input
            type="text"
            id="securityCode"
            name="securityCode"
            value={formik.values.securityCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={"w-full p-2 outline-none border border-[--color-form-border]"}
          />
          {formik.touched.securityCode && formik.errors.securityCode && <p className="text-red-500 mt-1 text-xs">{formik.errors.securityCode}</p>}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="cardholderName" className="mb-1 text-sm">
          Nombre del titular de la tarjeta
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={formik.values.cardholderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={"w-full p-2 outline-none border border-[--color-form-border]"}
        />
        {formik.touched.cardholderName && formik.errors.cardholderName && <p className="text-red-500 mt-1 text-xs">{formik.errors.cardholderName}</p>}
      </div>

      <button
        type="submit"
        className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
      >
        Pagar
      </button>
    </form>
  );
}
