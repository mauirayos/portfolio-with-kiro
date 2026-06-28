"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const experience: ExperienceEntry[] = [
  {
    title: "Web Developer",
    company: "Carisle Media / Hireable",
    period: "Sept 2023 — Present",
    bullets: [
      "Build and maintain scalable web components using React, Next.js, Tailwind CSS, and various CMS frameworks.",
      "Architected API workflows for lead capture, email automation, and real-time CRM synchronization.",
      "Execute end-to-end QA, accessibility audits, and responsive testing for cross-device performance.",
      "Partner with stakeholders and designers to deliver iterative feature improvements.",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Carisle Media / Memebox",
    period: "Jun 2023 — Nov 2023",
    bullets: [
      "Developed a Shopify application optimized for high performance and SEO visibility.",
      "Implemented tracking systems using GA4 and Google Search Console for data-informed decisions.",
      "Conducted rigorous troubleshooting and cross-functional testing for stable production deployments.",
    ],
  },
];

const organizations: ExperienceEntry[] = [
  {
    title: "Sec. of Technology & Development",
    company: "ALPHA — STI College Ortigas-Cainta",
    period: "Jan 2025 — Dec 2025",
    bullets: [
      "Led a team of 10 developers building internal dashboards and systems.",
      "Mentored new developers and managed onboarding processes.",
    ],
  },
  {
    title: "Frontend Developer Head",
    company: "ALPHA — STI College Ortigas-Cainta",
    period: "Jun 2024 — Dec 2024",
    bullets: [
      "Led frontend development for organization platforms — ticketing systems, dashboards, email automations.",
      "Built the official organization landing website with responsive and accessible designs.",
    ],
  },
];

function ExperienceBlock({ entries, label }: { entries: ExperienceEntry[]; label: string }) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-body font-bold text-[11px] uppercase tracking-wider text-accent">
        {label}
      </h3>
      {entries.map((entry, i) => (
        <ScrollReveal key={entry.title + entry.company} direction="up" delay={i * 100}>
          <div className="border-t border-border pt-4 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h4 className="font-body font-bold text-[13px] uppercase text-text-primary">
                {entry.title}
              </h4>
              <span className="font-body text-[11px] text-text-muted uppercase">
                {entry.period}
              </span>
            </div>
            <p className="font-body text-[12px] text-text-secondary">{entry.company}</p>
            <ul className="flex flex-col gap-1.5" role="list">
              {entry.bullets.map((bullet, j) => (
                <li
                  key={j}
                  className="font-body text-[12px] leading-[1.7] text-text-secondary pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-accent before:font-bold"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Work Experience */}
        <div className="border-b lg:border-b-0 lg:border-r border-border p-6 md:p-10 flex flex-col gap-6">
          <ScrollReveal direction="left">
            <h2
              id="experience-heading"
              className="font-heading font-bold text-[clamp(1.8rem,4vw,2.5rem)] uppercase text-text-primary"
            >
              // Experience
            </h2>
          </ScrollReveal>
          <ExperienceBlock entries={experience} label="Work" />
          <ExperienceBlock entries={organizations} label="Organization" />
        </div>

        {/* Right: Tools & Technologies */}
        <div className="p-6 md:p-10 flex flex-col gap-6">
          <ScrollReveal direction="right">
            <h3 className="font-heading font-bold text-[18px] uppercase text-text-primary">
              // Tools & Technologies
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-body font-bold text-[11px] uppercase tracking-wider text-accent mb-2">
                  Development
                </h4>
                <p className="font-body text-[12px] leading-[1.8] text-text-secondary">
                  HTML5, CSS3, JavaScript, TypeScript, PHP, React, Next.js, Vite,
                  Remix, Tailwind CSS, Bootstrap, ShadCN, Node.js, Express,
                  MongoDB, MySQL, Git/GitHub, Vercel
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div>
              <h4 className="font-body font-bold text-[11px] uppercase tracking-wider text-accent mb-2">
                CMS / CRM (No-Code)
              </h4>
              <p className="font-body text-[12px] leading-[1.8] text-text-secondary">
                Shopify, WordPress, Webflow, Squarespace, Kajabi, Framer,
                GoHighLevel, Make, Zapier
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div>
              <h4 className="font-body font-bold text-[11px] uppercase tracking-wider text-accent mb-2">
                Design Tools
              </h4>
              <p className="font-body text-[12px] leading-[1.8] text-text-secondary">
                Figma, Canva
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
