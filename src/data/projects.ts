import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Aqua Commerce",
    year: "2025",
    category: "E-commerce",
    description: "A luminous storefront with fluid product transitions and a sea-glass checkout flow, integrated with Stripe payments.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Stripe"],
    live: "https://aqua-commerce.vercel.app",
    github: "https://github.com/sovannak/aqua-commerce",
    image: "/images/project-1.svg",
  },
  {
    title: "Wave Dashboard",
    year: "2024",
    category: "SaaS",
    description: "Real-time analytics with glass tiles, animated charts, and a calm oceanic palette. Built with Zod schema validation.",
    tech: ["React", "Zod", "Recharts", "Vite", "Tailwind"],
    live: "https://wave-dashboard.vercel.app",
    github: "https://github.com/sovannak/wave-dashboard",
    image: "/images/project-2.svg",
  },
  {
    title: "Tide Studio",
    year: "2024",
    category: "Portfolio",
    description: "Editorial portfolio template for creative studios with bento grid composition and staggered motion reveals.",
    tech: ["React", "Tailwind", "Framer Motion"],
    live: "https://tide-studio.vercel.app",
    github: "https://github.com/sovannak/tide-studio",
    image: "/images/project-3.svg",
  },
  {
    title: "Glass UI Kit",
    year: "2023",
    category: "Design System",
    description: "A reusable liquid-glass component library with design tokens and motion primitives, documented in Storybook.",
    tech: ["React", "TypeScript", "Storybook"],
    live: "https://glass-ui-kit.vercel.app",
    github: "https://github.com/sovannak/glass-ui-kit",
    image: "/images/project-4.svg",
  },
  {
    title: "Mekong Finance",
    year: "2025",
    category: "Fintech",
    description: "Personal finance dashboard with real-time currency conversion, spending insights, and Khmer locale support.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    live: "https://mekong-finance.vercel.app",
    github: "https://github.com/sovannak/mekong-finance",
    image: "/images/project-5.svg",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];
