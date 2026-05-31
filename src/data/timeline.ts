import { IconType } from "react-icons";
import {
  FaHardHat,
  FaGraduationCap,
  FaCode,
  FaRobot,
  FaChalkboardTeacher,
  FaAward,
} from "react-icons/fa";

export type Category =
  | "engineering"
  | "education"
  | "software"
  | "ai"
  | "teaching"
  | "certification";

export type CategoryMeta = {
  color: string;
  icon: IconType;
  label: string;
};

export const categoryConfig: Record<Category, CategoryMeta> = {
  engineering: { color: "orange.400", icon: FaHardHat, label: "Engineering" },
  education: { color: "purple.400", icon: FaGraduationCap, label: "Education" },
  software: { color: "blue.400", icon: FaCode, label: "Software" },
  ai: { color: "green.400", icon: FaRobot, label: "AI / Automation" },
  teaching: { color: "teal.400", icon: FaChalkboardTeacher, label: "Teaching" },
  certification: { color: "yellow.400", icon: FaAward, label: "Certification" },
};

export type TimelineEvent = {
  id: string;
  period: string;
  role: string;
  organization: string;
  description: string;
  highlights?: string[];
  tech?: string[];
  category: Category;
  featured?: boolean;
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    period: "2012 - 2017",
    role: "Bachelor's in Civil Engineering",
    organization: "Universidade de Fortaleza",
    description:
      "Built a strong analytical and problem-solving foundation, systematic thinking and large-scale project management skills that would later translate directly into software engineering.",
    category: "education",
  },
  {
    id: "2",
    period: "2014 - 2015",
    role: "Exchange Program - Civil Engineering",
    organization: "University of Liverpool, UK",
    description:
      "Studied abroad and became fluent in English, opening doors to international opportunities and global teams.",
    category: "education",
  },
  {
    id: "3",
    period: "Jan 2018 - Oct 2019",
    role: "Civil Engineer",
    organization: "KPR Rodan",
    description:
      "Managed teams and budgets on a R$40M construction project. Redesigned the equipment rental process and cut those costs in half.",
    category: "engineering",
  },
  {
    id: "4",
    period: "2018 - 2020",
    role: "MBA in Project Management",
    organization: "Universidade de Fortaleza",
    description:
      "Deepened expertise in risk management, planning, and leading multidisciplinary teams under constraints.",
    category: "education",
  },
  {
    id: "5",
    period: "Oct 2019 - Jul 2021",
    role: "Civil Engineer",
    organization: "City Hall",
    description:
      "Managed R$5M+ in municipal infrastructure projects, simultaneously supervising teams across 15 construction sites and ensuring on-time, on-budget delivery.",
    category: "engineering",
  },
  {
    id: "6",
    period: "2021 - 2022",
    role: "Full Stack Web Development Bootcamp",
    organization: "Kenzie Academy Brasil",
    description:
      "After years managing construction, I decided to build software instead. Committed to an intensive full-stack bootcamp and never looked back.",
    tech: ["Python", "Django", "JavaScript", "React", "Node.js", "TypeScript"],
    category: "education",
    featured: true,
  },
  {
    id: "7",
    period: "Jan - Nov 2022",
    role: "Assistant Teacher",
    organization: "Kenzie Academy Brasil",
    description:
      "Mentored 50+ students in web development. The best way to deeply learn something is to teach it.",
    tech: ["React", "JavaScript", "TypeScript", "Node.js", "Docker", "SQL"],
    category: "teaching",
  },
  {
    id: "8",
    period: "Nov 2022 - Sep 2024",
    role: "Software Developer",
    organization: "Weduu - Data & A.I.",
    description:
      "Built B2B commerce automation for the consumer goods industry, saving clients 90% of manual order processing time.",
    highlights: [
      "Automated order flow for thousands of products daily",
      "Back-end routes with Flask, front-end with Vue",
      "Deployed on GCP Cloud Run for high availability",
      "PostgreSQL for real-time decision-making pipelines",
      "Extracted and cleaned data from Excel, PDFs, and scraped sources with pandas",
    ],
    tech: ["Python", "Flask", "Vue", "PostgreSQL", "GCP", "Azure", "pandas"],
    category: "software",
  },
  {
    id: "9",
    period: "Sep 2023",
    role: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    description: "",
    category: "certification",
  },
  {
    id: "10",
    period: "Feb 2024",
    role: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    description: "",
    category: "certification",
  },
  {
    id: "11",
    period: "Sep 2024 - Apr 2026",
    role: "Forward Deployed Engineer",
    organization: "Thoughtful AI",
    description:
      "Building fully autonomous AI agents for healthcare Revenue Cycle Management, replacing manual billing work with agents that operate 24/7.",
    highlights: [
      "Payment Posting Agent: eliminated a 60-day billing backlog, accelerating revenue by 2 months",
      "Appeal Submission Agent: cut submission time by 4 months with proactive payer follow-up automation",
      "Established automated testing strategies across agent workflows",
      "Mentored new engineers; supported global CI/CD delivery workflows",
      "Collaborated with cross-functional teams across LATAM and the US to develop and implement customized solutions aligned with business objectives",
      "Engaged directly with healthcare provider clients through requirements gathering sessions, product demos, and onboarding calls, ensuring solutions were tailored to each customer's operational workflows",
    ],
    tech: ["Python", "RPA", "AWS", "Robocorp"],
    category: "ai",
    featured: true,
  },
];
