export type Project = {
  title: string;
  company: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: "professional" | "personal";
};

export const projects: Project[] = [
  {
    title: "Payment Posting AI Agent",
    company: "Thoughtful A.I.",
    problem:
      "A healthcare billing team was drowning in a 60-day backlog of manual payment posting — every day of delay meant delayed revenue and mounting operational cost.",
    solution:
      "Designed and built an autonomous AI agent that reads remittances, reconciles payments, and posts them end-to-end with no human in the loop — running 24/7.",
    impact:
      "Eliminated a 60-day backlog. Payment processing moved from weeks-long queues to near real-time, accelerating revenue collection by up to 2 months.",
    tech: ["Python", "RPA", "AWS", "Robocorp"],
    type: "professional",
  },
  {
    title: "Appeal Submission AI Agent",
    company: "Thoughtful A.I.",
    problem:
      "Insurance appeal submissions required days of manual work per case, with no tracking of payer response timelines — leading to missed deadlines and lost revenue.",
    solution:
      "Built an agent that composes and submits appeals automatically, then monitors payer timelines and triggers escalation when reviewers exceed expected windows.",
    impact:
      "Reduced appeal submission time by 4 months. Proactive follow-up automation turned a reactive process into a data-driven one.",
    tech: ["Python", "RPA", "AWS", "Robocorp"],
    type: "professional",
  },
  {
    title: "B2B Order Automation Platform",
    company: "Weduu — Data & A.I.",
    problem:
      "Sales reps in the consumer goods industry were manually entering thousands of product orders per day into multiple systems — slow, error-prone, and unscalable.",
    solution:
      "Built automation pipelines that ingested orders from diverse sources (email, Excel, scraped portals), cleaned and normalised the data, and pushed it through to back-end systems automatically.",
    impact:
      "Saved clients 90% of their order processing time. Handled thousands of products daily across multiple customers.",
    tech: ["Python", "Flask", "Vue", "PostgreSQL", "GCP", "pandas"],
    type: "professional",
  },
  {
    title: "Developer Portfolio",
    company: "Personal project",
    problem: "",
    solution:
      "Fully responsive portfolio site with dark mode, animations, and a contact form. Built to showcase projects and skills.",
    impact: "",
    tech: ["React", "TypeScript", "Chakra UI", "Framer Motion"],
    githubUrl: "https://github.com/caiogiffoni/portfolio-caio-giffoni",
    type: "personal",
  },
];
