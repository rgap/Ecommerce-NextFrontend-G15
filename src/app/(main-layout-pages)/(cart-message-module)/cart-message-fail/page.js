import { Button } from "@/components";
import Image from "next/image";

export default function CartMessageFail() {
  return (
    <main className="text-center flex-grow flex justify-center flex-col  items-center gap-10 bg-white mb-20 mt-20 my-8 px-10">
      <Image
        className="w-[65px] h-[65px] mt-5 md:mt-0"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/82306af9c3214a4e16f35b88166da045a8b7bc40/icons/payment-check-error.svg"
        alt="Payment error icon"
        width={65}
        height={65}
      />
      <p className="text-[#C30000] text-[40px] font-bold capitalize leading-10 break-words">ERROR</p>
      <p className="text-xl">Desafortunadamente su orden no pudo ser procesada.</p>
      <p className="text-xl text-center break-words">Si lo prefiere, pruebe con otro método de pago.</p>

      <div className="border flex w-[180px] h-[60px] justify-center items-center gap-1 flex-shrink-0">
        <Button ruta="/cart-payment" text="Volver a Intentar" type="" variant="primary" className="hover:cursor-pointer" />
      </div>
    </main>
  );
}
