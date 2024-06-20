"use client";
import Image from "next/image";
import { useState } from "react";

export default function TextField({ value, onChange, placeholder, className, type = "text", name }) {
  const [showPassword, setShowPassword] = useState(false);
  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      {type != "password" ? (
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          className={`w-full p-2 border border-[--color-form-border] placeholder:text-sm ${className} outline-none`}
          placeholder={placeholder}
        />
      ) : (
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={value}
            onChange={onChange}
            name={name}
            className="w-full p-2 border border-[--color-form-border] placeholder:text-sm outline-none"
            placeholder={placeholder}
          />
          <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-[22px] transform -translate-y-1/2">
            {showPassword ? (
              <Image
                alt=""
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/eye-open.svg"
                width={24}
                height={24}
              />
            ) : (
              <Image
                alt=""
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/icons/eye-closed.svg"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      )}
    </>
  );
}
