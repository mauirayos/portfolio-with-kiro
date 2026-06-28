"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "TechCorp",
    relationship: "Manager",
    quote:
      "One of the most reliable engineers I've worked with. Consistently delivers high-quality solutions while maintaining strong communication and collaboration across teams.",
  },
  {
    name: "James Morrison",
    role: "Product Director",
    company: "InnovateCo",
    relationship: "Client",
    quote:
      "Delivered our project with professionalism and attention to detail. The final product exceeded expectations and provided real business value.",
  },
  {
    name: "Alex Rivera",
    role: "Senior Developer",
    company: "DevStudio",
    relationship: "Colleague",
    quote:
      "A fantastic teammate who is always willing to help, share knowledge, and raise the overall quality of the team's work.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-b border-border"
    >
      {/* Section header */}
      <div className="border-b border-border p-6 md:p-10">
        <ScrollReveal direction="up">
          <h2
            id="testimonials-heading"
            className="font-heading font-bold text-[clamp(1.8rem,4vw,2.5rem)] uppercase text-text-primary"
          >
            // Testimonials
          </h2>
          <p className="font-body text-[12px] leading-[1.7] text-text-secondary mt-2">
            Feedback from managers, clients, and colleagues.
          </p>
        </ScrollReveal>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} direction="up" delay={i * 150}>
            <article
              className={`p-6 md:p-8 flex flex-col gap-5 h-full ${
                i < testimonials.length - 1
                  ? "border-b md:border-b-0 md:border-r border-border"
                  : ""
              }`}
            >
              {/* Quote accent */}
              <span
                className="font-heading text-[48px] leading-[0.5] text-accent select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="font-body text-[12px] leading-[1.8] text-text-secondary flex-1">
                {t.quote}
              </blockquote>

              {/* Profile */}
              <footer className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="size-10 rounded-full bg-surface-light border border-border shrink-0"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <cite className="font-body font-bold text-[12px] text-text-primary uppercase not-italic">
                    {t.name}
                  </cite>
                  <span className="font-body text-[10px] text-text-secondary">
                    {t.role} · {t.company}
                  </span>
                  <span className="font-body font-bold text-[10px] text-accent uppercase">
                    {t.relationship}
                  </span>
                </div>
              </footer>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
