type TimelineEventText = {
  role: string
  description: string
  highlights?: string[]
}

export const translations = {
  en: {
    nav: {
      about: 'About',
      journey: 'Journey',
      projects: 'Projects',
      skills: 'Skills',
      recommendations: 'Recommendations',
      contact: 'Contact',
    },
    hero: {
      role: 'Software Developer',
      description:
        'Former civil engineer turned software developer. I help companies automate processes, cut operational costs, and build the software they actually need. From internal tools to production systems. 4+ years turning complex problems into clean, scalable solutions',
      badges: [
        { label: 'Python', scheme: 'blue' },
        { label: 'React', scheme: 'cyan' },
        { label: 'AWS Certified', scheme: 'orange' },
        { label: 'AI Agents', scheme: 'green' },
        { label: 'Full Stack', scheme: 'purple' },
        { label: 'Open to remote', scheme: 'gray' },
        { label: 'EU Citizen', scheme: 'blue' },
      ],
      downloadCv: 'Download CV',
    },
    stats: [
      { value: '60 days', label: 'billing backlog eliminated', sub: '→ near real-time' },
      { value: '90%',     label: 'client time saved',         sub: 'in order processing' },
      { value: '50+',     label: 'students mentored',         sub: 'in web development' },
      { value: '4+',      label: 'years in software',         sub: 'full-stack & AI' },
      { value: '2x',      label: 'AWS certified',             sub: 'Developer & Practitioner' },
    ],
    about: {
      tag: '// who I am',
      title: 'About Me',
      p1: "I started my career managing construction projects worth tens of millions of dollars - coordinating teams, deadlines, and solving problems. In 2021, I made a bet on myself and transitioned into software. Best decision I've made. That background in engineering and getting things built is still at the core of how I work.",
      p2: "Today I build software that helps companies automate the slow, expensive, manual stuff. I'm drawn to problems where a well-designed system can save a team months of work and I care a lot about getting the details right, because in the kind of workflows I work on, the details are what make or break it.",
      quickFacts: ['São Paulo, Brazil', 'Open to remote', 'English - Fluent'],
      volunteerTitle: 'Volunteer Work',
      volunteerText: "Contributed data analysis work to support the NGO's operations and decision-making. Applying technical skills to social impact outside of paid work.",
    },
    timeline: {
      tag: '// my story',
      title: 'The Journey',
      subtitle: 'From R$40M construction sites to software - not the obvious path, but exactly the right one.',
      keyMoment: 'key moment',
      eventTexts: {
        '1': { role: "Bachelor's in Civil Engineering", description: 'Built a strong analytical and problem-solving foundation, systematic thinking and large-scale project management skills that would later translate directly into software engineering.' },
        '2': { role: 'Exchange Program - Civil Engineering', description: 'Studied abroad and became fluent in English, opening doors to international opportunities and global teams.' },
        '3': { role: 'Civil Engineer', description: 'Managed teams and budgets on a R$40M construction project. Redesigned the equipment rental process and cut those costs in half.' },
        '4': { role: 'MBA in Project Management', description: 'Deepened expertise in risk management, planning, and leading multidisciplinary teams under constraints.' },
        '5': { role: 'Civil Engineer', description: 'Managed R$5M+ in municipal infrastructure projects, simultaneously supervising teams across 15 construction sites and ensuring on-time, on-budget delivery.' },
        '5b': {
          role: 'Data Analyst Volunteer',
          description: 'Volunteered at a Brazilian non-profit supporting public school students through education programs across 62 cities. Analyzed engagement data from their learning platform to spot where students were dropping out mid-course and turned those patterns into concrete recommendations for the team.',
          highlights: [
            'Extracted and analyzed student progress data from the learning platform',
            'Identified critical drop-off points in the learning journey',
            'Findings directly shaped program structure decisions to reduce mid-course abandonment',
          ],
        },
        '6': { role: 'Full Stack Web Development Bootcamp', description: 'After years managing construction, I decided to build software instead. Committed to an intensive full-stack bootcamp and never looked back.' },
        '7': { role: 'Assistant Teacher', description: 'Mentored 50+ students in web development. The best way to deeply learn something is to teach it.' },
        '8': {
          role: 'Software Developer',
          description: 'Built B2B commerce automation for the consumer goods industry, saving clients 90% of manual order processing time.',
          highlights: [
            'Automated order flow for thousands of products daily',
            'Back-end routes with Flask, front-end with Vue',
            'Deployed on GCP Cloud Run for high availability',
            'PostgreSQL for real-time decision-making pipelines',
            'Extracted and cleaned data from Excel, PDFs, and scraped sources with pandas',
          ],
        },
        '9':  { role: 'AWS Certified Cloud Practitioner',  description: '' },
        '10': { role: 'AWS Certified Developer Associate', description: '' },
        '11': {
          role: 'Forward Deployed Engineer',
          description: 'Building fully autonomous AI agents for healthcare Revenue Cycle Management, replacing manual billing work with agents that operate 24/7.',
          highlights: [
            'Payment Posting Agent: eliminated a 60-day billing backlog, accelerating revenue by 2 months',
            'Appeal Submission Agent: cut submission time by 4 months with proactive payer follow-up automation',
            'Grew automated test coverage to 80% with pytest, gating GitHub Actions and Bitbucket CI/CD pipelines to block regressions',
            'Onboarded 4-6 engineers to independent contribution within 2 weeks; supported global CI/CD delivery workflows',
            'Collaborated with cross-functional teams across LATAM and the US to develop and implement customized solutions aligned with business objectives',
            'Engaged directly with healthcare provider clients through requirements gathering sessions, product demos, and onboarding calls, ensuring solutions were tailored to each customer\'s operational workflows',
          ],
        },
      } as Record<string, TimelineEventText>,
    },
    projects: {
      tag: "// what I've built",
      title: 'Work & Projects',
      subtitle: 'A mix of professional case studies and personal projects - focused on automation, AI, and full-stack development.',
      labels: {
        problem: 'Problem',
        solution: 'Solution',
        whatIBuilt: 'What I built',
        impact: 'Impact',
      },
    },
    skills: {
      tag: '// my tools',
      title: 'Skills & Technologies',
      subtitle: 'A toolkit built across construction, teaching, and product development.',
      groupLabels: ['Backend', 'Frontend', 'Cloud & Infra', 'Data & Databases', 'AI & Automation', 'Practices'],
    },
    recommendations: {
      tag: '// social proof',
      title: 'Recommendations',
      subtitle: 'What colleagues and collaborators say about working with me.',
    },
    contact: {
      tag: '// get in touch',
      title: "Let's Connect",
      subtitle: 'If you have a project in mind, want to work together, or just want to say hi, my inbox is always open.',
      lookingForTag: "// what I'm looking for",
      lookingFor: [
        { label: 'Role type', value: 'Backend, full-stack, or AI / automation-focused' },
        { label: 'Stack',     value: 'Python primary - comfortable across the full stack' },
        { label: 'Team',      value: 'Distributed, international teams where autonomy is expected' },
        { label: 'Location',  value: 'Remote-first (São Paulo, Brazil - UTC-3)' },
      ],
      sayHello: 'Say Hello',
    },
  },

  pt: {
    nav: {
      about: 'Sobre',
      journey: 'Jornada',
      projects: 'Projetos',
      skills: 'Habilidades',
      recommendations: 'Recomendações',
      contact: 'Contato',
    },
    hero: {
      role: 'Desenvolvedor de Software',
      description:
        'Fui engenheiro civil antes de virar desenvolvedor - e essa transição foi a melhor aposta que já fiz. Hoje ajudo empresas a automatizar processos, cortar custos operacionais e construir o software que elas realmente precisam. Mais de 4 anos transformando problemas complexos em soluções que funcionam de verdade.',
      badges: [
        { label: 'Python', scheme: 'blue' },
        { label: 'React', scheme: 'cyan' },
        { label: 'AWS Certified', scheme: 'orange' },
        { label: 'Agentes de IA', scheme: 'green' },
        { label: 'Full Stack', scheme: 'purple' },
        { label: 'Disponível para remoto', scheme: 'gray' },
        { label: 'Cidadão Europeu', scheme: 'blue' },
      ],
      downloadCv: 'Baixar CV',
    },
    stats: [
      { value: '60 dias', label: 'de backlog eliminados',            sub: '→ quase em tempo real' },
      { value: '90%',     label: 'do tempo economizado',             sub: 'no processamento de pedidos' },
      { value: '50+',     label: 'alunos mentorados',                sub: 'em desenvolvimento web' },
      { value: '4+',      label: 'anos em software',                 sub: 'full-stack & IA' },
      { value: '2x',      label: 'certificado AWS',                  sub: 'Developer & Practitioner' },
    ],
    about: {
      tag: '// quem sou eu',
      title: 'Sobre Mim',
      p1: 'Comecei a carreira gerenciando obras com orçamentos de dezenas de milhões de reais - coordenando equipes, cumprindo prazos e resolvendo problema todo dia. Em 2021, apostei em mim mesmo e mergulhei de cabeça no desenvolvimento de software. Melhor decisão da minha vida. Esse jeito de pensar em engenharia, de fazer as coisas acontecerem, ainda está no centro de tudo que faço.',
      p2: 'Hoje construo sistemas que ajudam empresas a automatizar o que é lento, caro e manual. Gosto de problemas onde uma solução bem pensada pode poupar meses de trabalho para uma equipe inteira - e me importo muito com os detalhes, porque nos fluxos em que trabalho, é nos detalhes que tudo pode dar errado.',
      quickFacts: ['São Paulo, Brasil', 'Disponível para remoto', 'Inglês - Fluente'],
      volunteerTitle: 'Trabalho Voluntário',
      volunteerText: 'Contribuí com análise de dados para uma ONG educacional, ajudando a embasar decisões estratégicas com dados reais. Uma forma de usar o que sei para gerar impacto além do trabalho.',
    },
    timeline: {
      tag: '// minha história',
      title: 'A Jornada',
      subtitle: 'De obras de R$40M para software - não o caminho mais óbvio, mas definitivamente o certo.',
      keyMoment: 'momento-chave',
      eventTexts: {
        '1':  { role: 'Bacharelado em Engenharia Civil',            description: 'Desenvolvi uma base sólida de raciocínio analítico, pensamento sistemático e gestão de projetos de grande escala - habilidades que, mais tarde, se traduziram diretamente para a engenharia de software.' },
        '2':  { role: 'Intercâmbio - Engenharia Civil',             description: 'Estudei no exterior e fiquei fluente em inglês, abrindo portas para oportunidades internacionais e equipes globais.' },
        '3':  { role: 'Engenheiro Civil',                           description: 'Geri equipes e orçamentos em uma obra de R$40M. Redesenhei o processo de locação de equipamentos e cortei esses custos pela metade.' },
        '4':  { role: 'MBA em Gestão de Projetos',                  description: 'Aprofundei minha formação em gestão de riscos, planejamento estratégico e liderança de equipes multidisciplinares sob pressão.' },
        '5':  { role: 'Engenheiro Civil',                           description: 'Gerenciei mais de R$5M em projetos de infraestrutura municipal, supervisionando equipes em 15 canteiros ao mesmo tempo e garantindo entregas dentro do prazo e do orçamento.' },
        '5b': {
          role: 'Voluntário - Análise de Dados',
          description: 'Fiz voluntariado em uma ONG brasileira que apoia alunos de escolas públicas com programas educacionais em 62 cidades. Analisei dados de engajamento da plataforma de aprendizado para entender onde os alunos desistiam no meio do curso e transformei esses padrões em recomendações concretas para a equipe.',
          highlights: [
            'Extração e análise de dados de progresso dos alunos na plataforma',
            'Mapeamento dos pontos críticos de abandono na jornada de aprendizado',
            'Os resultados embasaram decisões de estrutura do programa para reduzir a evasão',
          ],
        },
        '6':  { role: 'Bootcamp Full Stack de Desenvolvimento Web', description: 'Depois de anos gerenciando obras, decidi construir software. Entrei em um bootcamp intensivo de full stack e nunca mais olhei para trás.' },
        '7':  { role: 'Professor Assistente',                       description: 'Mentorei mais de 50 alunos em desenvolvimento web. A melhor forma de aprender algo de verdade é ensinando.' },
        '8': {
          role: 'Desenvolvedor de Software',
          description: 'Junto com a equipe, construímos automação de pedidos B2B para a indústria de bens de consumo, eliminando 90% do tempo que os clientes gastavam processando pedidos manualmente.',
          highlights: [
            'Automação do fluxo de pedidos para milhares de produtos por dia',
            'Back-end com Flask, front-end com Vue',
            'Deploy no GCP Cloud Run para alta disponibilidade',
            'PostgreSQL para pipelines de decisão em tempo real',
            'Extração e limpeza de dados de Excel, PDFs e portais via web scraping com pandas',
          ],
        },
        '9':  { role: 'AWS Certified Cloud Practitioner',  description: '' },
        '10': { role: 'AWS Certified Developer Associate', description: '' },
        '11': {
          role: 'Forward Deployed Engineer',
          description: 'Construindo agentes de IA totalmente autônomos para gestão do ciclo de receita na área da saúde - substituindo trabalho manual de faturamento por sistemas que rodam 24 horas por dia, 7 dias por semana.',
          highlights: [
            'Agente de Registro de Pagamentos: eliminou um backlog de 60 dias, acelerando a receita em até 2 meses',
            'Agente de Envio de Recursos: reduziu o tempo de submissão em 4 meses com automação de acompanhamento proativo',
            'Elevou a cobertura de testes automatizados para 80% com pytest, integrando gates de teste aos pipelines de CI/CD (GitHub Actions e Bitbucket) para bloquear regressões',
            'Onboarding de 4-6 engenheiros até a contribuição independente em 2 semanas; suporte a pipelines de entrega CI/CD globais',
            'Colaboração com equipes multifuncionais na América Latina e nos EUA para desenvolver soluções alinhadas aos objetivos do negócio',
            'Contato direto com clientes de saúde em sessões de levantamento de requisitos, demos de produto e onboarding, garantindo soluções adaptadas à realidade operacional de cada cliente',
          ],
        },
      } as Record<string, TimelineEventText>,
    },
    projects: {
      tag: '// o que eu construí',
      title: 'Trabalhos & Projetos',
      subtitle: 'Uma mistura de estudos de caso profissionais e projetos pessoais - com foco em automação, IA e desenvolvimento full-stack.',
      labels: {
        problem: 'Problema',
        solution: 'Solução',
        whatIBuilt: 'O que construí',
        impact: 'Impacto',
      },
    },
    skills: {
      tag: '// minhas ferramentas',
      title: 'Habilidades & Tecnologias',
      subtitle: 'Um repertório construído ao longo de anos em desenvolvimento de software.',
      groupLabels: ['Backend', 'Frontend', 'Cloud & Infra', 'Dados & Bancos', 'IA & Automação', 'Boas Práticas'],
    },
    recommendations: {
      tag: '// o que dizem sobre mim',
      title: 'Recomendações',
      subtitle: 'O que colegas e parceiros dizem sobre trabalhar comigo.',
    },
    contact: {
      tag: '// entre em contato',
      title: 'Vamos Conversar',
      subtitle: 'Tem um projeto em mente, quer trabalhar junto ou só quer trocar uma ideia? Minha caixa de entrada está sempre aberta.',
      lookingForTag: '// o que estou buscando',
      lookingFor: [
        { label: 'Tipo de vaga',  value: 'Back-end, full-stack ou com foco em IA e automação' },
        { label: 'Stack',         value: 'Python como principal - confortável em todo o full stack' },
        { label: 'Equipe',        value: 'Times distribuídos e internacionais onde autonomia é esperada' },
        { label: 'Localização',   value: 'Remoto (São Paulo, Brasil - UTC-3)' },
      ],
      sayHello: 'Dizer Olá',
    },
  },
}
