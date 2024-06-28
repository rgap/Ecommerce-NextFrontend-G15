import { Logo } from "@/components/common";
export default function CartLayout({ children }) {
  return (
    //
    <main className="flex flex-col min-h-screen">
      <Logo />
      {children}
    </main>
  );
}
