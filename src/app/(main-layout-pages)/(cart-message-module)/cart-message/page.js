"use client";
import { Button } from "@/components";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartMessage() {
  const globalUser = useUserStore(state => state.user);
  const checkoutInfo = useCartStore(state => state.checkoutInfo);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!(checkoutInfo.orderId == "000")) {
      // reset cart
      useCartStore.getState().resetCart();
    }
  }, [checkoutInfo]);

  useEffect(() => {
    if (!globalUser && initialLoadComplete) {
      router.push("/login");
    } else {
      setInitialLoadComplete(true);
    }
  }, [globalUser, router, initialLoadComplete]);

  return (
    <main className="text-center flex-grow flex justify-center flex-col  items-center gap-10 bg-white mb-20 mt-20 my-8 px-10">
      <Image
        className="w-[65px] h-[65px] mt-5 md:mt-0"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/payment-check-circle.svg"
        alt="Payment success icon"
        width={65}
        height={65}
      />
      <p className="text-[#00966D] text-[40px] font-bold capitalize leading-10 break-words">Pago exitoso</p>
      <p className="text-xl">
        <span className="font-semibold"> GRACIAS </span>, la orden #{checkoutInfo?.orderId || "---"} ha sido
        <span className="font-semibold"> GENERADA </span>.
      </p>
      <p className="text-xl">
        El recibo de su compra ha sido enviado a<span className="font-semibold"> {checkoutInfo?.payerEmail || "---"} </span>
      </p>

      <p className="text-lg">Contactenos en caso de alguna duda con respecto a su pedido.</p>
      <div className="flex gap-2 place-items-center md:mb-0 mb-5">
        <Image
          className="w-5 h-5"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/whatsapp.svg"
          alt="WhatsApp icon"
          width={20}
          height={20}
        />
        <p className="text-sm text-[#404040]"> + 51 123909090</p>
      </div>

      <div className="border flex w-[180px] h-[60px] justify-center items-center gap-1 flex-shrink-0">
        <Button ruta="/" text="Volver al Inicio" type="" variant="primary" className="hover:cursor-pointer" />
      </div>
    </main>
  );
}
