import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Yorn Thanon",
  role: "Full-Stack developer",
  location: "Phnom Penh, Cambodia",
  bio: "I design and build luminous, fluid digital experiences where engineering precision meets editorial craft. My work sits at the intersection of interaction, motion, and accessible, production-grade interfaces.",
  photo: "/profile.jpg",
  openToWork: true,
  stats: [
    { label: "Years of experience", value: 6, suffix: "+" },
    { label: "Projects shipped", value: 42, suffix: "" },
    { label: "Happy clients", value: 18, suffix: "" },
  ],
  resume: "/resume.pdf",
};
