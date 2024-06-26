import MainLayout from "@/app/(main-layout-pages)/layout";
import Link from "next/link"; // Import Link from next/link

export default function NotFound() {
  return (
    <MainLayout>
      <main className="flex-grow flex flex-col items-center justify-center text-center bg-gray-100">
        <h1 className="mb-4 text-6xl --color-main-text">404</h1>
        <p className="mb-8 text-2xl">Page Not Found</p>
        <p className="mb-8">¡Oh no! Al parecer, al parecer la página que buscabas ya no se existe </p>
        <Link href="/">
          <button className="flex mb-6 mt-2 items-center justify-center px-20 py-4 bg-[--color-cart-text-button-comp] hover:bg-[--color-cart-text-button-comp-hover] text-white text-sm leading-normal transition-transform duration-100 ">
            Ir al Inicio
          </button>
        </Link>
      </main>
    </MainLayout>
  );
}
