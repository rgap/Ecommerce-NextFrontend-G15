import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Beautipol - Moda Minimalista",
  description:
    "Beautipol ofrece una amplia selección de ropa minimalista, portátil y versátil para personas con un estilo de vida minimalista. Encuentra prendas ligeras y adecuadas para diferentes escenarios, desde lo casual hasta viajes. Simplifica tu guardarropa.",
  keywords:
    "ropa minimalista, moda versátil, prendas portátiles, estilo de vida minimalista, compras en línea, moda online, estilo uniforme, simplifica tu guardarropa, moda para viajes, ropa ligera, vestimenta para diferentes escenarios, compra eficiente, estilo casual, moda de oficina, webapp de moda minimalista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
