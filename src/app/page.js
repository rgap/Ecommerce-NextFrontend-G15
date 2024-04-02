import Image from "next/image";
import Link from "next/link";

import BackgroundImageSlider from "@/components/BackgroundImageSlider";
import ProductCard from "@/components/ProductCard";
import { randomProducts } from "@/mockData/products";

export default function Home() {
  const productsArray = randomProducts.data;
  // Array of image URLs for the hero section
  const imageUrls = [
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polos-de-verano-hero.jpg",
    "https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polos-colgados-verdes-hero.jpg",
  ];

  return (
    <>
      <section className="hero bg-[--color-bg]">
        <BackgroundImageSlider imageUrls={imageUrls}>
          <div className="flex justify-center items-center flex-col h-full gap-14">
            <div className="bg-white bg-opacity-50 p-12 space-y-4">
              <div>
                <p className="text-3xl font-bold md:text-4xl text-center tracking-wide">NUEVA COLECCION</p>
              </div>
              <div>
                <p className="text-2xl font-semibold md:text-3xl text-center tracking-wide">VERANO 2024</p>
              </div>
            </div>
            <Link
              href="/products"
              className="flex items-center justify-center w-[184px] px-4 py-5 text-white text-[16px] font-normal capitalize leading-normal transition-transform duration-100 hover:scale-110 shadow-lg hover:shadow-xl bg-[#3EA381]"
            >
              Ver Productos
            </Link>
          </div>
        </BackgroundImageSlider>
      </section>

      <main className="px-5 bg-[--color-bg] pb-8">
        <section className="flex justify-center">
          <div className="max-w-[1200px]">
            <div className="my-10 font-semibold text-3xl text-center sm:text-left">
              <span>Polos de Diseño Variado</span>
            </div>
            {productsArray && productsArray.length > 0 ? (
              <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {productsArray.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="my-4 text-center">No hay productos aún</div>
            )}
          </div>
        </section>
        <section className="flex justify-center">
          <div className="flex justify-center flex-col items-center max-w-[1200px]">
            <div className="font-semibold text-3xl w-full my-10 text-center sm:text-left">
              <span>Nueva Colección</span>
            </div>
            <div className="grid grid-cols-1 gap-6 my-4 md:grid-cols-2 md:gap-10 md:mb-16 m-auto max-w-[1200px]">
              <div className="flex flex-col gap-y-8 md:gap-y-20 justify-between">
                <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Image
                    className="w-full h-auto aspect-square object-cover object-top transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-blanco-modelo-home.jpg"
                    alt="Polo Blanco Modelo"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Image
                    className="object-contain w-full h-auto transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-colgador-home.jpg"
                    alt="Polo Colgador"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="flex flex-col md:gap-10 justify-between">
                <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Image
                    className="object-contain w-full h-auto transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-modelo-home.jpg"
                    alt="Polo Negro Modelo"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Image
                    className="w-full h-auto aspect-square object-cover object-top transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
                    src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/polo-negro-mano-colgando-home.jpg"
                    alt="Polo Negro Mano Colgando"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="modal__backdrop" onClick={closeModal}></div>
          <div className="modal md:w-1/2 lg:w-2/3 max-w-[820px] p-10 sm:p-10">
            <svg className="modal__close-button" onClick={closeModal} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
            </svg>

            <div className="bg-white">
              <div className="text-center text-3xl font-semibold capitalize mb-8">Verifica tu correo electrónico</div>
              <div className="text-center text-lg leading-loose">Te hemos enviado un correo electrónico para verificarlo y activar tu cuenta.</div>
              <div className="text-center text-lg leading-loose mb-8">Revisa tu correo electrónico.</div>
              <div className="text-center text-lg leading-loose mb-8">El enlace del correo electrónico caducará en 24 horas.</div>
              <div className="w-6 h-6 left-[24px] top-[24px] absolute"></div>
            </div>
          </div> */}
        </section>

        <section className="w-fit m-auto relative max-w-[1200px]">
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <Image
                className="transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/algodon.jpg"
                alt=""
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="absolute max-w-[200px] text-xs bottom-2 right-1 md:text-lg md:min-w-[350px] md:bottom-5 md:right-5 ">
            <div className="bg-white bg-opacity-80 md:bg-opacity-0">
              <p className="text-center pb-[0px]">
                Todas nuestras prendas son confeccionadas con algodón
                <span className="font-bold"> Pima Peruano. </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
