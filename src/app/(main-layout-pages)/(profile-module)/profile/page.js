"use client";
/* eslint-disable react/prop-types */
import { EditableField } from "@/components";
import { sendPostRequest, sendPutRequest } from "@/services";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { inputsAccount } from "./form";

export default function Profile() {
  const router = useRouter();
  const { resetAll } = useCartStore();
  const { user, saveUser, logOutUser } = useUserStore(state => ({
    user: state.user,
    saveUser: state.saveUser,
    logOutUser: state.logOutUser,
  }));

  const [userID, setUserID] = useState("");

  const [originalPersonalData, setOriginalPersonalData] = useState({});
  const [isEditablePersonal, setIsEditablePersonal] = useState(false);

  const [personalData, setPersonalData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    region: "",
    country: "",
  });
  const [personalErrors, setPersonalErrors] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    city: "",
    region: "",
    country: "",
  });

  const hasErrors = errors => {
    return Object.values(errors).some(error => error !== "");
  };

  const personalDataIsDisabled = hasErrors(personalErrors);

  const validateField = (form, field, value) => {
    const trimmedValue = value.trim();

    switch (field) {
      case "name":
        if (!trimmedValue) {
          return "Campo nombre es obligatorio";
        }
        if (trimmedValue.length < 6) {
          return "Nombre es muy corto";
        }
        if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
          return "Nombre no puede contener números ni caracteres especiales";
        }
        break;
      case "email":
        if (!trimmedValue) {
          return "Campo email es obligatorio";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedValue)) {
          return "Ingresa un correo valido";
        }
        break;
      case "address":
        if (!trimmedValue) {
          return "Campo direccion es obligatorio";
        }
        if (trimmedValue.length < 10) {
          return "Direccion es muy corta";
        }
        break;
      case "phoneNumber":
        if (!trimmedValue) {
          return "Campo telefono es obligatorio";
        }
        if (!/^\+\d{1,3} \d{7,}$/.test(trimmedValue)) {
          return "Telefono debe estar en el formato +[codigo de pais] [numero]";
        }
        break;
      case "region":
      case "city":
        if (!trimmedValue) {
          return `Campo ${field} es obligatorio`;
        }
        if (!/^[A-Za-z\s]+$/.test(trimmedValue)) {
          return `${field.charAt(0).toUpperCase() + field.slice(1)} no puede contener números ni caracteres especiales`;
        }
        break;
      default:
        break;
    }
    return "";
  };

  const handleInputChange = (form, field) => event => {
    const value = event.target.value;
    let error = validateField(form, field, value);

    if (form === "personal") {
      setPersonalData({ ...personalData, [field]: value });
      setPersonalErrors({ ...personalErrors, [field]: error });
    }
  };

  const renderFields = (fields, isEditable, formData, formErrors, formName) => {
    return fields.map(field => {
      let displayValue = formData[field.name];

      return (
        <div key={field.name} className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-content">
          <label className="font-semibold text-center md:text-left flex-col self-center">{field.placeholder}</label>
          <EditableField
            isEditable={isEditable}
            type={field.type}
            value={displayValue}
            onChange={handleInputChange(formName, field.name)}
            inputClassName="border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start max-w-[400px] m-auto"
            labelClassName="block input-value text-center my-px"
            disabled={field.name == "country" || field.name == "email"}
            error={formErrors[field.name]}
          />
        </div>
      );
    });
  };

  async function initializeFormData() {
    const responseGetByEmail = await sendPostRequest({
      endpoint: "users/get-by-email",
      body: {
        email: user.email,
      },
    });

    if (responseGetByEmail.ok) {
      const foundUser = responseGetByEmail.data;
      setUserID(foundUser.id);
      setPersonalData(prev => ({ ...prev, ...filterKeys(foundUser, prev) }));
    }
  }

  function filterKeys(source, target) {
    const filtered = {};
    Object.keys(target).forEach(key => {
      if (key in source) {
        filtered[key] = source[key];
      }
    });
    return filtered;
  }

  useEffect(() => {
    initializeFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePersonalFormSubmit = async event => {
    event.preventDefault();
    const isDataChanged = Object.keys(personalData).some(key => personalData[key] !== originalPersonalData[key]);

    if (isEditablePersonal && isDataChanged && !hasErrors(personalErrors)) {
      await sendPutRequest({ endpoint: `users/${userID}`, body: { ...personalData } });
    } else {
      setOriginalPersonalData({ ...personalData });
    }
    setIsEditablePersonal(!isEditablePersonal);
  };

  const cancelEditModePersonal = event => {
    event.preventDefault();
    setPersonalData(originalPersonalData);
    setPersonalErrors({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      city: "",
      region: "",
      country: "",
    }); // Clear errors
    setIsEditablePersonal(!isEditablePersonal);
  };

  function redirect(route) {
    return event => {
      event.preventDefault();
      router.push(route);
    };
  }

  function logOut() {
    logOutUser();
    resetAll();
    router.push("/");
  }

  return (
    <main className="bg-white flex justify-center items-center p-5 h-fit">
      <div className="bg-white p-6 w-screen md:w-fit max-w-[550px] md:min-w-[380px]">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="flex text-xl mb-10 mt-2">
            <li className="mr-2">
              <a onClick={redirect("/")} className="text-[--color-link-text] hover:underline font-semibold cursor-pointer">
                Página Principal
              </a>
            </li>
            <li className="text-gray-700 font-bold">/</li>
            <li className="ml-2 font-bold">Perfil</li>
          </ol>
        </nav>

        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">Mi Cuenta</h1>

        {/* Personal Data Form */}

        <form className="mb-6 min-w-auto md:min-w-[510px]" autoComplete="off" onSubmit={handlePersonalFormSubmit}>
          <hr className="mb-3 h-[5px] bg-[--color-bg] border-0" />

          <div className="flex justify-between place-items-baseline items-center gap-3">
            <h2 className="text-lg sm:text-2xl mb-4 font-semibold">Datos de Cuenta</h2>
            {isEditablePersonal ? (
              <div className="flex gap-4">
                <button
                  className="mb-6 mt-2 items-center px-7 py-4 bg-[#B2767A] text-white text-sm capitalize leading-normal transition-transform duration-100"
                  type="submit"
                  onClick={cancelEditModePersonal}
                >
                  Cancelar
                </button>
                <button
                  className={`mb-6 mt-2 items-center px-7 py-4 text-white text-sm capitalize leading-normal transition-transform duration-100 
                ${personalDataIsDisabled ? "bg-gray-400" : "bg-[--color-cart-text-button-comp-hover]"}`}
                  type="submit"
                  disabled={personalDataIsDisabled}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <button
                className="mb-6 mt-2 items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100 "
                type="submit"
              >
                Cambiar
              </button>
            )}
          </div>

          <div id="personal" className="grid gap-4 md:gap-8 items-center mb-10 text-center md:text-start">
            {renderFields(inputsAccount, isEditablePersonal, personalData, personalErrors, "personal")}
          </div>
        </form>

        <div className="flex justify-center">
          <button
            className="mb-6 mt-8 items-center px-7 py-4 bg-[brown] text-white text-sm capitalize leading-normal transition-transform duration-100 "
            onClick={logOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </main>
  );
}
