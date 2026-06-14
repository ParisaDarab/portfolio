import { socials } from "@/data/about";

const EMAIL = "parisadarab975@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-2xl scroll-mt-20 px-4 py-16 text-center"
    >
      <h2
        id="contact-heading"
        className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      >
        Let&apos;s work together
      </h2>

      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        I&apos;m open to new opportunities and always happy to talk about
        building for web and mobile. The fastest way to reach me is email.
      </p>

      {/* Primary CTA */}
      <a
        href={`mailto:${EMAIL}`}
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
          aria-hidden
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
        {EMAIL}
      </a>

      {/* Secondary links */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            {s.icon}
          </a>
        ))}
      </div>

      <p className="mt-10 text-xs text-slate-400 dark:text-slate-500">
        Based in Birmingham, UK · © {new Date().getFullYear()} Parisa Darab
      </p>
    </section>
  );
}
