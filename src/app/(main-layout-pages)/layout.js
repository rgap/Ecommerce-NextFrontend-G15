import { Footer, Header } from "@/components";

export default function MainLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
