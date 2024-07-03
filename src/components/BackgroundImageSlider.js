"use client";
import { useEffect, useState } from "react";

export default function BackgroundImageSlider({ imageUrls, children }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(currentIndex => (currentIndex + 1) % imageUrls.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div
      className="bord h-[400px] md:h-[520px] bg-center bg-cover relative bg-no-repeat"
      style={{
        backgroundImage: `url(${imageUrls[imageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
