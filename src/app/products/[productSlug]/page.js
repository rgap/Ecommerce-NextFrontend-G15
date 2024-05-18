import { getProductBySlug } from "@/mockData/products";
import { notFound } from "next/navigation";

export default function ProductDetailsPage({ params }) {
  const { productSlug } = params;

  const product = getProductBySlug(productSlug);

  // If no product is found, return the notFound property
  if (!product) {
    notFound();
  }

  return (
    <div>
      <h1>Product Details {productSlug}</h1>
      {/* Render the product details */}
    </div>
  );
}
