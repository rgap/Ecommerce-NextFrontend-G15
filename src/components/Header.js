import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// import DropDownCart from "@/components/DropDownCart";

export default function Header() {
  const globalUser = false;
  return (
    <header className="bg-[--color-bg]">
      <div className="header-bar py-2 flex items-center justify-center">
        <marquee className="text-xs md:text-sm tracking-wide">
          Delivery <span className="font-semibold">gratis</span> por compras a partir de <span className="font-semibold">S/199.00</span> soles
        </marquee>
      </div>

      <nav className="max-sm:p-4 flex justify-between items-center md:px-4">
        <div className="nav-left md:px-3.5">
          <Link href="/">
            <Image
              className="h-[70px] max-sm:hidden cursor-pointer"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
              alt=""
              width={200}
              height={70}
            />
          </Link>
        </div>
        <div className="nav-center">
          <ul className="flex gap-6 text-left text-xs md:text-lg md:gap-x-12">
            <li className="cursor-pointer flex items-center">
              <Link className="nav-center-link" href="/products" data-link-alt="Productos">
                <span>Productos</span>
              </Link>
            </li>
            <li className="cursor-pointer hidden md:block">
              <Link className="nav-center-link" href="/news" data-link-alt="Novedades">
                <span>Novedades</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right flex px-4 gap-7 relative">
          {globalUser ? (
            <Image
              className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/login.svg"
              alt=""
              onClick={() => {
                revalidatePath("/");
                redirect("/profile");
              }}
            />
          ) : (
            <Link className="nav-center-link cursor-pointer" data-link-alt="Iniciar Sesión" href="login">
              <span>Iniciar Sesión</span>
            </Link>
          )}
          {/* <DropDownCart /> */}
        </div>
      </nav>
    </header>
  );
}
