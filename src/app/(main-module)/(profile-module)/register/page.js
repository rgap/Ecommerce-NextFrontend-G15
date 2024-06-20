"use client";
// import { GoogleLoginButton, TextField } from "@/components/GoogleLoginButton";
import TextField from "@/components/common/TextField";
import { useUserStore } from "@/store/useUserStore"; // Import the Zustand store
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
// import { sendPostRequest } from "../../services";
import checkIfEmailExists from "@/mockData/products/checkIfEmailExists";
import Image from "next/image";
import Link from "next/link";
import { inputs } from "./form";

export default function Register() {
  const router = useRouter();
  const saveUser = useUserStore(state => state.saveUser); // Get the saveUser function from Zustand store

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function redirect(route) {
    return event => {
      event.preventDefault();
      router.push(route);
    };
  }

  const handleInputChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    const errorsEmpty = {};

    const validations = {
      name: value => {
        if (!value.trim()) {
          return `No puede ser solo espacios en blanco`;
        } else if (value.trim().length < 3) {
          return `El nombre debe tener al menos 3 caracteres`;
        }
      },
      email: value => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(value)) {
          return `Formato de correo invalido`;
        }
      },
      password: value => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(value)) {
          return `Al menos 8 caracteres, incluyendo una letra y un número`;
        }
      },
    };

    inputs.forEach(input => {
      const value = values[input.name];

      if (value === "") {
        errorsEmpty[input.name] = `Este campo no puede estar vacio`;
      } else if (validations[input.name]) {
        const errorMessage = validations[input.name](value);
        if (errorMessage) {
          errorsEmpty[input.name] = errorMessage;
        }
      }
    });

    setErrors(errorsEmpty);
    return Object.keys(errorsEmpty).length === 0;
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    const debug = false;

    if (debug) {
      // await sendPostRequest(values, "users/register");
      // saveUser({ email: user.email });
      router.push("/?showModal=true");
    } else if (validateForm()) {
      const response = checkIfEmailExists();
      // const response = await sendPostRequest(
      //   {
      //     email: values.email,
      //   },
      //   "users/check-if-email-exists"
      // );
      // console.log("response", response);

      if (response.ok == true) {
        // User exists
        setErrors(prevErrors => ({
          ...prevErrors,
          email: "Ya existe un usuario con ese correo",
        }));
      } else {
        // User not found
        // await sendPostRequest(values, "users/register");
        router.push("/?showModal=true");
      }
    }
  };

  // const handleGoogleLoginOrRegister = useCallback(
  //   async idToken => {
  //     try {
  //       const response = await sendPostRequest({ token: idToken }, "users/auth/google");
  //       if (!response.ok) {
  //         throw new Error("Failed to verify Google ID token");
  //       }
  //       const userData = await response.data;
  //       saveUser({ email: userData.email });
  //       // User validated
  //       router.push("/");
  //     } catch (error) {
  //       console.error("Error during Google login or registration:", error);
  //     }
  //   },
  //   [saveUser, router]
  // );

  return (
    <main className="bg-white h-full flex justify-center items-center p-5">
      <div className="bg-white p-6 w-full max-w-[420px] md:min-w-[380px]">
        <a className="mb-14 flex items-center cursor-pointer" href="/login">
          <Image
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="ml-5 text-[--color-main-text]">Volver al inicio de sesión</span>
        </a>
        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">Crear Cuenta</h1>
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

          <button className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100 ">
            Registrarse
          </button>

          <div className="h-10 flex justify-center items-center mb-2">
            <p className="text-sm capitalize">ya tienes una cuenta?</p>
            <Link href="/login" className="pl-4 text-center text-sm capitalize cursor-pointer">
              Ingresar
            </Link>
          </div>
        </form>
        {/* <div className="flex flex-col items-center justify-center text-xs mb-6 text-center gap-6">
          <p>o entra con tu cuenta gmail</p>
          <GoogleLoginButton onUserLogin={handleGoogleLoginOrRegister} />
        </div>  */}

        <div className="text-center">
          <span className="text-neutral-950 text-xs">Al hacer clic en &quot;Registrarse&quot;, aceptas los</span>
          &nbsp;
          <Link href="#" className="text-xs underline">
            terminos y condiciones
          </Link>
          <span className="text-xs"> y la </span>
          <Link href="#" className="text-xs underline">
            política de privacidad
          </Link>
          <span className="text-xs">.</span>
        </div>
      </div>
    </main>
  );
}
