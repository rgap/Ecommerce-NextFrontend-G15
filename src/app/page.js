import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/login">Iniciar Sesión</Link>
      <ProductCard />
    </main>
  );
}
