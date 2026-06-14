
"use client";


import { links } from "@/data/nav";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/80">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4"
      >
        {/* Wordmark */}
        <a
          href="#top"
          className="group inline-flex items-center text-base font-semibold tracking-tight text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:text-slate-100"
        >
          Parisa Darab
          <span className="ml-0.5 text-emerald-500 transition-transform group-hover:translate-y-0.5">
            .
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Parisa_Darab_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg bg-emerald-600 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:text-slate-300 md:hidden"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200/70 bg-white/95 px-4 py-3 backdrop-blur-md md:hidden dark:border-slate-800/70 dark:bg-slate-950/95"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Parisa_Darab_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}