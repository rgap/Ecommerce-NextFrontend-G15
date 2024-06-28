import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <>
      <div className="mx-5 my-3 md:mx-10 md:my-5">
        <Link href="/" passHref>
          <div className="inline-block">
            <Image
              className="h-[50px] w-auto md:h-[70px] hover:cursor-pointer"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
              alt="Beautipol Logo"
              width={175}
              height={121}
            />
          </div>
        </Link>
      </div>
    </>
  );
}
