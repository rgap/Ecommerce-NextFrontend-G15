/* eslint-disable react/prop-types */
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, resizingStyle, hideColors }) {
  // const goToProductDetails = () => {
  //   const productPath = `${product.id}/${encodeURIComponent(product.title.replace(/\s+/g, "-"))}`;
  //   router.push(`/products/${productPath}`);
  // };

  const price = product.minimumPrice
    ? new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
      }).format(product.minimumPrice)
    : "Not available";

  return (
    // href={`/products/${product.id}/${product.slug}`}

    <Link
      className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl cursor-pointer bg-white"
      href={`/products/${product.slug}`}
    >
      <div className="p-4 bg-white h-full">
        <Image
          src={product.mainImage}
          alt={product.title}
          className="w-full h-auto mb-3 transition-transform duration-300 hover:scale-110" // Tailwind classes for transition and hover effect
          width={500}
          height={300}
          priority={true}
        />

        <div className="flex flex-col items-center">
          {/* Izquierda */}
          <div className="grid h-[120px] text-center align-center">
            <div>
              <h1 className="font-bold text-xl text-gray-800">{product.title}</h1>
            </div>
            <div>
              <p className="text-sm text-gray-600">{product.shortDescription}</p>
            </div>

            {/* Derecha */}
            <div className="flex items-center justify-around">
              <div className="flex items-center justify-around gap-5">
                {/* Colores */}
                {!hideColors && (
                  <div className="flex gap-0">
                    {product.availableColors.map((color, index) => (
                      <div
                        key={index}
                        style={{ backgroundColor: `${color.hexCode}` }}
                        className={`w-2 h-2 sm:w-6 sm:h-6 p-2 sm:p-2 rounded-full border-slate-400 border-2 mr-2 md:mr-[1px] lg:mr-2`}
                      ></div>
                    ))}
                  </div>
                )}
                <div className="text-[14px] sm:text-[16px] font-bold text-gray-800">{price}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
