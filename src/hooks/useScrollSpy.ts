import { useCallback, useEffect, useState } from "react";

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0]);

  const handleScroll = useCallback(() => {
    const viewportCenter = window.scrollY + window.innerHeight / 2;
    let closest = ids[0];
    let closestDistance = Infinity;

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const sectionCenter = window.scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = id;
        }
      }
    });

    setActiveId(closest);
  }, [ids]);

  useEffect(() => {
    const timer = setTimeout(handleScroll, 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ids, handleScroll]);

  return activeId;
}
