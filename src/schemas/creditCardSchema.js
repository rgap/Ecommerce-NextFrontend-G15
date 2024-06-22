import * as yup from "yup";

export const creditCardSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, "El número de tarjeta de crédito debe tener 16 dígitos válidos")
    .required("El número de tarjeta de crédito es obligatorio"),
  expiration: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/(2[4-9]|[3-9]\d)$/, "El formato de fecha de vencimiento debe ser MM/YY")
    .required("La fecha de vencimiento es obligatoria"),
  securityCode: yup
    .string()
    .matches(/^\d{3,4}$/, "El CVV debe ser un número de 3 o 4 dígitos")
    .required("El CVV es obligatorio"),
  cardholderName: yup
    .string()
    .min(2, "Nombre es muy corto")
    .matches(/^[A-Za-z\s]+$/, "Nombre no puede contener números ni caracteres especiales")
    .required("El nombre del titular es obligatorio"),
  docNumber: yup
    .string()
    .matches(/^\d{6}$/, "El número de documento debe tener 6 dígitos")
    .required("El número de documento es obligatorio"),
});
