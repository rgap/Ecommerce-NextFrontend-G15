"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ProductImageSlider({ product }) {
  const [mainImage, setMainImage] = useState(product.mainImage);

  const renderImageSlider = () => {
    return (
      <div className="flex overflow-x-auto">
        <Image
          key={0}
          src={product.mainImage}
          width={250}
          height={150}
          alt={`Product ${0}`}
          className="w-24 h-24 object-cover mr-2 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out"
          onClick={() => setMainImage(product.mainImage)}
        />
        {product.imageArray.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={250}
            height={150}
            alt={`Product ${index}`}
            className="w-24 h-24 object-cover mr-2 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Image src={mainImage} alt={product.title} className="w-full h-auto mb-4" width={500} height={300} />
      <div className="mt-4">{renderImageSlider()}</div>
    </>
  );
}
