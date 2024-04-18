import ProductCard from "@/components/ProductCard";
import { allProducts } from "@/mockData/products";
import Link from "next/link";

function Products() {
  const productsArray = allProducts.data;
  const limit = 12;

  return (
    <main className="p-4 bg-[var(--color-bg)] flex justify-center">
      <section className="flex flex-col gap-5 mt-4 mb-16">
        <nav aria-label="breadcrumb">
          <ol className="flex text-xl">
            <li className="mr-2">
              {/* Here we apply the styling directly to the Link component */}
              <Link href="/" className="text-[var(--color-link-text)] hover:underline font-semibold cursor-pointer">
                Página Principal
              </Link>
            </li>
            <li className="text-gray-700 font-bold">/</li>
            <li className="ml-2 font-bold">Productos</li>
          </ol>
        </nav>

        <div className="my-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1100px]">
          {productsArray.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* <div className="my-0 m-auto text-center">
          {limit < productsArray.length && (
            <button
              onClick={loadMoreProducts}
              className="mb-0 mt-8 items-center px-20 py-6 bg-[var(--color-cart-text-button-comp)] hover:bg-[var(--color-cart-text-button-comp-hover)] text-white text-sm capitalize leading-normal transition-transform duration-100 shadow-lg hover:shadow-xl"
            >
              Cargar Más
            </button>
          )}
        </div> */}
      </section>
    </main>
  );
}

export default Products;
