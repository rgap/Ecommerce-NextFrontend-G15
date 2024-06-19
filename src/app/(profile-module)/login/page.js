"use client";
import { useUserStore } from "@/store/useUserStore"; // Adjust the path as needed
import { useCallback, useState } from "react";
// import { GoogleLoginButton, TextField } from "@/components/GoogleLoginButton";
import TextField from "@/components/TextField";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { sendPostRequest } from "../../services";
import { inputs } from "./form";

export default function Login() {
  const router = useRouter();
  const { user, saveUser, logOutUser } = useUserStore();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleBackClick = () => {
    // router.back();
    router.push("/");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleResetClick = () => {
    router.push("/reset-password");
  };

  const handleInputChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    const validations = {
      email: value => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return `Formato de correo invalido`;
        }
      },
    };

    inputs.forEach(input => {
      const value = values[input.name];
      if (value === "") {
        errors[input.name] = `Este campo no puede estar vacio`;
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
    if (validateForm()) {
      const response = await sendPostRequest(values, "users/login");

      if (response.ok) {
        // login successful
        saveUser({ email: values.email });
        router.push("/");
      } else {
        // login error
        setErrors({
          ...errors,
          email: "Correo y/o password incorrecto",
          password: "Correo y/o password incorrecto",
        });
      }
    }
  };

  const handleGoogleLoginOrRegister = useCallback(
    async idToken => {
      try {
        const response = await sendPostRequest({ token: idToken }, "users/auth/google");
        if (!response.ok) {
          throw new Error("Failed to verify Google ID token");
        }
        const userData = await response.data;
        saveUser({ email: userData.email });
        // User validated
        router.push("/");
      } catch (error) {
        console.error("Error during Google login or registration:", error);
      }
    },
    [saveUser, router]
  );

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px]">
        <a className="mb-14 flex items-center cursor-pointer" onClick={handleBackClick}>
          <Image
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
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
            <a onClick={handleResetClick} className="text-base capitalize cursor-pointer">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100 ">
            Ingresar
          </button>

          <div className="flex flex-col items-center justify-center text-xs mb-6 text-center gap-6">
            <p>o entra con tu cuenta gmail</p>
            {/* <GoogleLoginButton onUserLogin={handleGoogleLoginOrRegister} /> */}
          </div>

          <div className="text-center">
            <span className="text-neutral-950 text-base">¿Eres nuevo? </span>
            <a onClick={handleRegisterClick} className="text-base underline cursor-pointer">
              Crea una cuenta
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
