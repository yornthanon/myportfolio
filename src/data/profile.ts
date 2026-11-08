import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Yorn Thanon",
  role: "Full-Stack developer",
  location: "Phnom Penh, Cambodia",
  bio: "I’m a full-stack developer who designs and builds fast, accessible web products from interface to database. I pair precise engineering with thoughtful design to ship polished, production-ready experiences.",
  photo: "/profile.jpg",
  openToWork: true,
  stats: [
    { label: "Years of experience", value: 6, suffix: "+" },
    { label: "Projects shipped", value: 42, suffix: "" },
    { label: "Happy clients", value: 18, suffix: "" },
  ],
  resume: "/resume.pdf",
};
