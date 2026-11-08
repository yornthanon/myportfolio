import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

export function CTA() {
  return (
    <section className="section">
      <div className="container">
        <GlassCard className="p-10 md:p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3">
            Have a project in mind?
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-8 max-w-[60ch] mx-auto">
            I'm available for backend engineering opportunities. Let's discuss
            how I can help with your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="primary" href="#contact">
              Hire me
            </Button>
            <Button
              asChild
              variant="ghost"
              href={profile.resume}
              download
              className="btn-secondary"
            >
              Download CV
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
