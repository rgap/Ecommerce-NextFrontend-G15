"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  function redirect(route) {
    return event => {
      router.push(route);
    };
  }

  return (
    <main className="bg-white flex-grow flex justify-center items-center p-5">
      <div className={`bg-white p-6 w-full max-w-[420px] md:min-w-[380px]}`}>
        <a className="mb-14 flex items-center cursor-pointer" onClick={redirect("/login")}>
          <Image
            className="w-5"
            src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/arrow_back.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="ml-5 text-[--color-main-text]">Volver a iniciar sesión</span>
        </a>
        <h1 className="font-semibold mb-5 text-center capitalize text-3xl">Cambio de Contraseña</h1>
        <div className="mb-5 flex flex-col gap-3">
          <div className="text-center mb-5">
            <span className="text-neutral-950 text-base">Esta funcionalidad fue desabilitada para la demo</span>
          </div>
          <button
            className="w-full flex mb-6 mt-2 items-center justify-center px-4 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
            onClick={redirect("/login")}
          >
            Volver atras
          </button>
        </div>
      </div>
    </main>
  );
}
