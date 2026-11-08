import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", level: "advanced", years: 5, icon: "react", color: "#0A7EA4" },
      { name: "TypeScript", level: "intermediate", years: 4, icon: "js", color: "#3178C6" },
      { name: "Tailwind CSS", level: "advanced", years: 4, icon: "tailwind", color: "#0891B2" },
      { name: "JavaScript", level: "advanced", years: 5, icon: "js", color: "#B8A000" },
      { name: "HTML5", level: "advanced", years: 5, icon: "html", color: "#E34F26" },
      { name: "CSS3", level: "advanced", years: 5, icon: "css", color: "#264DE4" },
      { name: "Java", level: "intermediate", years: 3, icon: "java", color: "#007396" },
      { name: "Spring Boot", level: "intermediate", years: 2, icon: "springboot", color: "#6DB33F" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "PostgreSQL", level: "intermediate", years: 2, icon: "js", color: "#336791" },
      { name: "SQL", level: "intermediate", years: 2, icon: "js", color: "#336791" },
      { name: "C#", level: "intermediate", years: 2, icon: "js", color: "#68217A" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: "advanced", years: 6, icon: "git", color: "#F05032" },
      { name: "GitHub", level: "advanced", years: 5, icon: "github", color: "#181717" },
      { name: "C++", level: "intermediate", years: 3, icon: "c++", color: "#00599C" },
      { name: "Docker", level: "learning", years: 1, icon: "git", color: "#2496ED" },
      { name: "Postman", level: "intermediate", years: 2, icon: "postmand", color: "#FF6C37" },
    ],
  },
  {
    title: "Design",
    items: [],
  },
];
