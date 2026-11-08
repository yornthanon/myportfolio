import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    title: "Backend Development",
    description:
      "Designing and building scalable backend systems with Java, Spring Boot, and REST APIs. Database design with PostgreSQL and performance optimization.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "API Development",
    description:
      "Building RESTful APIs and microservices with clean architecture. API documentation, testing, and integration with frontend applications.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M4 7v4h16V4z" />
        <path d="M4 17v4h16v-4z" />
      </svg>
    ),
  },
  {
    title: "Database Design",
    description:
      "Schema design, query optimization, and data modeling with PostgreSQL. Migrations, backups, and data integrity for production workloads.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <line x1="2" y1="21" x2="22" y2="21" />
        <line x1="7" y1="3" x2="7" y2="9" />
        <line x1="14" y1="3" x2="14" y2="9" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
  },
];

export function Services({ embedded = false }: { embedded?: boolean }) {
  void embedded;
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-2">
              What I do
            </h2>
          </div>
          <a href="#services" className="text-xs font-medium text-[var(--accent-text-light)] hover:text-[var(--accent)] transition-colors">
            View services
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <GlassCard key={service.title} className="p-6 h-full">
              <div className="w-10 h-10 raised-sm rounded-full flex items-center justify-center text-[var(--accent-text-light)] mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
