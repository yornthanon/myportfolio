import { useEffect, useState } from "react";
import type { Locale } from "@/types";

const STORAGE_KEY = "locale";

export function useLocale(): { locale: Locale; setLocale: (l: Locale) => void } {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "km" ? "km" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale === "km" ? "km" : "en";
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  return { locale, setLocale: setLocaleState };
}
