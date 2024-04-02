"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function DropDownCart() {
  const total = 0;

  const navigate = useNavigate();

  function redirect(route) {
    return (event) => {
      event.preventDefault();
      navigate(route);
      setIsDropdownOpen(false);
    };
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    if (total > 0) {
      navigate("/cart", { state: { from: location.pathname } });
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div className="relative" ref={dropdownRef}>
      <Image
        onClick={toggleDropdown}
        className="w-5 cursor-pointer transform hover:scale-[1.3] transition-transform duration-[0.25s]"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/shopping-cart.svg"
        alt=""
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
                className="m-auto mb-6 mt-2 items-center px-2 py-3 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm capitalize leading-normal transition-transform duration-100"
                onClick={redirect("/products")}
              >
                Ver Productos
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
