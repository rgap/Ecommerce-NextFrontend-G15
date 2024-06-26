import { ProductActions, ProductCard, ProductImageSlider, RelatedProducts } from "@/components";
import { sendGetRequest } from "@/services";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailsPage({ params }) {
  const { productSlug } = params;
  const productRequest = await sendGetRequest({ endpoint: `products/get-product-pdp-by-slug/${productSlug}`, cache: "revalidate-12h" });

  // If no product is found, display the notFound page
  if (!productRequest.ok) {
    notFound();
  }

  const product = productRequest.data;

  return (
    <>
      <main className="py-8 px-4 md:px-8 bg-[--color-bg] flex-grow flex justify-center">
        <section className="flex flex-col gap-8 max-w-[1200px] mb-4">
          {/* Navigation breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="flex text-xl">
              <li className="mr-2">
                <Link href="/products" className="text-[--color-link-text] hover:underline font-semibold	cursor-pointer">
                  Productos
                </Link>
              </li>
              <li className="text-gray-700 font-bold">/</li>
              <li className="ml-2 font-bold">{product.title}</li>
            </ol>
          </nav>

          {/* Product details section */}
          <section className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 ">
              <ProductImageSlider product={product} />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 bg-white shadow-lg p-6 rounded-lg">
              <h1 className="text-2xl font-bold mb-4 text-center md:text-left">{product.title}</h1>
              <p className="mb-4">{product.description}</p>

              <div className="mb-4 p-4 bg-gray-100 rounded-md">
                <strong>Materiales:</strong> {product.material}
              </div>
              <div className="mb-4 p-4 bg-gray-100 rounded-md">
                <strong>Instrucciones:</strong> {product.care}
              </div>

              <ProductActions product={product} />
            </div>
          </section>
          {/* Related products section */}
          <RelatedProducts product={product} />
        </section>
      </main>
    </>
  );
}
