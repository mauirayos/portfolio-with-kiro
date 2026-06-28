"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "@/components/icons";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-border">
      <nav
        className="flex items-center justify-between px-4 md:px-6 py-3"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="font-heading font-bold text-[20px] text-text-primary"
          aria-label="Home"
        >
          MR
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="menubar">
          {navLinks.map((link, i) => (
            <li key={link.label} role="none">
              <Link
                href={link.href}
                role="menuitem"
                className={`block px-4 py-2 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-accent/10 hover:border-accent/40 transition-colors ${
                  i === 0 ? "bg-primary/30 text-text-primary border-primary/50" : ""
                }`}
              >
                &gt; {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center size-10 text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <CloseIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-surface" role="menu">
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.label} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 border border-border font-body font-bold text-[11px] uppercase tracking-wider text-text-secondary hover:text-text-primary hover:bg-accent/10 transition-colors"
                >
                  &gt; {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
