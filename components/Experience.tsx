import { experiences } from "@/data/experiences";
import { Experience } from "@/types/experienceType";
import TimelineItem from "./Item";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="mx-auto w-full max-w-5xl px-4 py-12"
    >
      <h2
        id="experience-heading"
        className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      >
        Experience
      </h2>

      <ol className="relative">
        {experiences.map((exp) => (
          <TimelineItem key={`${exp.company}-${exp.period}`} exp={exp} />
        ))}
      </ol>
    </section>
  );
}
