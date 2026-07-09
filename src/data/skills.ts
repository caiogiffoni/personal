export type SkillGroup = {
  label: string;
  skills: string[];
  color: string;
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    skills: ["Python", "Flask", "FastAPI", "Django", "Node.js", "GraphQL"],
    color: "blue.400",
  },
  {
    label: "Frontend",
    skills: ["React", "Vue", "TypeScript", "JavaScript", "HTML / CSS"],
    color: "green.400",
  },
  {
    label: "Cloud & Infra",
    skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Bitbucket Pipelines"],
    color: "orange.400",
  },
  {
    label: "Data & Databases",
    skills: ["PostgreSQL", "SQL", "NoSQL", "pandas", "Prisma", "TypeORM"],
    color: "purple.400",
  },
  {
    label: "AI & Automation",
    skills: ["RPA", "Robocorp", "Selenium", "Playwright", "LLM APIs (OpenAI, Claude, Gemini)", "Prompt Engineering", "AI Agents"],
    color: "teal.400",
  },
  {
    label: "Practices",
    skills: ["CI/CD", "Agile", "REST APIs", "Git", "Pytest"],
    color: "yellow.400",
  },
];
