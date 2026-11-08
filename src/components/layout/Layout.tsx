import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { profile } from "@/data/profile";

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.title = profile.name.trim();

    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;

      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "auto" }));
      } else {
        window.scrollTo(0, 0);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
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
