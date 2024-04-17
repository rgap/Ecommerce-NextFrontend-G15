import { notFound } from "next/navigation";

export default function ProductDetailPageWithSlug({ params }) {
  const { productId, productSlug } = params;

  // Fetch the product details from an API or database using the `id` and `slug` parameters
  // const product = fetchProductDetails(id, slug);

  const product = true;

  // If no product is found, return the notFound property
  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>
        Product Details {productId} {productSlug}
      </h1>
      {/* Render the product details */}
    </div>
  );
}
