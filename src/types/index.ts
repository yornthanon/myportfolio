export type Locale = "en" | "km";

export type Theme = "light" | "dark";

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  bio: string;
  photo: string;
  openToWork: boolean;
  stats: Stat[];
  resume: string;
};

export type EducationItem = {
  level: "university" | "high" | "lower" | "primary" | "course" | "certificate" | "other";
  title: string;
  subtitle?: string;
  org?: string;
  years: string;
  place?: string;
  desc?: string;
  tags?: string[];
  url?: string;
  certificateUrl?: string;
  current?: boolean;
};

export type Certificate = {
  name: string;
  issuer: string;
  year: string;
  credential?: string;
};

export type SkillGroup = {
  title: string;
  items: SkillItem[];
};

export type SkillItem = {
  name: string;
  level?: "advanced" | "intermediate" | "learning";
  years?: number;
  url?: string;
  icon?: string;
  color?: string;
};

export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
};

export type Service = {
  name: string;
  description: string;
  price: string;
  bullets: string[];
  highlight?: boolean;
};

export type ContactInfo = {
  email: string;
  telegram: string;
  linkedin: string;
  github: string;
};

export type I18nStrings = {
  nav: {
    home: string;
    about: string;
    education: string;
    skills: string;
    work: string;
    services: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    openToWork: string;
    location: string;
    downloadCv: string;
    scroll: string;
  };
  sections: {
    about: { label: string; title: string };
    education: { label: string; title: string; stats: { schools: string; certifications: string; and: string }; levels: { university: string; high: string; lower: string; primary: string; course: string; certificate: string; other: string } };
    skills: { label: string; title: string; levels: { advanced: string; intermediate: string; learning: string } };
    backend: { label: string; title: string };
    projects: { label: string; title: string; filterAll: string };
    certificates: { label: string; title: string };
    services: { label: string; title: string };
    contact: { label: string; title: string; intro: string; available: string; cta: string };
  };
  about: { bio: string; yearsExp: string; projectsDone: string; clients: string };
  contact: {
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { rights: string };
};
