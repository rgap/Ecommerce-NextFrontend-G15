"use client";
/* eslint-disable react/prop-types */
import { QuantityButton } from "@/components/cart";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductShoppingCart({
  productId,
  productImage,
  productTitle,
  productSize,
  productColor,
  productPrice,
  productQuantity,
  product,
  visible,
}) {
  const { deleteFromCart } = useCartStore(state => state);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleDeleteFromCart = productId => {
    deleteFromCart(productId);
  };

  const goToProductDetails = () => {
    const productPath = `${productId}/${encodeURIComponent(productTitle.replace(/\s+/g, "-"))}`;
    router.push(`/products/${productPath}`);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile(); // Check window size when page loads
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div className="flex flex-row gap-5 w-full border p-2 rounded-md bg-white hover:shadow-md " key={productId}>
      <div className="flex items-center md:items-start">
        <Image
          className="w-[100px] h-[100px] hover:scale-110"
          src={productImage}
          title={productTitle}
          alt={productTitle}
          width={100}
          height={100}
          onClick={goToProductDetails}
        />
      </div>

      <div className="flex-grow flex">
        <div className="flex flex-col capitalize gap-2 ml-2">
          <p className="font-semibold "> {productTitle} </p>
          <p className="text-sm"> Talla: {productSize} </p>
          <p className="text-sm"> Color: {productColor} </p>

          {isMobile || visible ? (
            <>
              <p className="text-sm "> Precio: S/.{productPrice} </p>

              <QuantityButton productId={productId} productQuantity={productQuantity} product={product} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <Image
          onClick={() => handleDeleteFromCart(productId)}
          className="h-6 w-6 hover:scale-125 hover:cursor-pointer border-2 "
          src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/d33fda00e112d0b57173f61dd0898f1d1f1f8b14/icons/close.svg"
          alt=""
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
