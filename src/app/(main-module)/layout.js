import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
