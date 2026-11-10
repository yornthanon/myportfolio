import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "TSM — Ticket Management System",
    year: "2025–2026",
    category: "Full-stack platform",
    description: "A production-ready ticket management platform with authentication, role-based access, orders, payments, notifications, and event-driven services.",
    tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis", "Kafka"],
    live: "https://tsm-customer-frontend.onrender.com",
    github: "https://github.com/yornthanon/TSM",
    image: "/images/project-1.svg",
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];
