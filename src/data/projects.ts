type ProjectText = {
  title: string;
  problem: string;
  solution: string;
  impact: string;
};

export type Project = {
  company: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: "professional" | "personal";
  en: ProjectText;
  pt: ProjectText;
};

export const projects: Project[] = [
  {
    company: "Thoughtful AI",
    tech: ["Python", "RPA", "AWS", "Robocorp"],
    type: "professional",
    en: {
      title: "Payment Posting AI Agent",
      problem: "A healthcare billing team was drowning in a 60-day backlog of manual payment posting - every day of delay meant delayed revenue and mounting operational cost.",
      solution: "Working closely with a cross-functional team, I helped design and ship an autonomous AI agent that reads ERAs, reconciles payments, and posts them end-to-end with no human in the loop - running 24/7.",
      impact: "Eliminated a 60-day backlog. Payment processing moved from weeks-long queues to near real-time, accelerating revenue collection by up to 2 months.",
    },
    pt: {
      title: "Agente de IA para Registro de Pagamentos",
      problem: "A equipe de faturamento de um hospital estava afogada em um backlog de 60 dias de lançamentos manuais - cada dia de atraso significava receita represada e custos operacionais crescentes.",
      solution: "Trabalhando junto com um time multifuncional, ajudei a projetar e entregar um agente de IA autônomo que lê remessas, reconcilia pagamentos e os lança de ponta a ponta sem nenhum humano no processo - rodando 24 horas por dia, 7 dias por semana.",
      impact: "Eliminamos um backlog de 60 dias. O processamento passou de filas de semanas para quase tempo real, acelerando a cobrança de receita em até 2 meses.",
    },
  },
  {
    company: "Thoughtful AI",
    tech: ["Python", "RPA", "AWS", "Robocorp"],
    type: "professional",
    en: {
      title: "Appeal Submission AI Agent",
      problem: "Insurance appeal submissions required days of manual work per case, with no tracking of payer response timelines - leading to missed deadlines and lost revenue.",
      solution: "Collaborated with the team to build an agent that composes and submits appeals automatically, then monitors payer timelines and triggers escalation when reviewers exceed expected windows.",
      impact: "Reduced appeal submission time by 4 months. Proactive follow-up automation turned a reactive process into a data-driven one.",
    },
    pt: {
      title: "Agente de IA para Envio de Recursos",
      problem: "O envio de recursos a planos de saúde exigia dias de trabalho manual por caso, sem nenhum controle dos prazos de resposta - resultando em prazos perdidos e receita não recuperada.",
      solution: "Em colaboração com o time, construímos um agente que elabora e envia os recursos automaticamente, monitora os prazos dos planos e dispara alertas quando os revisores ultrapassam o tempo esperado.",
      impact: "Reduzimos o tempo de envio em 4 meses. A automação de acompanhamento transformou um processo reativo em algo orientado por dados.",
    },
  },
  {
    company: "Weduu - Data & AI",
    tech: ["Python", "Flask", "Vue", "PostgreSQL", "GCP", "pandas"],
    type: "professional",
    en: {
      title: "B2B Order Automation Platform",
      problem: "Sales reps in the consumer goods industry were manually entering thousands of product orders per day into multiple systems - slow, error-prone, and unscalable.",
      solution: "As part of a small engineering team, we built automation pipelines that ingested orders from diverse sources (email, Excel, scraped portals), cleaned and normalised the data, and pushed it through to back-end systems automatically.",
      impact: "Saved clients 90% of their order processing time. Handled thousands of products daily across multiple customers.",
    },
    pt: {
      title: "Plataforma de Automação de Pedidos B2B",
      problem: "Representantes de vendas na indústria de bens de consumo inseriam manualmente milhares de pedidos por dia em múltiplos sistemas - lento, sujeito a erros e sem escalabilidade.",
      solution: "Como parte de um time de engenharia enxuto, construímos pipelines de automação que capturam pedidos de diversas fontes (e-mail, Excel, portais via scraping), limpam e normalizam os dados e os enviam automaticamente para os sistemas de back-end.",
      impact: "Economizamos 90% do tempo que os clientes gastavam processando pedidos. A plataforma processava milhares de produtos por dia para múltiplos clientes.",
    },
  },
  {
    company: "Personal project",
    tech: ["Python", "PyQt6", "SQLite"],
    githubUrl: "https://github.com/caiogiffoni/pomodoro-timer-desktop",
    type: "personal",
    en: {
      title: "Pomodoro Timer - Desktop App",
      problem: "",
      solution: "Built a full-featured Pomodoro desktop app for Linux from scratch with Python and PyQt6. Custom circular arc countdown rendered with QPainter, system tray with live countdown and session count, 4 bundled alarm sounds, post-session review with notes, tags and focus score, streak tracking, and a 7-day stats bar chart - all persisted locally in SQLite.",
      impact: "",
    },
    pt: {
      title: "Pomodoro Timer - App Desktop",
      problem: "",
      solution: "Construí do zero um app Pomodoro completo para Linux com Python e PyQt6. Contagem regressiva circular desenhada com QPainter, ícone na bandeja com contagem ao vivo, 4 sons de alarme incluídos, revisão pós-sessão com notas, tags e pontuação de foco, controle de sequência e gráfico de barras dos últimos 7 dias, tudo salvo localmente em SQLite.",
      impact: "",
    },
  },
  {
    company: "Personal project",
    tech: ["Python", "Django", "Django REST Framework", "Pydantic", "OpenRouteService", "pytest"],
    githubUrl: "https://github.com/caiogiffoni/truck-trip-planner-back",
    type: "personal",
    en: {
      title: "ELD Truck Trip Planner - Backend",
      problem: "Planning FMCSA-compliant HOS schedules for truck drivers is complex: five interlocking rules (11-hr drive limit, 14-hr on-duty window, 30-min break, 10-hr rest, 70-hr/8-day cycle) must all be enforced simultaneously across a multi-day trip.",
      solution: "Django REST API that geocodes a driver's route via OpenRouteService, then runs a custom slot-based HOS scheduling algorithm to produce a complete day-by-day trip plan - with mandatory rest breaks, fuel stops, curfew windows, and 34-hr restarts all inserted automatically.",
      impact: "",
    },
    pt: {
      title: "ELD Truck Trip Planner - Backend",
      problem: "Planejar escalas de motoristas de caminhão em conformidade com as regras HOS da FMCSA é complexo: cinco regras interdependentes (limite de 11h de condução, janela de 14h em serviço, pausa de 30 min, descanso de 10h, ciclo de 70h/8 dias) precisam ser aplicadas simultaneamente ao longo de uma viagem de vários dias.",
      solution: "API REST em Django que geocodifica a rota do motorista via OpenRouteService e executa um algoritmo de agendamento HOS baseado em slots para gerar um plano de viagem dia a dia completo - com pausas obrigatórias, paradas para abastecimento, janelas de toque de recolher e reinícios de 34h inseridos automaticamente.",
      impact: "",
    },
  },
];
