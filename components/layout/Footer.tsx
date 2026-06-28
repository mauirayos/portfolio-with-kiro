import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t border-border p-5 md:p-6 relative z-10"
      role="contentinfo"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <span className="font-body text-[11px] text-text-muted">
            workwithmauirayos@gmail.com
          </span>
          <Link
            href="https://github.com/mauirayos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] text-text-muted hover:text-accent transition-colors"
            aria-label="GitHub (opens in new tab)"
          >
            Github →
          </Link>
          <Link
            href="https://www.linkedin.com/in/maui-rayos/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] text-text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn (opens in new tab)"
          >
            LinkedIn →
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-end text-right">
          <span className="font-body text-[11px] text-text-muted">
            Based in Philippines
          </span>
          <span className="font-body text-[11px] text-text-muted">
            © 2026 Maui Rayos
          </span>
        </div>
      </div>
    </footer>
  );
}
