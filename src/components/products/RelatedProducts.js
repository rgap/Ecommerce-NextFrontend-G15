import { ProductCard } from "@/components";
import { sendPostRequest } from "@/services";

export default async function RelatedProducts({ product }) {
  const responseRelatedProducts = await sendPostRequest({
    endpoint: "products/related/4",
    body: {
      title: product.title,
      excludeProductId: product.id,
    },
  });
  const relatedProducts = responseRelatedProducts.data;

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold my-10 text-center md:text-left">También te puede interesar</h2>
      <div className="related-products">
        {relatedProducts && relatedProducts.length > 0 ? (
          <div className="my-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center">Cargando productos relacionados...</div>
        )}
      </div>
    </section>
  );
}
