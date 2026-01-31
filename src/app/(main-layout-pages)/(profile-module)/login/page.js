"use client";
import { TextField } from "@/components";
import { sendPostRequest } from "@/services";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { inputs } from "./form";

export default function Login() {
  const router = useRouter();
  const { saveUser } = useUserStore();

  const debugMode = process.env.NEXT_PUBLIC_DEBUG_MODE; // Set this based on your environment or a config

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleAutoFillLogin = () => {
    setValues({
      email: "beautipol.alpha.1@gmail.com",
      password: "a1234567",
    });
  };

  const validateForm = () => {
    const errors = {};

    const validations = {
      email: value => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return "Formato de correo invalido";
        }
      },
    };

    inputs.forEach(input => {
      const value = values[input.name];
      if (value === "") {
        errors[input.name] = "Este campo no puede estar vacio";
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errors[input.name] = errorMessage;
        }
      }
    });

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    if (validateForm()) {
      const constResponseLogin = await sendPostRequest({ endpoint: "users/login", body: values });

      if (constResponseLogin.ok) {
        saveUser({ email: values.email });
        router.push("/");
      } else {
        setErrors({
          ...errors,
          email: "Correo y/o password incorrecto",
          password: "Correo y/o password incorrecto",
        });
      }
    }
  };

  return (
    <main className="bg-white flex-grow flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px]">
        <a href="/" className="mb-14 flex items-center cursor-pointer">
          <Image
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt="Back to home"
            width={24}
            height={24}
          />
          <span className="ml-5 text-[--color-main-text]">Volver a la página de inicio</span>
        </a>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">Ingresa Con Tu Cuenta</h1>

        <form className="mb-5 flex flex-col gap-3" onSubmit={handleFormSubmit} autoComplete="off">
          {inputs.map(input => (
            <div key={input.name}>
              <TextField
                type={input.type ?? "text"}
                name={input.name}
                placeholder={input.placeholder}
                value={values[input.name]}
                onChange={handleInputChange}
              />
              <span className="text-red-500 mt-1 text-xs">{errors[input.name]}</span>
            </div>
          ))}

          <div className="h-10 mb-2">
            <Link href="/reset-password" className="text-base capitalize cursor-pointer">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100 ">
            Ingresar
          </button>

          <div className="text-center">
            <span className="text-neutral-950 text-base">¿Eres nuevo? </span>
            <Link href="/register" className="text-base underline cursor-pointer">
              Crea una cuenta
            </Link>
          </div>
        </form>

        {debugMode && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-3 text-center">
              Modo de desarrollo - Autocompletar login
            </p>
            <button
              type="button"
              onClick={handleAutoFillLogin}
              className="w-full flex items-center justify-center px-4 py-3 bg-gray-700 hover:bg-gray-800 text-white text-sm capitalize leading-normal transition-colors duration-200"
            >
              Rellenar campos de login
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
