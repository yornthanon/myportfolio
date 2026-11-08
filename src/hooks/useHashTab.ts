import { useCallback, useEffect, useState } from "react";

export function useHashTab(defaultTab: string) {
  const [tab, setTabState] = useState<string>(() => {
    if (typeof window === "undefined") return defaultTab;
    return window.location.hash.slice(1) || defaultTab;
  });

  const setTab = useCallback((next: string) => {
    setTabState(next);
    if (typeof window !== "undefined") {
      window.location.hash = next;
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) setTabState(hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return { tab, setTab };
}
