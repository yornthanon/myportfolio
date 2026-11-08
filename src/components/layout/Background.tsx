import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Background() {
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent): void => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, mouseX, mouseY]);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const sheenAX = useTransform(springX, [0, window.innerWidth], [-14, 14]);
  const sheenAY = useTransform(springY, [0, window.innerHeight], [-14, 14]);
  const sheenBX = useTransform(springX, [0, window.innerWidth], [-22, 22]);
  const sheenBY = useTransform(springY, [0, window.innerHeight], [-22, 22]);
  const sheenCX = useTransform(springX, [0, window.innerWidth], [-10, 10]);
  const sheenCY = useTransform(springY, [0, window.innerHeight], [-10, 10]);

  return (
    <>
      <div className="orb orb-a" aria-hidden="true">
        <motion.div className="orb-sheen" style={{ translateX: sheenAX, translateY: sheenAY }} />
      </div>
      <div className="orb orb-b" aria-hidden="true">
        <motion.div className="orb-sheen" style={{ translateX: sheenBX, translateY: sheenBY }} />
      </div>
      <div className="orb orb-c" aria-hidden="true">
        <motion.div className="orb-sheen" style={{ translateX: sheenCX, translateY: sheenCY }} />
      </div>
      <div className="noise" aria-hidden="true" />
    </>
  );
}
