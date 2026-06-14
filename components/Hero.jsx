import React from "react";
import Image from "next/image";
import parisaImage from "@/assets/images/parisa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons/faCloudArrowDown";

const skills = [
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "TypeScript",
  "Redux",
  "Tailwind",
];

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-300"
    >
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:justify-between md:gap-12">
        {/* Text */}
        <div className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
          {/* status pill */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities
          </span>

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Full-Stack JavaScript Developer
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Hi, I&apos;m Parisa.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            I build secure, high-performance apps for{" "}
            <span className="font-semibold text-white">web &amp; mobile</span> —
            with much of my work in{" "}
            <span className="font-semibold text-emerald-400">fintech</span>,
            where reliability isn&apos;t optional.
          </p>

          {/* skills */}
          <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="/Parisa_Darab_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Download résumé
              <FontAwesomeIcon icon={faCloudArrowDown} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-emerald-500/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View my work
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative shrink-0">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 mx-auto h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl sm:h-80 sm:w-80"
          />
          <Image
            src={parisaImage}
            alt="Portrait of Parisa Darab"
            width={500}
            height={800}
            priority
            className="h-auto w-56 rounded-full object-cover sm:w-72 md:w-80 [mask-image:radial-gradient(circle,black_45%,transparent_78%)]"
          />
        </div>
      </div>
    </section>
  );
};
