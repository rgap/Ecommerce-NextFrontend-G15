"use client";
import { generateCardToken } from "@/mockData";
import { creditCardSchema } from "@/schemas/creditCardSchema";
import { useFormik } from "formik";
import React from "react";

export default function CardPaymentComponent({ totalAmount, globalUser, handleOnSubmitMercadoPago, customization }) {
  const formik = useFormik({
    initialValues: {
      cardNumber: "5031755734530604",
      cardholderName: "APRO",
      expiration: "11/25",
      securityCode: "123",
      docNumber: "123456",
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
    <form
      id="paymentForm"
      onSubmit={formik.handleSubmit}
      className="w-full md:w-[400px] xl:w-[500px] mb-10 flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Información de Pago</h2>

      <div className="flex flex-col">
        <label htmlFor="cardNumber" className="mb-1 text-sm font-medium">
          Número de tarjeta
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formik.values.cardNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-2 border rounded-md ${formik.touched.cardNumber && formik.errors.cardNumber ? "border-red-500" : "border-gray-300"}`}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber && <p className="text-xs text-red-500">{formik.errors.cardNumber}</p>}
      </div>

      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:w-1/2">
          <label htmlFor="expiration" className="mb-1 text-sm font-medium">
            Vencimiento (MM/YY)
          </label>
          <input
            type="text"
            id="expiration"
            name="expiration"
            value={formik.values.expiration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border rounded-md ${formik.touched.expiration && formik.errors.expiration ? "border-red-500" : "border-gray-300"}`}
          />
          {formik.touched.expiration && formik.errors.expiration && <p className="text-xs text-red-500">{formik.errors.expiration}</p>}
        </div>

        <div className="flex flex-col md:w-1/2">
          <label htmlFor="securityCode" className="mb-1 text-sm font-medium">
            Código de seguridad
          </label>
          <input
            type="text"
            id="securityCode"
            name="securityCode"
            value={formik.values.securityCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border rounded-md ${
              formik.touched.securityCode && formik.errors.securityCode ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formik.touched.securityCode && formik.errors.securityCode && <p className="text-xs text-red-500">{formik.errors.securityCode}</p>}
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="cardholderName" className="mb-1 text-sm font-medium">
          Nombre del titular de la tarjeta
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={formik.values.cardholderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full p-2 border rounded-md ${
            formik.touched.cardholderName && formik.errors.cardholderName ? "border-red-500" : "border-gray-300"
          }`}
        />
        {formik.touched.cardholderName && formik.errors.cardholderName && <p className="text-xs text-red-500">{formik.errors.cardholderName}</p>}
      </div>

      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex flex-col md:w-full">
          <label htmlFor="docNumber" className="mb-1 text-sm font-medium">
            Documento del titular (DNI)
          </label>
          <input
            type="text"
            id="docNumber"
            name="docNumber"
            value={formik.values.docNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full p-2 border rounded-md ${formik.touched.docNumber && formik.errors.docNumber ? "border-red-500" : "border-gray-300"}`}
          />
          {formik.touched.docNumber && formik.errors.docNumber && <p className="text-xs text-red-500">{formik.errors.docNumber}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Pagar
      </button>
    </form>
  );
}
