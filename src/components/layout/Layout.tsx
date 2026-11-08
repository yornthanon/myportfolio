import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { profile } from "@/data/profile";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.title = profile.name.trim();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      <Navbar />
      <div className="page-content">
        <main className="pt-[calc(var(--nav-h)_+_16px)]">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
