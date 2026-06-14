import { SkillGroup, Social } from "@/types/about";

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  { label: "Frontend & Mobile", items: ["React", "Next.js", "React Native"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "MongoDB"] },
  { label: "State & Styling", items: ["Redux", "React Query", "Tailwind CSS"] },
];

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/ParisaDarab",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.62 8.21 11.18.6.11.82-.25.82-.56v-2.1c-3.34.71-4.04-1.4-4.04-1.4-.55-1.36-1.34-1.72-1.34-1.72-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.79 2.81 1.27 3.49.97.11-.76.42-1.27.76-1.56-2.67-.29-5.47-1.3-5.47-5.8 0-1.28.47-2.33 1.24-3.15-.13-.29-.54-1.49.11-3.1 0 0 1.01-.32 3.3 1.2a11.6 11.6 0 0 1 6 0c2.29-1.52 3.29-1.2 3.29-1.2.66 1.61.25 2.81.12 3.1.78.82 1.24 1.87 1.24 3.15 0 4.51-2.81 5.5-5.49 5.79.43.36.82 1.09.82 2.2v3.26c0 .31.21.68.83.56A11.8 11.8 0 0 0 24 12.29C24 5.78 18.63.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/parisadarabdev",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@parisadarab07",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:parisadarab975@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
        aria-hidden
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: "tel:+447888890206",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
];
