"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const breadcrumbText = {
  "/cart": "Carrito",
  "/cart-info": "Información",
  "/cart-shipping": "Envío",
  "/cart-payment": "Pago",
};

export default function Breadcrumb() {
  const pathname = usePathname();
  const path = pathname;

  const orderedRoutes = Object.keys(breadcrumbText);
  const currentIndex = orderedRoutes.indexOf(path);

  const routesToShow = currentIndex === -1 ? orderedRoutes : orderedRoutes.slice(0, currentIndex + 1);

  return (
    <nav aria-label="breadcrumb" className="text-xl mb-5 font-semibold">
      <ol className="flex justify-center md:justify-start mt-3 mb-3">
        {routesToShow.map(route => (
          <li key={route} className="mr-2">
            {path === route ? (
              <span className="">{breadcrumbText[route]}</span>
            ) : (
              <Link href={route} className="text-[--color-link-text] hover:underline cursor-pointer">
                {breadcrumbText[route]}
              </Link>
            )}
            {route !== routesToShow[routesToShow.length - 1] && <span>&nbsp;/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
