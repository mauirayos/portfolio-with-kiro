import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Outer padding creates dark frame effect */}
      <div className="max-w-[1400px] mx-auto px-3 md:px-5 py-3 md:py-5">
        <div className="bg-surface noise-bg border border-border relative">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-accent focus:text-text-primary focus:rounded-sm font-body font-bold text-sm"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <FeaturedProjects />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
