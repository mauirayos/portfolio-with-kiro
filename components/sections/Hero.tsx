"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="border-b border-border">
      {/* Top grid: Title + Portrait */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left: Role + Name */}
        <div className="border-b md:border-b-0 md:border-r border-border p-6 md:p-10 flex flex-col justify-center gap-4">
          <ScrollReveal direction="left">
            <h1 className="font-heading font-bold text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] uppercase text-text-primary">
              Web
              <br />
              Developer
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={200}>
            <p className="font-heading font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.1] uppercase text-accent">
              Maui Rayos
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={350}>
            <p className="font-body text-[13px] leading-[1.8] text-text-secondary max-w-[480px] mt-2">
              Full-stack developer specializing in modern frontend ecosystems and
              performance-driven web solutions. Over three years of hands-on
              experience shipping production-ready applications.
            </p>
          </ScrollReveal>

          {/* CTA links */}
          <ScrollReveal direction="left" delay={500}>
            <div className="flex flex-wrap gap-2 mt-4">
              <Link
                href="https://drive.google.com/file/d/1Lnga5Aaz-GP3n0XcZjxLF2zxUQ_iZpYj/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent text-text-primary border border-accent font-body font-bold text-[11px] uppercase tracking-wider hover:bg-accent-hover transition-colors"
              >
                View Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/maui-rayos/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/mauirayos"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
              >
                GitHub
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Portrait */}
        <div className="relative min-h-[300px] md:min-h-[500px] bg-primary/20 overflow-hidden">
          <ScrollReveal direction="right" delay={200}>
            <Image
              src="/images/maui.jpg"
              alt="Maui Rayos headshot"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Skill marquee bar */}
      <div className="border-t border-border p-4 overflow-hidden" aria-label="Skills ticker">
        <div className="flex gap-6 animate-marquee whitespace-nowrap font-body text-[11px] text-text-muted uppercase tracking-wider">
          <span>HTML5</span><span>·</span>
          <span>CSS3</span><span>·</span>
          <span>JavaScript</span><span>·</span>
          <span>TypeScript</span><span>·</span>
          <span>React</span><span>·</span>
          <span>Next.js</span><span>·</span>
          <span>Node.js</span><span>·</span>
          <span>Express</span><span>·</span>
          <span>Tailwind CSS</span><span>·</span>
          <span>MongoDB</span><span>·</span>
          <span>MySQL</span><span>·</span>
          <span>WordPress</span><span>·</span>
          <span>Webflow</span><span>·</span>
          <span>Shopify</span><span>·</span>
          <span>Figma</span><span>·</span>
          <span>GoHighLevel</span><span>·</span>
          <span>HTML5</span><span>·</span>
          <span>CSS3</span><span>·</span>
          <span>JavaScript</span><span>·</span>
          <span>TypeScript</span><span>·</span>
          <span>React</span><span>·</span>
          <span>Next.js</span>
        </div>
      </div>
    </section>
  );
}
