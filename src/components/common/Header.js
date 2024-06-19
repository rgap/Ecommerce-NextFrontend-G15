"use client";

import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const router = useRouter();
  // const globalUser = "r.guzmanap@gmail.com";
  const globalUser = useUserStore(state => state.user);
  const globalCart = useCartStore(state => state.cart);
  const [total, setTotal] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProductsClick = () => {
    router.push("/products");
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (total > 0) {
      router.push("/cart", { state: { from: router.asPath } });
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    setTotal(
      globalCart.reduce((accumulator, product) => {
        return accumulator + product.quantity;
      }, 0)
    );
  }, [globalCart]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              priority={true}
            />
          </Link>
        </div>
        <div className="nav-center">
          <ul className="flex gap-6 text-left text-xs md:text-lg md:gap-x-12">
            <li className="cursor-pointer flex items-center">
              <Link href="/products" className="nav-center-link" data-link-alt="Productos">
                <span>Productos</span>
              </Link>
            </li>
            <li className="cursor-pointer hidden md:block">
              <Link href="/news" className="nav-center-link" data-link-alt="Novedades">
                <span>Novedades</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right flex px-4 gap-7 relative">
          {globalUser ? (
            <Link href="/profile">
              <Image
                className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/login.svg"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          ) : (
            <Link href="/login" className="nav-center-link cursor-pointer" data-link-alt="Iniciar Sesión">
              <span>Iniciar Sesión</span>
            </Link>
          )}
          <div className="relative" ref={dropdownRef}>
            <Image
              onClick={toggleDropdown}
              className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/shopping-cart.svg"
              alt=""
              width={20}
              height={20}
            />

            {/* Contador del carrito */}
            {total > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                {total}
              </span>
            )}

            {isDropdownOpen && (
              <section className="absolute right-[-20px] mt-2 py-2 w-[280px] shadow-xl z-50 bg-[#9dbf97] text-sm text-center">
                <div className="flex items-center px-10 pt-4">
                  <div className="flex flex-col align-center gap-1">
                    <div className="capitalize m-auto font-bold">Tu carrito de compra esta vacio</div>
                    <div className="capitalize m-auto">Aun no sabes que elegir?</div>
                    <button
                      onClick={handleProductsClick}
                      className="m-auto mb-6 mt-2 items-center px-2 py-3 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                    >
                      Ver Productos
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
