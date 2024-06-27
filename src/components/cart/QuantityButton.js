"use client";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

export default function QuantityButton({ productId, productQuantity, product, className }) {
  const { addToCart, removeFromCart } = useCartStore(state => state);

  const handleAddToCart = product => {
    addToCart(product);
  };

  const handleRemoveFromCart = productId => {
    removeFromCart(productId);
  };

  return (
    <div className={`${className} flex justify-between w-[70px] h-5 md:w-[90px] md:h-7`}>
      <Image
        onClick={() => handleRemoveFromCart(productId)}
        className="cursor-pointer w-5 h-5 md:w-7 md:h-7 bg-[--color-quantity-button] hover:scale-90 hover:text-black"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/minimize.svg"
        alt="Decrease quantity"
        width={20}
        height={20}
      />

      <p className="text-sm md:text-lg self-baseline"> {productQuantity} </p>

      <Image
        onClick={() => handleAddToCart(product)}
        className="cursor-pointer w-5 h-5 md:w-7 md:h-7 bg-[--color-quantity-button] hover:scale-90 hover:text-black"
        src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/add.svg"
        alt="Increase quantity"
        width={20}
        height={20}
      />
    </div>
  );
}
