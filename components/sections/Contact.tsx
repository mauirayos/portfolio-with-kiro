"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Heading + description */}
        <div className="border-b lg:border-b-0 lg:border-r border-border p-6 md:p-10 flex flex-col justify-center gap-6">
          <ScrollReveal direction="left">
            <h2
              id="contact-heading"
              className="font-heading font-bold text-[clamp(2rem,6vw,3.5rem)] leading-[1.05] uppercase text-text-primary"
            >
              // Wanna Get
              <br />
              In Touch?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={200}>
            <p className="font-body text-[13px] leading-[1.8] text-text-secondary max-w-[440px]">
              Got an idea, a problem to solve, or a project that needs extra hands?
              No formalities, no pressure — just hit me up and let&apos;s see what
              we can build together.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={350}>
            <Link
              href="mailto:workwithmauirayos@gmail.com"
              className="inline-block px-6 py-3 bg-accent border border-accent font-body font-bold text-[12px] uppercase tracking-wider text-text-primary hover:bg-accent-hover transition-colors w-fit"
              aria-label="Send email to workwithmauirayos@gmail.com"
            >
              &gt; Let&apos;s Talk
            </Link>
          </ScrollReveal>
        </div>

        {/* Right: Contact links */}
        <div className="p-6 md:p-10 flex flex-col justify-center gap-4">
          <ScrollReveal direction="right" delay={100}>
            <Link
              href="mailto:workwithmauirayos@gmail.com"
              className="block px-5 py-3 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent hover:bg-accent/5 transition-colors"
              aria-label="Send email"
            >
              &gt; workwithmauirayos@gmail.com
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <Link
              href="https://www.linkedin.com/in/maui-rayos/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent hover:bg-accent/5 transition-colors"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              &gt; LinkedIn
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={300}>
            <Link
              href="https://github.com/mauirayos"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent hover:bg-accent/5 transition-colors"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              &gt; GitHub
            </Link>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={400}>
            <Link
              href="https://drive.google.com/file/d/1Lnga5Aaz-GP3n0XcZjxLF2zxUQ_iZpYj/view"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-5 py-3 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent hover:bg-accent/5 transition-colors"
              aria-label="View resume (opens in new tab)"
            >
              &gt; View Resume
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
