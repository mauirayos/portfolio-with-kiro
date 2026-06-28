"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Title */}
        <div className="border-b lg:border-b-0 lg:border-r border-border p-6 md:p-10 flex flex-col gap-6">
          <ScrollReveal direction="left">
            <h2
              id="about-heading"
              className="font-heading font-bold text-[clamp(1.8rem,4vw,2.5rem)] uppercase text-text-primary"
            >
              // About Me
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={150}>
            <p className="font-body text-[13px] leading-[1.8] text-text-secondary">
              I&apos;m a Computer Science graduate and Web Developer with over three
              years of hands-on experience building production-ready web
              applications. My work focuses on creating clean, maintainable frontend
              architectures backed by reliable backend logic.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={250}>
            <p className="font-body text-[13px] leading-[1.8] text-text-secondary">
              I&apos;ve collaborated with developers, designers, and marketing teams
              to ship websites, internal tools, and SaaS landing pages that are
              optimized for performance, analytics, and scalability.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={350}>
            <p className="font-body text-[13px] leading-[1.8] text-text-secondary">
              I&apos;m particularly interested in modern frontend ecosystems,
              automation workflows, and building systems that solve real business
              problems.
            </p>
          </ScrollReveal>
        </div>

        {/* Right: Skills + Services */}
        <div className="p-6 md:p-10 flex flex-col gap-6">
          <ScrollReveal direction="right">
            <h3 className="font-heading font-bold text-[16px] uppercase text-accent">
              Services
            </h3>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div className="border-t border-border pt-4">
              <h4 className="font-body font-bold text-[13px] uppercase text-text-primary mb-2">
                Website Development
              </h4>
              <p className="font-body text-[12px] leading-[1.7] text-text-secondary">
                I build fast, responsive, and scalable websites that perform.
                Clean structure, mobile-first design, and smooth UX with
                integrated analytics, SEO, and conversion tools.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="border-t border-border pt-4">
              <h4 className="font-body font-bold text-[13px] uppercase text-text-primary mb-2">
                AI / CRM Automation
              </h4>
              <p className="font-body text-[12px] leading-[1.7] text-text-secondary">
                Integrating AI tools and CRM systems — chatbot workflows,
                automated email sequences, smart lead capture, and sales funnel
                tracking with Zapier, GoHighLevel, and OpenAI.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div className="border-t border-border pt-4">
              <h4 className="font-body font-bold text-[13px] uppercase text-text-primary mb-2">
                Website Design
              </h4>
              <p className="font-body text-[12px] leading-[1.7] text-text-secondary">
                Modern, responsive, user-focused designs in Figma, Webflow, and
                WordPress — bridging aesthetics with usability across all devices.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
