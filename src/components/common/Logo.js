import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();
  function redirect(route) {
    return event => {
      event.preventDefault();
      router.push(route);
    };
  }

  return (
    <>
      <div className="mx-5 my-3 md:mx-10 md:my-5">
        <Image
          onClick={redirect("/")}
          className="h-[50px] md:h-[70px] hover:cursor-pointer"
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
          alt="Beautipol Logo"
          width={200}
          height={70}
        />
      </div>
    </>
  );
}
