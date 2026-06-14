import React from "react";

export const Header = ({ text, dir = "ltr" }) => {
  return (
    <div>
      <h2
        id="experience-heading"
        className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
      >
        {text}
      </h2>
    </div>
  );
};
