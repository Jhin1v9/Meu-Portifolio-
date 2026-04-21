import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Sparkles,
} from 'lucide-react';
import { certificates, classicProjects, modernProjects, Project, skills } from './data';

type Filter = 'all' | 'modern' | 'classic';

const allProjects = [...modernProjects, ...classicProjects];

const navItems = [
  { href: '#projects', label: 'Projetos' },
  { href: '#skills', label: 'Stack' },
  { href: '#certificates', label: 'Certificados' },
  { href: '#contact', label: 'Contato' },
];

export default function App() {
  const [filter, setFilter] = useState<Filter>('all');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allProjects.filter((project) => {
      const matchesFilter = filter === 'all' || project.kind === filter;
      const searchable = `${project.title} ${project.description} ${project.stack.join(' ')}`.toLowerCase();
      return matchesFilter && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [filter, query]);

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProjectsSection
          filter={filter}
          filteredProjects={filteredProjects}
          query={query}
          setFilter={setFilter}
          setQuery={setQuery}
        />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Voltar ao início">
        <span className="brand-mark">AG</span>
        <span>Abner Gabriel</span>
      </a>
      <nav className="nav-links" aria-label="Navegação principal">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Frontend Developer em Barcelona
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          Interfaces rápidas, publicadas de verdade e prontas para impressionar.
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          Sou Abner Gabriel Ribeiro Mendes, desenvolvedor frontend júnior em Sabadell. Trabalho com React,
          TypeScript, Vite, Next.js e deploy em Vercel, transformando ideias em experiências web claras,
          responsivas e bem cuidadas.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          <a className="primary-button" href="#projects">
            Ver projetos <ArrowUpRight size={18} />
          </a>
          <a className="secondary-button" href="https://api.whatsapp.com/send/?phone=34685093192" target="_blank" rel="noreferrer">
            WhatsApp <MessageCircle size={18} />
          </a>
        </motion.div>
      </div>

      <motion.aside
        className="profile-panel"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.12 }}
      >
        <div className="profile-media">
          <img src={`${import.meta.env.BASE_URL}images/abner.jpeg`} alt="Foto de Abner Gabriel" />
        </div>
        <div className="profile-content">
          <span className="availability">Disponível para oportunidades júnior</span>
          <h2>Abner Gabriel Ribeiro Mendes</h2>
          <p>
            23 anos, Sabadell - Barcelona. Português, espanhol, catalão avançado, inglês e japonês em evolução.
          </p>
        </div>
      </motion.aside>
    </section>
  );
}

function TrustBar() {
  const stats = [
    ['9', 'apps modernos no Vercel'],
    ['21+', 'projetos publicados'],
    ['10', 'certificados B7Web'],
    ['4', 'idiomas de trabalho'],
  ];

  return (
    <section className="trust-bar" aria-label="Resumo profissional">
      {stats.map(([value, label]) => (
        <div key={label} className="stat-card">
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function ProjectsSection({
  filter,
  filteredProjects,
  query,
  setFilter,
  setQuery,
}: {
  filter: Filter;
  filteredProjects: Project[];
  query: string;
  setFilter: (filter: Filter) => void;
  setQuery: (query: string) => void;
}) {
  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'modern', label: 'Vercel / Framework' },
    { value: 'classic', label: 'GitHub Pages' },
  ];

  return (
    <section id="projects" className="section-block">
      <SectionHeading
        icon={<BriefcaseBusiness size={18} />}
        eyebrow="Projetos auditados"
        title="Links modernos vão direto para produção Vercel."
        description="Repositórios React, Vite, Next ou web app foram mapeados para deploys Vercel. Os exercícios estáticos continuam em GitHub Pages."
      />

      <div className="project-toolbar">
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar por projeto ou stack"
          />
        </label>
        <div className="filter-group" aria-label="Filtrar projetos">
          {filters.map((item) => (
            <button
              key={item.value}
              className={filter === item.value ? 'is-active' : ''}
              onClick={() => setFilter(item.value)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${project.kind}-${project.title}`} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isModern = project.kind === 'modern';

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.25) }}
    >
      <div className="project-card-top">
        <span className={isModern ? 'status-pill status-live' : 'status-pill'}>
          {isModern ? 'Vercel' : 'Pages'}
        </span>
        {project.highlight && <span className="highlight-pill">{project.highlight}</span>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="stack-list">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="card-actions">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Abrir app <ExternalLink size={16} />
        </a>
        <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Abrir repositório de ${project.title}`}>
          <Github size={17} />
        </a>
      </div>
    </motion.article>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-block split-section">
      <SectionHeading
        icon={<Code2 size={18} />}
        eyebrow="Stack atual"
        title="Base técnica reposicionada para mercado frontend moderno."
        description="A nova apresentação destaca projetos publicados, stack real e evolução para fullstack sem esconder os fundamentos."
      />
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill}>
            <CheckCircle2 size={15} />
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function CertificatesSection() {
  return (
    <section id="certificates" className="section-block">
      <SectionHeading
        icon={<Award size={18} />}
        eyebrow="Certificados"
        title="Formação contínua com provas visuais e links verificáveis."
        description="Os certificados foram mantidos como ativos visuais do portfólio e reorganizados em cards mais fáceis de escanear."
      />
      <div className="cert-grid">
        {certificates.map((certificate) => (
          <a key={certificate.url} className="cert-card" href={certificate.url} target="_blank" rel="noreferrer">
            <img src={certificate.image} alt={`Certificado ${certificate.title}`} loading="lazy" />
            <div>
              <h3>{certificate.title}</h3>
              {certificate.hours && <span>{certificate.hours}</span>}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Contato</p>
        <h2>Vamos transformar o próximo projeto em produção.</h2>
        <p>
          Aberto a oportunidades como Frontend Developer Júnior, Web Developer Júnior e projetos freelance com
          React, Vite, Next.js e interfaces responsivas.
        </p>
      </div>
      <div className="contact-actions">
        <a href="mailto:abnerr2002@icloud.com">
          <Mail size={18} />
          abnerr2002@icloud.com
        </a>
        <a href="https://api.whatsapp.com/send/?phone=34685093192" target="_blank" rel="noreferrer">
          <MessageCircle size={18} />
          WhatsApp
        </a>
        <span>
          <MapPin size={18} />
          Sabadell - Barcelona
        </span>
      </div>
    </section>
  );
}

function SectionHeading({
  icon,
  eyebrow,
  title,
  description,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-kicker">
        {icon}
        {eyebrow}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
