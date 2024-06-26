"use client";
import { useCartStore } from "@/store/useCartStore";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductActions({ product }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [availableStock, setAvailableStock] = useState(0);
  const [currentPrice, setCurrentPrice] = useState("");
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.minimumPriceColor);
      setSelectedSize(product.minimumPriceSize);
    }
  }, [product]);

  useEffect(() => {
    if (product && selectedSize && selectedColor) {
      const stock = product.stock[selectedSize][selectedColor];
      const price = product.prices[selectedSize][selectedColor];
      setAvailableStock(stock);
      setCurrentPrice(price);
    }
  }, [product, selectedSize, selectedColor]);

  const renderSizes = () =>
    product.availableSizes.map(size => (
      <button
        key={size}
        className={`p-2 border mr-2 rounded-lg shadow-lg hover:shadow-xl ${
          selectedSize === size ? "bg-[--color-cart-text-button-comp] text-white" : "bg-white hover:bg-gray-300 border-gray-300"
        }`}
        onClick={() => setSelectedSize(size)}
      >
        {size.toUpperCase()}
      </button>
    ));

  const renderColorOptions = () =>
    product.availableColors.map(color => (
      <button
        key={color.name}
        style={{ backgroundColor: color.hexCode }}
        className={`w-8 h-8 mr-2 border-2 rounded-lg shadow-lg hover:shadow-xl${
          selectedColor === color.name ? " border-black" : " hover:border-gray-300"
        }`}
        onClick={() => setSelectedColor(color.name)}
      ></button>
    ));

  const handleAddToCart = () => {
    addToCart({
      color: selectedColor,
      id: `${product.id}.${selectedSize}.${selectedColor}`,
      title: product.title,
      price: currentPrice,
      quantity: 1,
      size: selectedSize,
      url: product.mainImage,
      productPath: location.pathname,
    });

    toast(
      <>
        <strong>{product.title}</strong> fue agregado al carrito de compras
      </>,
      {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        style: customToastStyle,
      }
    );
  };

  const customToastStyle = {
    backgroundColor: `var(--color-link-text)`,
    color: "white",
  };

  function formatPrice(price) {
    return new Intl.NumberFormat("es-PE", {
      style: "currency",
      currency: "PEN",
    }).format(price);
  }

  return (
    <>
      <ToastContainer position="top-left" />
      <div className="mb-4 p-4 bg-gray-100 rounded-md">
        <strong>Precio:</strong> {formatPrice(currentPrice)}
      </div>

      <div>
        <div className="flex lg:flex-row md:flex-col flex-col  items-center mb-4 mt-8 justify-between gap-6 lg:gap-0">
          <div className="flex">
            {renderColorOptions()}
            {selectedColor && (
              <span className="ml-2 text-lg">
                Color: <strong>{selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}</strong>
              </span>
            )}
          </div>
          <div className="mt-4 sm:mt-0">{renderSizes()}</div>
          <button
            onClick={handleAddToCart}
            className="items-center px-7 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm leading-normal transition-transform duration-300 ease-in-out "
          >
            Agregar al carrito
          </button>
        </div>

        {selectedSize && selectedColor && (
          <div className="text-lg mb-4 mt-8 text-center lg:text-left">
            Stock Disponible: <strong>{availableStock}</strong>
          </div>
        )}
      </div>
    </>
  );
}
