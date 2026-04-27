export type SkillGroup = {
  label: string
  skills: string[]
  color: string
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    skills: ['Python', 'Flask', 'Django', 'Node.js'],
    color: 'blue.400',
  },
  {
    label: 'Frontend',
    skills: ['React', 'Vue', 'TypeScript', 'JavaScript', 'HTML / CSS'],
    color: 'green.400',
  },
  {
    label: 'Cloud & Infra',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'],
    color: 'orange.400',
  },
  {
    label: 'Data & Databases',
    skills: ['PostgreSQL', 'SQL', 'NoSQL', 'Prisma', 'TypeORM', 'pandas'],
    color: 'purple.400',
  },
  {
    label: 'AI & Automation',
    skills: ['RPA', 'Robocorp', 'AI Agents', 'GraphQL'],
    color: 'teal.400',
  },
  {
    label: 'Practices',
    skills: ['CI/CD', 'Agile', 'REST APIs', 'Git', 'Testing'],
    color: 'yellow.400',
  },
]
