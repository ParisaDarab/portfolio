// Articles.tsx
// A "Writing" section for a Next.js (App Router) + TypeScript portfolio.
// Styling uses Tailwind CSS. Pure server component — no client JS or hooks required.
// Matches About.tsx / ExperienceTimeline.tsx (slate palette, emerald accent, dark mode).
//
// Usage:
//   import Articles from "@/components/Articles";
//   ...
//   <Articles />

import { articles } from "@/data/article";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
      aria-hidden
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function Articles() {
  return (
    <section
      id="articles"
      aria-labelledby="articles-heading"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-12"
    >
      <h2
        id="articles-heading"
        className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      >
        Writing
      </h2>
      <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">
        Technical guides I&apos;ve written to help other developers.
      </p>

      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <a
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:border-slate-800 dark:bg-slate-900/40"
          >
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
                {article.topic}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Read on Medium
                <ArrowIcon />
              </span>
            </div>

            <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-slate-100 dark:group-hover:text-emerald-400">
              {article.title}
            </h3>

            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {article.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
