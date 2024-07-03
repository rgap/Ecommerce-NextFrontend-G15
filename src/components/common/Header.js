"use client";

import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const router = useRouter();
  const globalUser = useUserStore(state => state.user);
  const globalCart = useCartStore(state => state.cart);
  const [total, setTotal] = useState(0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("Mobile menu toggled:", !isMobileMenuOpen);
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // 768px is the breakpoint for md in Tailwind by default
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-[--color-bg] relative z-10">
      <div className="header-bar py-2 flex items-center justify-center">
        <marquee className="text-xs md:text-sm tracking-wide">
          Delivery <span className="font-semibold">gratis</span> por compras a partir de <span className="font-semibold">S/199.00</span> soles
        </marquee>
      </div>

      <nav className="p-2.5 md:p-2 flex justify-between items-center md:px-4 min-h-16">
        {/* Hamburger Menu Button */}
        <div className="nav-left md:px-3.5 px-4 w-[100px] md:hidden">
          <button className="md:hidden z-50" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}>
            <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div
              className={`w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}
            ></div>
          </button>
        </div>

        <div className="md:px-3.5 block">
          <Link href="/">
            <Image
              className="h-[50px] w-auto md:h-[70px] hover:cursor-pointer"
              src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
              alt=""
              width={175}
              height={121}
              priority={true}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-center hidden md:block">
          <ul className="flex gap-6 text-left text-xs md:text-lg md:gap-x-12">
            <li className="cursor-pointer flex items-center">
              <Link href="/products" className="nav-center-link" data-link-alt="Productos">
                <span>Productos</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/news" className="nav-center-link" data-link-alt="Novedades">
                <span>Novedades</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-right flex px-4 gap-7 relative z-20">
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-3/6 h-full bg-[--color-bg] z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button className="absolute top-2 right-4 text-5xl" onClick={closeMobileMenu} aria-label="Close menu">
          &times;
        </button>
        <div className="flex flex-col items-center justify-start h-full pt-16">
          <section className="flex flex-col gap-3 items-center">
            <div className="block">
              <Link href="/">
                <Image
                  className="h-[60px] w-auto md:h-[60px] hover:cursor-pointer"
                  src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/logo/beautipol-textlogo.png"
                  alt=""
                  width={175}
                  height={121}
                  priority={true}
                />
              </Link>
            </div>

            <Link href="/products" className="py-2 text-xl cursor-pointer text-[#404040] font-bold" onClick={closeMobileMenu}>
              Productos
            </Link>
            <Link href="/news" className="py-2 text-xl cursor-pointer text-[#404040] font-bold" onClick={closeMobileMenu}>
              Novedades
            </Link>
          </section>
        </div>
      </div>
    </header>
  );
}
