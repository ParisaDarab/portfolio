import { Experience } from "@/types/experienceType";

export const experiences: Experience[] = [
  {
    role: "Full-Stack & Mobile Developer",
    company: "Tosan",
    companyNote: "Banking & payment solutions",
    period: "Jun 2025 – Present",
    current: true,
    achievements: [
      "Build secure mobile banking features in React Native for sensitive financial transactions.",
      "Migrated the app to JSI architecture, removing the React Native bridge and cutting serialization overhead.",
      "Develop core banking APIs (auth, accounts, transactions) with Node.js and Express.",
    ],
    stack: ["React Native", "Node.js", "Express", "TypeScript", "REST APIs"],
  },
  {
    role: "Frontend Developer",
    company: "A1 Cable",
    companyNote: "Startup",
    period: "Jun 2024 – Jun 2025",
    achievements: [
      "Led a production web app end to end — from architecture to deployment — in Next.js and TypeScript.",
      "Built scalable, reusable components for dashboards, authentication, and data workflows.",
      "Improved performance and SEO with Server-Side Rendering and Next.js optimisations.",
    ],
    stack: ["Next.js", "TypeScript", "React", "SSR"],
  },
  {
    role: "Frontend & Mobile Developer",
    company: "Fidilio",
    companyNote: "Food tech",
    period: "Jun 2023 – Jun 2024",
    achievements: [
      "Built responsive, accessible UIs with React.js and Tailwind CSS.",
      "Launched the new-generation Fidilio mobile app with React Native (Expo).",
      "Cut page load time by 35% and moved Core Web Vitals from red to green.",
    ],
    stack: ["React", "React Native (Expo)", "Redux", "Redux-Saga", "Tailwind"],
  },
];
