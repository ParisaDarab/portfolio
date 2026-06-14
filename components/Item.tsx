import { Experience } from "@/types/experienceType";

function StackPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
      {label}
    </span>
  );
}

function TimelineItem({ exp }: { exp: Experience }) {
  return (
    <li className="relative pb-12 pl-10 last:pb-0">
      {/* vertical line */}
      <span
        aria-hidden
        className="absolute left-[7px] top-2 h-full w-px bg-slate-200 dark:bg-slate-700"
      />
      {/* node */}
      <span
        aria-hidden
        className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full ring-4 ring-white dark:ring-slate-950 ${
          exp.current ? "bg-emerald-500" : "bg-slate-300 dark:bg-slate-600"
        }`}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {exp.role}
        </h3>
        <span className="text-sm tabular-nums text-slate-500 dark:text-slate-400">
          {exp.period}
        </span>
      </div>

      <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-300">
        {exp.url ? (
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 underline-offset-4 hover:underline focus-visible:underline dark:text-emerald-400"
          >
            {exp.company}
          </a>
        ) : (
          <span className="text-emerald-600 dark:text-emerald-400">
            {exp.company}
          </span>
        )}
        <span className="text-slate-400 dark:text-slate-500">
          {" "}
          · {exp.companyNote}
        </span>
      </p>

      <ul className="mt-3 space-y-1.5">
        {exp.achievements.map((point, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {exp.stack.map((tech) => (
          <StackPill key={tech} label={tech} />
        ))}
      </div>
    </li>
  );
}

export default TimelineItem;
