export type ProjectKind = 'modern' | 'classic';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  kind: ProjectKind;
  liveUrl: string;
  repoUrl: string;
  highlight?: string;
}

export interface Certificate {
  title: string;
  image: string;
  url: string;
  hours?: string;
}

export const modernProjects: Project[] = [
  {
    title: 'TPV Sorveteria Demo',
    description: 'Ecossistema realtime com kiosk, cliente PWA, KDS e admin para operação de sorveteria.',
    stack: ['React', 'Vite', 'Supabase', 'PWA'],
    kind: 'modern',
    liveUrl: 'https://tpv-sorveteria-demo.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/TPV-SORVETERIA-DEMO',
    highlight: 'Produção Vercel',
  },
  {
    title: 'Workspace Vivencie Terapias',
    description: 'Aplicação web moderna para experiência digital de terapias, com interface responsiva.',
    stack: ['React', 'Vite', 'TypeScript'],
    kind: 'modern',
    liveUrl: 'https://workspace-vivencie-terapias-jhin1v9s-projects.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/Workspace-Vivencie-Terapias',
  },
  {
    title: 'SitePulse QA',
    description: 'Ferramenta de avaliação e inspeção de sites com foco em qualidade e automação.',
    stack: ['React', 'Vite', 'QA'],
    kind: 'modern',
    liveUrl: 'https://site-pulse-qa-jhin1v9s-projects.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/SitePulse-QA',
  },
  {
    title: 'Programa Baba',
    description: 'Sistema web para organização de jogos e grupos, com fluxos práticos para mobile.',
    stack: ['React', 'Vite'],
    kind: 'modern',
    liveUrl: 'https://programa-baba-jhin1v9s-projects.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/Programa-Baba',
  },
  {
    title: 'Aun Fac',
    description: 'Aplicação frontend moderna publicada em produção com fluxo direto no Vercel.',
    stack: ['React', 'Vite'],
    kind: 'modern',
    liveUrl: 'https://aun-fac.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/Aun-Fac',
  },
  {
    title: 'Recibo Alfombra v2',
    description: 'Gerador operacional com interface web e publicação dedicada no Vercel.',
    stack: ['React', 'Vite'],
    kind: 'modern',
    liveUrl: 'https://recibo-alfombra-v2.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/Recibo-Alfombra-v2',
  },
  {
    title: 'Programa Recibo Alfombra',
    description: 'Aplicação Next.js para criação de recibos com fluxo mais robusto e escalável.',
    stack: ['Next.js', 'React'],
    kind: 'modern',
    liveUrl: 'https://programa-recibo-alfombra.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/programa-recibo-alfombra',
  },
  {
    title: 'Kuruma Netejes',
    description: 'Projeto profissional para presença digital, serviços e conversão de clientes.',
    stack: ['Next.js', 'React'],
    kind: 'modern',
    liveUrl: 'https://projeto-web-profissional-kuruma-net.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/Projeto-Web-Profissional-Kuruma-Netejes-',
  },
  {
    title: 'WhatsApp Marketing Project',
    description: 'Projeto web orientado a campanha e comunicação, publicado em produção.',
    stack: ['Web App', 'Node'],
    kind: 'modern',
    liveUrl: 'https://whatsapp-marketing-project.vercel.app/',
    repoUrl: 'https://github.com/Jhin1v9/Whatsapp-Marketing-Project',
  },
];

export const classicProjects: Project[] = [
  ['Relógio Digital', 'HTML, CSS e JavaScript com manipulação de tempo.', 'Projeto-Relogio'],
  ['Quadro de Desenho', 'Ferramenta interativa com canvas e JavaScript.', 'ProjetoQuadrodeDesenho'],
  ['Bateria Virtual', 'Experiência sonora com eventos de teclado.', 'projeto-1---bateria'],
  ['Jogo da Velha', 'Lógica de jogo e controle de estado em JavaScript.', 'projetoJogodaVelha'],
  ['App de Clima', 'Consumo de API e renderização dinâmica de dados.', 'projetoClima'],
  ['Quiz Interativo', 'Fluxo de perguntas, pontuação e feedback.', 'ProjetoQuizzJScript'],
  ['Clone Starbucks', 'Landing page responsiva com composição visual.', 'Starbucks'],
  ['Awax Landing Page', 'Página institucional completa com seções.', 'awaxfinalized'],
  ['B7 Burguer', 'Landing page de produto com foco visual.', 'b7burguer'],
  ['Medicenter', 'Site institucional multi-seção.', 'MedicenterProject'],
  ['Drag and Drop', 'Interação arrasta e solta com JavaScript.', 'Projeto-7-drag-and-drop'],
].map(([title, description, repoName]) => ({
  title,
  description,
  stack: ['HTML', 'CSS', 'JavaScript'],
  kind: 'classic' as const,
  liveUrl: `https://jhin1v9.github.io/${repoName}/`,
  repoUrl: `https://github.com/Jhin1v9/${repoName}`,
}));

export const certificates: Certificate[] = [
  {
    title: 'HTML5 + CSS3',
    image: '/images/certificado abner html5 css3 89h.png',
    url: 'https://app.b7web.com.br/certificates/9232339',
    hours: '89h',
  },
  {
    title: 'HTML/CSS - Básico ao Avançado',
    image: '/images/html e css avançado 24h.png',
    url: 'https://app.b7web.com.br/certificates/11800720-142a-4841-8059-848b05549629',
    hours: '24h',
  },
  {
    title: 'HTML5/CSS3',
    image: '/images/html5 css 3 44h.png',
    url: 'https://app.b7web.com.br/certificates/9cd66e9c-6b8f-46c6-8dc8-46462aad3f1e',
    hours: '44h',
  },
  {
    title: 'Projeto Starbucks - Grid',
    image: '/images/projeto starbucks 3h.png',
    url: 'https://app.b7web.com.br/certificates/a7d89284-8356-491c-a0eb-b4c46b12663d',
    hours: '3h',
  },
  {
    title: 'Fundamentos em HTML/CSS',
    image: '/images/fundamentos html css 12h.png',
    url: 'https://app.b7web.com.br/certificates/25376c7e-8b4f-43ca-a93f-f61cb5d102d8',
    hours: '12h',
  },
  {
    title: 'Projeto HTML/CSS B7 Burguer',
    image: '/images/projeto b7 burguer 3h.png',
    url: 'https://app.b7web.com.br/certificates/a5afc775-c635-47e4-a7ca-5dc4ffab6a2d',
    hours: '3h',
  },
  {
    title: 'Fundamentos do JavaScript',
    image: '/images/fundamentos javascript 12h.png',
    url: 'https://app.b7web.com.br/certificates/7f8d2bfa-6054-4e57-afdc-b43a56922720',
    hours: '12h',
  },
  {
    title: 'JavaScript Avançado',
    image: '/images/java script avançado 17h.png',
    url: 'https://app.b7web.com.br/certificates/ad6c0aee-bb08-4015-8ff1-a89fc9daaa54',
    hours: '17h',
  },
  {
    title: 'JavaScript - 7 Projetos em 7 Dias',
    image: '/images/7 projetos 7 dias JavaScript.png',
    url: 'https://app.b7web.com.br/certificates/d0cb0394-e811-4fdd-9427-6d48420cad89',
  },
  {
    title: 'Fundamentos do Tailwind',
    image: '/images/Fundamentos do Tailwind 3hrs.png',
    url: 'https://app.b7web.com.br/certificates/cea203ed-a021-4366-a0c1-535ae480b72f',
    hours: '3h',
  },
];

export const skills = [
  'React',
  'TypeScript',
  'Vite',
  'Next.js',
  'JavaScript ES6+',
  'HTML5',
  'CSS3',
  'APIs REST',
  'Supabase',
  'Git & GitHub',
  'Vercel',
  'Responsive UI',
];
