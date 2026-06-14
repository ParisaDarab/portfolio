export type Experience = {
  role: string;
  company: string;
  companyNote: string; // one line on what the company does — gives instant context
  period: string;
  current?: boolean;
  achievements: string[]; // outcome-focused, not duties
  stack: string[];
  url?: string; // optional link to company or product
};
