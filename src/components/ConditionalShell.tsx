"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Routes that render standalone, without the site chrome (navbar/footer/floating CTAs).
  const isBare = pathname.startsWith("/admin") || pathname.startsWith("/cv") || pathname.startsWith("/book");

  return (
    <>
      {!isBare && <Navbar />}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {!isBare && <Footer />}
      {!isBare && <FloatingActions />}
    </>
  );
}
