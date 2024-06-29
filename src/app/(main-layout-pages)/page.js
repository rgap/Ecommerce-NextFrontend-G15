import { ConfirmationModal } from "@/components";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { BackgroundImageSlider, ProductCard } from "@/components";
import { sendGetRequest } from "@/services";

// const ConfirmationModal = dynamic(() => import("@/components/ConfirmationModal"), { ssr: false });

export default async function Home() {
  const productsRequest = await sendGetRequest({ endpoint: "products/get-products-plp/random", cache: "revalidate-5min" });
  const productsArray = productsRequest.data;

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
                {productsArray.slice(0, 4).map(product => (
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
                    width={331}
                    height={511}
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
        </section>

        <section className="w-fit m-auto relative max-w-[1200px]">
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <Image
                className="transform scale-100 hover:scale-[1.05] transition-transform duration-[0.25s]"
                src="https://raw.githubusercontent.com/rgap/Ecommerce-G15-ImageRepository/main/images/algodon.jpg"
                alt=""
                height={492}
                width={1200}
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

      <ConfirmationModal />
    </>
  );
}
