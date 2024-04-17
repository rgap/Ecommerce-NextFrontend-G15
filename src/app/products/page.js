import Link from "next/link";

// Assuming you've fetched the list of products from an API or database
const products = [
  { id: 1, name: "Product 1", slug: "product-1" },
  { id: 2, name: "Product 2", slug: "product-2" },
  // ...
];

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}/${product.slug}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
