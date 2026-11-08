import type { Service } from "@/types";

export const services: Service[] = [
  {
    name: "Front-end Development",
    description: "Production-grade React interfaces with meticulous motion and accessibility.",
    price: "from $1,500",
    bullets: ["Component architecture", "Performance optimization", "Responsive, accessible UI"],
  },
  {
    name: "Design Engineering",
    description: "Bridging design and code: glass systems, tokens, and motion language.",
    price: "from $2,000",
    highlight: true,
    bullets: ["Design system setup", "Interaction prototyping", "Motion specification"],
  },
  {
    name: "Portfolio & Brand Sites",
    description: "Editorial, handcrafted sites that feel alive and unmistakably premium.",
    price: "from $1,200",
    bullets: ["Bento grid composition", "CMS integration", "SEO & performance"],
  },
];
