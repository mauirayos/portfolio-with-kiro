"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  url?: string;
}

const projects: Project[] = [
  {
    title: "Carisle Media Website",
    description:
      "Full service marketing company landing page featuring a modern and responsive design using Elementor from WordPress.",
    imageSrc: "/images/carislemedia.png",
    imageAlt: "Carisle Media website showing their marketing services homepage",
    tags: ["WordPress", "Elementor"],
    url: "https://www.carislemedia.com/",
  },
  {
    title: "Hireable Landing Page",
    description:
      "SaaS platform connecting job seekers and employers. Drives user engagement and encourages sign-ups with clear value proposition.",
    imageSrc: "/images/hireable.png",
    imageAlt: "Hireable SaaS platform landing page for job seekers",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GoHighLevel"],
    url: "https://www.hireable.ph/",
  },
  {
    title: "Carisle Media Careers",
    description:
      "Careers page attracting job applicants with current openings, company culture, and an application form integrated with HR systems via Google API.",
    imageSrc: "/images/cm-careers.png",
    imageAlt: "Carisle Media careers page showing job openings",
    tags: ["Next.js", "MongoDB", "Google API"],
    url: "https://careers.carislemedia.com/",
  },
  {
    title: "Hireable Waitlist",
    description:
      "Waitlist inviting freelancers to test the platform and shape it. Features smart lead capture and automated email sequences.",
    imageSrc: "/images/hireable-waitlist.png",
    imageAlt: "Hireable waitlist signup page for early access",
    tags: ["Next.js", "MongoDB", "Nodemailer"],
    url: "https://waitlist.hireable.ph/",
  },
  {
    title: "Alpha Website",
    description:
      "Responsive site for ALPHA, the ICT organization of STI College — a hub for events, seminars, and student community.",
    imageSrc: "/images/alpha-website.png",
    imageAlt: "ALPHA ICT organization website showing events and community",
    tags: ["Next.js", "ShadCN", "Tailwind CSS"],
    url: "https://alpha-official2024.vercel.app/",
  },
  {
    title: "Carisle Media HR Portal",
    description:
      "Internal HR portal for managing job postings, reviewing applications, and scheduling interviews via Google Calendar API.",
    imageSrc: "/images/cm-hr.png",
    imageAlt: "HR portal dashboard for managing recruitment processes",
    tags: ["Next.js", "Express", "Google API"],
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-border">
      {/* Section header */}
      <div className="border-b border-border p-6 md:p-10">
        <ScrollReveal direction="up">
          <h2
            id="projects-heading"
            className="font-heading font-bold text-[clamp(1.8rem,4vw,2.5rem)] uppercase text-text-primary"
          >
            // Projects
          </h2>
          <p className="font-body text-[12px] leading-[1.7] text-text-secondary mt-2">
            A highlights of what I&apos;ve designed and built.
          </p>
        </ScrollReveal>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`border-b border-border ${
              i % 2 === 0 ? "md:border-r" : ""
            } last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0`}
          >
            {/* Image */}
            <ScrollReveal direction="none" delay={i % 2 === 0 ? 0 : 100}>
              <div className="relative aspect-video bg-card border-b border-border overflow-hidden group">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="up" delay={i % 2 === 0 ? 50 : 150}>
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-heading font-bold text-[16px] uppercase text-text-primary">
                  {project.title}
                </h3>
                <p className="font-body text-[12px] leading-[1.7] text-text-secondary">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="px-2 py-1 border border-border font-body text-[10px] uppercase text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View link */}
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1 font-body font-bold text-[11px] uppercase tracking-wider text-accent hover:text-accent-hover transition-colors"
                    aria-label={`View ${project.title} website (opens in new tab)`}
                  >
                    &gt; View Website
                    <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </ScrollReveal>
          </article>
        ))}
      </div>
    </section>
  );
}
