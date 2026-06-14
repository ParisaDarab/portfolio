import { skills, socials } from "@/data/about";

function SkillChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-5xl px-4 py-12"
    >
      <h2
        id="about-heading"
        className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      >
        About
      </h2>

      {/* Optional photo — uncomment and add your image to /public, then import next/image:
          import Image from "next/image";
          <Image src="/parisa.jpg" alt="Parisa Darab" width={96} height={96}
                 className="mb-6 h-24 w-24 rounded-full object-cover ring-2 ring-emerald-500/30" />
      */}

      <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
        <p>
          I&apos;m{" "}
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            Parisa Darab
          </span>
          , a full-stack JavaScript developer based in Birmingham, UK, building
          for both web and mobile. Much of my work lives in{" "}
          <span className="font-medium text-emerald-600 dark:text-emerald-400">
            fintech
          </span>
          , where reliability isn&apos;t optional — people are trusting the
          screen with their money.
        </p>
        <p>
          I work across the React ecosystem and Node.js backend: secure banking
          features in React Native, production web apps in Next.js, and the APIs
          that hold everything together. Performance, accessibility, and clean,
          readable code sit at the top of my checklist.
        </p>
        <p>
          I also write — technical guides on Next.js 14 and the Zig language to
          help newcomers take their first steps. I speak Persian natively and
          English at a professional working level.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-8 space-y-3">
        {skills.map((group) => (
          <div
            key={group.label}
            className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-3"
          >
            <span className="w-36 shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <SkillChip key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={s.label}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-emerald-500/50 hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            {s.icon}
            <span>{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
