import { useState, useEffect, useRef } from 'react'

type Lang = 'en' | 'fr'
type Theme = 'dark' | 'light'

const CV_URL = `${import.meta.env.BASE_URL}cv.pdf`

// ─── Translations ────────────────────────────────────────────────────────────

const t = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact', downloadCV: 'Download CV' },
    hero: {
      badge: 'Computer Engineering Student · ENSIT, Tunisia',
      title: 'Computer Engineer building intelligent digital experiences.',
      description: 'Final-year Computer Engineering student passionate about AI, intelligent systems and modern software development. I build practical, scalable and user-focused digital solutions.',
      cta1: 'View Projects', cta2: 'Download CV', cta3: 'Contact Me',
    },
    stats: [
      { value: '5+', label: 'Projects Delivered' },
      { value: 'AI', label: 'Primary Focus' },
      { value: '2027', label: 'Graduation' },
      { value: '4+', label: 'Years Building' },
    ],
    about: {
      sectionLabel: '// about',
      title: 'Engineering mindset.\nContinuous learning.',
      text: "I'm a final-year Computer Engineering student at ENSIT, Tunisia, with a deep focus on artificial intelligence, intelligent systems, and modern software engineering. I approach every project systematically — understanding requirements, designing for scalability, and iterating until the solution is right. My goal is to build technology that is not only functional, but meaningfully impactful.",
      education: {
        label: 'Education',
        school: 'ENSIT — École Nationale Supérieure d\'Ingénieurs de Tunis',
        degree: 'Computer Engineering',
        period: '2023 — 2027',
        focus: ['Artificial Intelligence', 'Software Engineering', 'Intelligent Systems', 'Web & Mobile Dev'],
      },
    },
    skills: {
      sectionLabel: '// skills',
      title: 'Technical Expertise',
      categories: [
        { name: 'Programming Languages', items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'PHP'] },
        { name: 'AI & Machine Learning', items: ['Artificial Intelligence', 'Machine Learning', 'AI Integration'] },
        { name: 'Backend Development', items: ['Flask', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT'] },
        { name: 'Frontend & Mobile', items: ['React', 'Angular', 'Ionic', 'HTML', 'CSS', 'Tailwind CSS'] },
        { name: 'Databases', items: ['MongoDB', 'MySQL', 'SQLite'] },
        { name: 'Tools & DevOps', items: ['Git', 'GitHub', 'GitLab', 'Linux', 'Docker', 'VS Code'] },
      ],
    },
    projects: {
      sectionLabel: '// projects',
      title: 'Selected Projects',
      subtitle: 'A focused selection of engineering work built during my academic and professional journey.',
      items: [
        {
          number: '01',
          title: 'AI Interview Simulation',
          github: 'https://github.com/Dhouafli-MohamedAziz/ai-interview-simulator-PFA2',
          description: 'An intelligent platform that parses CVs, generates contextual interview questions via AI, and supports real-time speech interaction — creating a complete interview simulation environment.',
          tech: ['Python', 'AI', 'Flask', 'FastAPI', 'STT', 'TTS'],
          highlight: 'AI-Powered',
        },
        {
          number: '02',
          title: 'FreelanceHub',
          github: 'https://github.com/GreenAladine6/Freelance_app',
          description: 'A full-stack freelance marketplace with authentication, project listings, and real-time messaging via WebSockets. Mobile-first cross-platform design using Angular and Ionic.',
          tech: ['Angular', 'Ionic', 'Flask', 'MongoDB', 'JWT', 'WebSocket'],
          highlight: 'Full-Stack',
        },
        {
          number: '03',
          title: 'Research Center Platform',
          github: 'https://github.com/GreenAladine6/Research-Center-PFA1',
          description: 'A comprehensive academic management platform for research projects, scientific events, laboratory equipment inventory, and researcher profile management.',
          tech: ['Flask', 'JavaScript', 'SQL', 'REST API'],
          highlight: 'Web App',
        },
        {
          number: '04',
          title: 'Cloud Document Management',
          github: 'https://github.com/DOURAYED03/Cloud_Storage',
          description: 'A multi-tenant cloud document platform with team collaboration features, version control, and granular access permission management across organizations.',
          tech: ['CodeIgniter 4', 'PHP', 'React', 'MySQL'],
          highlight: 'SaaS Platform',
        },
        {
          number: '05',
          title: 'Airstruct Consulting',
          description: 'A showcase website presenting Airstruct Consulting, its services, expertise, and professional identity.',
          tech: ['Website', 'Consulting', 'Web Design'],
          highlight: 'Showcase Site',
          github: 'https://github.com/DOURAYED03/Airstruct',
        },
      ],
    },
    experience: {
      sectionLabel: '// experience',
      title: 'Professional Journey',
      items: [
        {
          role: 'Computer Engineering Student',
          org: 'ENSIT — École Nationale Supérieure d\'Ingénieurs de Tunis',
          period: '2023 — Present',
          type: 'Education',
          description: 'Pursuing a Computer Engineering degree with specialization in AI and intelligent systems. Participating in engineering projects, hackathons, and student organizations.',
        },
        {
          role: 'Web Development Intern',
          org: 'Digital Bundle · Tunisia',
          period: 'June 2 – July 5, 2026',
          type: 'Internship',
          description: 'Developed a multi-tenant document management platform for users, companies, folders, and access permissions. Built the backend with PHP and CodeIgniter 4 and the frontend with React. Technologies: PHP, CodeIgniter 4, React, MySQL, Docker, Git.',
        },
        {
          role: 'Web Development Intern',
          org: 'AirStruct Consulting · Tunisia',
          period: 'August 1 – 31, 2026',
          type: 'Internship',
          description: 'Contributed to the company website for an aeronautical engineering consultancy. Integrated Sanity CMS for dynamic content and built a simple chatbot to improve the user experience. Technologies: Next.js, React, Sanity CMS, JavaScript, Git, GitLab.',
        },
      ],
    },
    process: {
      sectionLabel: '// process',
      title: 'How I Engineer Solutions',
      steps: [
        { number: '01', step: 'Understand', desc: 'Analyze requirements, constraints and user needs before writing a single line of code.' },
        { number: '02', step: 'Design', desc: 'Architect scalable, maintainable systems with clear data flow and component boundaries.' },
        { number: '03', step: 'Build', desc: 'Implement with clean, structured code following engineering best practices.' },
        { number: '04', step: 'Improve', desc: 'Iterate based on feedback, optimize performance, and continuously refine.' },
      ],
    },
    certifications: {
      sectionLabel: '// certifications',
      title: 'Certifications & Communities',
      items: [
        { name: 'CCNA', org: 'Cisco Networking Academy', desc: 'Networking fundamentals, routing, switching, and network infrastructure.', icon: '🔌' },
        { name: 'Securinets ENSIT', org: 'Cybersecurity Club', desc: 'CTF competitions, cybersecurity challenges, and information security practices.', icon: '🛡️' },
        { name: 'ENSIT Junior Entreprise', org: 'Student Organization', desc: 'Agile/Scrum methodologies, project management, and professional teamwork.', icon: '⚙️' },
      ],
    },
    contact: {
      sectionLabel: '// contact',
      title: 'Have a project or opportunity in mind?',
      subtitle: "Let's build something together. I'm open to internships, collaborations, and AI/software engineering opportunities.",
      form: { name: 'Full Name', email: 'Email Address', subject: 'Subject', message: 'Your Message', send: 'Send Message' },
      links: { email: 'Send an Email', linkedin: 'LinkedIn', github: 'GitHub' },
      successMsg: "Message sent! I'll get back to you shortly.",
    },
    footer: 'Designed & built by Dourayed Glii · Computer Engineering Student @ ENSIT',
  },
  fr: {
    nav: { home: 'Accueil', about: 'À propos', skills: 'Compétences', projects: 'Projets', experience: 'Expérience', contact: 'Contact', downloadCV: 'Télécharger CV' },
    hero: {
      badge: 'Étudiant Ingénieur Informatique · ENSIT, Tunisie',
      title: 'Ingénieur en informatique spécialisé dans la conception de solutions intelligentes.',
      description: "Étudiant en dernière année de cycle ingénieur en informatique, passionné par l'IA, les systèmes intelligents et le développement logiciel moderne. Je conçois des solutions numériques pratiques, évolutives et centrées sur l'utilisateur.",
      cta1: 'Voir mes projets', cta2: 'Télécharger CV', cta3: 'Me contacter',
    },
    stats: [
      { value: '5+', label: 'Projets réalisés' },
      { value: 'IA', label: 'Spécialité principale' },
      { value: '2027', label: 'Diplôme' },
      { value: '4+', label: 'Années de pratique' },
    ],
    about: {
      sectionLabel: '// à propos',
      title: "Une approche d'ingénieur.\nUn apprentissage continu.",
      text: "Je suis étudiant en dernière année de cycle ingénieur en informatique à l'ENSIT, Tunisie, avec un fort intérêt pour l'intelligence artificielle, les systèmes intelligents et le génie logiciel. J'aborde chaque projet de manière systématique — en analysant les besoins, en concevant des architectures évolutives, et en itérant jusqu'à obtenir une solution robuste. Mon objectif est de construire des technologies fonctionnelles et réellement utiles.",
      education: {
        label: 'Formation',
        school: "ENSIT — École Nationale Supérieure d'Ingénieurs de Tunis",
        degree: 'Génie Informatique',
        period: '2023 — 2027',
        focus: ['Intelligence Artificielle', 'Génie Logiciel', 'Systèmes Intelligents', 'Développement Web & Mobile'],
      },
    },
    skills: {
      sectionLabel: '// compétences',
      title: 'Expertise Technique',
      categories: [
        { name: 'Langages de programmation', items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'PHP'] },
        { name: 'IA & Machine Learning', items: ['Intelligence Artificielle', 'Machine Learning', 'Intégration IA'] },
        { name: 'Développement Backend', items: ['Flask', 'FastAPI', 'REST APIs', 'WebSockets', 'JWT'] },
        { name: 'Frontend & Mobile', items: ['React', 'Angular', 'Ionic', 'HTML', 'CSS', 'Tailwind CSS'] },
        { name: 'Bases de données', items: ['MongoDB', 'MySQL', 'SQLite'] },
        { name: 'Outils & DevOps', items: ['Git', 'GitHub', 'GitLab', 'Linux', 'Docker', 'VS Code'] },
      ],
    },
    projects: {
      sectionLabel: '// projets',
      title: 'Projets sélectionnés',
      subtitle: 'Une sélection de projets clés réalisés au cours de mon parcours académique et professionnel.',
      items: [
        {
          number: '01',
          title: "Simulation d'entretien IA",
          github: 'https://github.com/Dhouafli-MohamedAziz/ai-interview-simulator-PFA2',
          description: "Une plateforme intelligente qui analyse les CV, génère des questions d'entretien contextuelles par IA, et supporte l'interaction vocale en temps réel pour une simulation d'entretien complète.",
          tech: ['Python', 'IA', 'Flask', 'FastAPI', 'STT', 'TTS'],
          highlight: 'Propulsé par IA',
        },
        {
          number: '02',
          title: 'FreelanceHub',
          github: 'https://github.com/GreenAladine6/Freelance_app',
          description: "Une marketplace freelance full-stack avec authentification, annonces de projets et messagerie temps réel via WebSockets. Design mobile-first avec Angular et Ionic.",
          tech: ['Angular', 'Ionic', 'Flask', 'MongoDB', 'JWT', 'WebSocket'],
          highlight: 'Full-Stack',
        },
        {
          number: '03',
          title: 'Plateforme Centre de Recherche',
          github: 'https://github.com/GreenAladine6/Research-Center-PFA1',
          description: "Une plateforme académique complète pour gérer les projets de recherche, événements scientifiques, équipements de laboratoire et profils de chercheurs.",
          tech: ['Flask', 'JavaScript', 'SQL', 'REST API'],
          highlight: 'Application Web',
        },
        {
          number: '04',
          title: 'Gestion Documentaire Cloud',
          github: 'https://github.com/DOURAYED03/Cloud_Storage',
          description: "Une plateforme cloud multi-tenant pour la gestion de documents avec collaboration d'équipe, contrôle de version et permissions d'accès granulaires.",
          tech: ['CodeIgniter 4', 'PHP', 'React', 'MySQL'],
          highlight: 'Plateforme SaaS',
        },
        {
          number: '05',
          title: 'Airstruct Consulting',
          description: 'Un site vitrine présentant Airstruct Consulting, ses services, son expertise et son identité professionnelle.',
          tech: ['Site web', 'Conseil', 'Web design'],
          highlight: 'Site vitrine',
          github: 'https://github.com/DOURAYED03/Airstruct',
        },
      ],
    },
    experience: {
      sectionLabel: '// expérience',
      title: 'Parcours professionnel',
      items: [
        {
          role: 'Étudiant Ingénieur Informatique',
          org: "ENSIT — École Nationale Supérieure d'Ingénieurs de Tunis",
          period: '2023 — Présent',
          type: 'Formation',
          description: "Formation en génie informatique avec spécialisation en IA et systèmes intelligents. Participation à des projets d'ingénierie, hackathons et organisations étudiantes.",
        },
        {
          role: 'Stagiaire en développement web',
          org: 'Digital Bundle · Tunisie',
          period: '2 juin – 5 juillet 2026',
          type: 'Stage',
          description: "Développement d'une plateforme multi-tenant de gestion documentaire pour les utilisateurs, entreprises, dossiers et permissions d'accès. Réalisation du backend avec PHP et CodeIgniter 4 et du frontend avec React. Technologies : PHP, CodeIgniter 4, React, MySQL, Docker, Git.",
        },
        {
          role: 'Stagiaire en développement web',
          org: 'AirStruct Consulting · Tunisie',
          period: '1 – 31 août 2026',
          type: 'Stage',
          description: "Participation au développement du site institutionnel d'un cabinet spécialisé en conseil en ingénierie aéronautique. Intégration de Sanity CMS pour la gestion dynamique des contenus et mise en place d'un chatbot simple pour améliorer l'expérience utilisateur. Technologies : Next.js, React, Sanity CMS, JavaScript, Git, GitLab.",
        },
      ],
    },
    process: {
      sectionLabel: "// processus",
      title: "Comment j'ingénierise les solutions",
      steps: [
        { number: '01', step: 'Comprendre', desc: 'Analyser les besoins, contraintes et exigences utilisateurs avant d\'écrire la moindre ligne de code.' },
        { number: '02', step: 'Concevoir', desc: 'Architecturer des systèmes évolutifs et maintenables avec des flux de données et composants bien définis.' },
        { number: '03', step: 'Construire', desc: 'Implémenter avec un code propre et structuré en suivant les meilleures pratiques d\'ingénierie.' },
        { number: '04', step: 'Améliorer', desc: 'Itérer selon les retours, optimiser les performances et affiner la solution en continu.' },
      ],
    },
    certifications: {
      sectionLabel: '// certifications',
      title: 'Certifications & Communautés',
      items: [
        { name: 'CCNA', org: 'Cisco Networking Academy', desc: 'Fondamentaux des réseaux, routage, commutation et infrastructure réseau.', icon: '🔌' },
        { name: 'Securinets ENSIT', org: 'Club Cybersécurité', desc: 'Compétitions CTF, défis de cybersécurité et pratiques de sécurité informatique.', icon: '🛡️' },
        { name: 'ENSIT Junior Entreprise', org: 'Organisation Étudiante', desc: 'Méthodologies Agile/Scrum, gestion de projet et travail en équipe professionnelle.', icon: '⚙️' },
      ],
    },
    contact: {
      sectionLabel: '// contact',
      title: 'Vous avez un projet ou une opportunité ?',
      subtitle: "Construisons quelque chose ensemble. Je suis disponible pour des stages, collaborations et opportunités en IA et développement logiciel.",
      form: { name: 'Nom complet', email: 'Adresse e-mail', subject: 'Sujet', message: 'Votre message', send: 'Envoyer le message' },
      links: { email: 'Envoyer un e-mail', linkedin: 'LinkedIn', github: 'GitHub' },
      successMsg: "Message envoyé ! Je vous répondrai très bientôt.",
    },
    footer: 'Conçu & développé par Dourayed Glii · Étudiant Ingénieur @ ENSIT',
  },
}

// ─── Node Visualization ───────────────────────────────────────────────────────

const nodes = [
  { id: 'python', x: 60, y: 80, label: 'Python', primary: true },
  { id: 'ai', x: 200, y: 50, label: 'AI', primary: true },
  { id: 'ml', x: 340, y: 80, label: 'ML', primary: false },
  { id: 'cloud', x: 470, y: 55, label: 'Cloud', primary: false },
  { id: 'flask', x: 100, y: 190, label: 'Flask', primary: false },
  { id: 'api', x: 250, y: 175, label: 'API', primary: true },
  { id: 'react', x: 390, y: 195, label: 'React', primary: false },
  { id: 'ui', x: 510, y: 175, label: 'UI/UX', primary: false },
  { id: 'sql', x: 70, y: 300, label: 'SQL', primary: false },
  { id: 'data', x: 210, y: 290, label: 'Data', primary: false },
  { id: 'docker', x: 360, y: 305, label: 'Docker', primary: false },
  { id: 'deploy', x: 490, y: 290, label: 'Deploy', primary: true },
]

const edges = [
  ['python', 'ai'], ['python', 'flask'], ['ai', 'ml'], ['ai', 'api'],
  ['ml', 'api'], ['ml', 'react'], ['flask', 'api'], ['flask', 'sql'],
  ['api', 'react'], ['api', 'data'], ['react', 'ui'], ['sql', 'data'],
  ['data', 'docker'], ['docker', 'deploy'], ['cloud', 'deploy'], ['cloud', 'ml'],
]

function NodeViz() {
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))
  return (
    <svg viewBox="0 0 580 370" className="w-full h-full" aria-hidden="true">
      {/* Background grid */}
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="rgba(30,42,69,0.8)" />
        </pattern>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="580" height="370" fill="url(#grid)" />

      {/* Edges */}
      {edges.map(([a, b], i) => {
        const na = nodeMap[a], nb = nodeMap[b]
        if (!na || !nb) return null
        return (
          <line
            key={i}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke="#3b82f6"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        )
      })}

      {/* Animated flow lines (subset) */}
      {[['python', 'ai'], ['ai', 'api'], ['api', 'react'], ['data', 'docker']].map(([a, b], i) => {
        const na = nodeMap[a], nb = nodeMap[b]
        if (!na || !nb) return null
        const len = Math.hypot(nb.x - na.x, nb.y - na.y)
        return (
          <line
            key={`flow-${i}`}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke="#06b6d4"
            strokeOpacity="0.5"
            strokeWidth="1.5"
            strokeDasharray={`${len * 0.2} ${len * 0.8}`}
            style={{ animation: `flow-line ${2.5 + i * 0.5}s linear infinite`, strokeDashoffset: len }}
          />
        )
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <g key={node.id}>
          {node.primary && (
            <circle cx={node.x} cy={node.y} r="18" fill="url(#nodeGlow)" />
          )}
          <circle
            cx={node.x} cy={node.y}
            r={node.primary ? 6 : 4.5}
            fill={node.primary ? '#3b82f6' : '#1e2a45'}
            stroke={node.primary ? '#3b82f6' : '#3b82f6'}
            strokeWidth={node.primary ? 0 : 1}
            strokeOpacity="0.5"
            className={node.primary ? 'node-pulse' : ''}
          />
          <text
            x={node.x} y={node.y - 12}
            textAnchor="middle"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            fontWeight="500"
            fill={node.primary ? '#93c5fd' : '#64748b'}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

interface NavbarProps {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  setTheme: (t: Theme) => void
  activeSection: string
}

function Navbar({ lang, setLang, theme, setTheme, activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const tr = t[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home', label: tr.nav.home },
    { id: 'about', label: tr.nav.about },
    { id: 'skills', label: tr.nav.skills },
    { id: 'projects', label: tr.nav.projects },
    { id: 'experience', label: tr.nav.experience },
    { id: 'contact', label: tr.nav.contact },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      style={{
        background: scrolled ? (theme === 'dark' ? 'rgba(6,9,26,0.95)' : 'rgba(248,250,252,0.95)') : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          {/* Logo */}
          <button onClick={() => scrollTo('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--accent)' }}>&gt;</span>
            <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--foreground)' }}>Dourayed Glii</span>
          </button>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Lang switcher */}
            <div style={{ display: 'flex', background: 'var(--muted)', borderRadius: '6px', padding: '2px', border: '1px solid var(--border)' }}>
              {(['en', 'fr'] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: lang === l ? 'var(--primary)' : 'transparent',
                    color: lang === l ? 'white' : 'var(--muted-foreground)',
                    transition: 'all 0.15s',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{
                background: 'var(--muted)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Download CV */}
            <a
              href={CV_URL}
              download
              className="btn-primary hidden lg:inline-flex"
              style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              {tr.nav.downloadCV}
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex', flexDirection: 'column', gap: '5px' }}
            >
              <span className="hamburger-line" style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }} />
              <span className="hamburger-line" style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="hamburger-line" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu md:hidden">
          <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', padding: '0.625rem 0',
                  color: 'var(--foreground)', fontWeight: 500, fontSize: '0.9375rem',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.75rem' }}>
              <a href={CV_URL} download className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem', flex: 1, justifyContent: 'center' }}>
                {tr.nav.downloadCV}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero({ lang }: { lang: Lang }) {
  const tr = t[lang].hero
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '4rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-30%', right: '-10%',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: '40vw', height: '40vw',
          background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div className="grid-dots" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      </div>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '5rem 1.5rem 4rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}
          className="lg:grid-cols-[1fr_1fr]">
          {/* Left: Text */}
          <div>
            <div className="animate-fadeInUp" style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: 'var(--accent)',
                background: 'rgba(6,182,212,0.08)',
                border: '1px solid rgba(6,182,212,0.2)',
                borderRadius: '4px',
                padding: '0.35rem 0.75rem',
                display: 'inline-block',
                fontWeight: 500,
              }}>
                {tr.badge}
              </span>
            </div>

            <h1 className="animate-fadeInUp delay-100" style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
              color: 'var(--foreground)',
            }}>
              {tr.title}
            </h1>

            <p className="animate-fadeInUp delay-200" style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--secondary-foreground)',
              marginBottom: '2rem',
              maxWidth: '32rem',
            }}>
              {tr.description}
            </p>

            <div className="animate-fadeInUp delay-300" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                {tr.cta1}
              </button>
              <a href={CV_URL} download className="btn-ghost">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                {tr.cta2}
              </a>
              <button className="btn-ghost" onClick={() => scrollTo('contact')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {tr.cta3}
              </button>
            </div>
          </div>

          {/* Right: Node Visualization */}
          <div className="animate-fadeInUp delay-400 animate-float hidden lg:block" style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: '0.75rem', left: '0.75rem',
              display: 'flex', gap: '0.4rem',
            }}>
              {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <div style={{ marginTop: '1.5rem' }}>
              <NodeViz />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function Stats({ lang }: { lang: Lang }) {
  const items = t[lang].stats
  return (
    <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--card)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="sm:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} style={{
              padding: '2rem 1.5rem',
              textAlign: 'center',
              borderRight: i < items.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--primary)',
                lineHeight: 1,
                marginBottom: '0.375rem',
              }}>
                {item.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--muted-foreground)', fontWeight: 500, letterSpacing: '0.02em' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About({ lang }: { lang: Lang }) {
  const tr = t[lang].about
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start' }}
          className="lg:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>
              <span className="accent-line" />{tr.sectionLabel}
            </p>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              whiteSpace: 'pre-line',
            }}>
              {tr.title}
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--secondary-foreground)' }}>
              {tr.text}
            </p>
          </div>

          {/* Right: Education card */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              {tr.education.label}
            </p>
            <div className="tech-card" style={{ borderRadius: '10px', padding: '1.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '8px',
                  background: 'rgba(59,130,246,0.12)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{tr.education.degree}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.25rem' }}>{tr.education.school}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>{tr.education.period}</div>
                </div>
              </div>
              <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {tr.education.focus.map((f, i) => (
                    <span key={i} className="skill-tag">{f}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🎓', label: lang === 'en' ? 'Engineering Student' : 'Étudiant Ingénieur', val: 'ENSIT, Tunisia' },
                { icon: '🤖', label: lang === 'en' ? 'AI Enthusiast' : 'Passionné d\'IA', val: lang === 'en' ? 'Core Focus' : 'Focus principal' },
              ].map((item, i) => (
                <div key={i} className="tech-card" style={{ borderRadius: '10px', padding: '1.25rem' }}>
                  <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.125rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted-foreground)' }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills({ lang }: { lang: Lang }) {
  const tr = t[lang].skills
  const categoryIcons: Record<number, string> = {
    0: '💻', 1: '🤖', 2: '⚡', 3: '🖥️', 4: '🗄️', 5: '🛠️',
  }
  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}><span className="accent-line" />{tr.sectionLabel}</p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{tr.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem' }}
          className="sm:grid-cols-2 lg:grid-cols-3">
          {tr.categories.map((cat, i) => (
            <div key={i} className="tech-card" style={{ borderRadius: '10px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.125rem' }}>{categoryIcons[i]}</span>
                <h3 style={{ fontWeight: 700, fontSize: '0.9375rem' }}>{cat.name}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map((item, j) => (
                  <span key={j} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects({ lang }: { lang: Lang }) {
  const tr = t[lang].projects

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}><span className="accent-line" />{tr.sectionLabel}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} className="sm:flex-row sm:items-end sm:justify-between">
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{tr.title}</h2>
            <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9375rem', maxWidth: '28rem' }}>{tr.subtitle}</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {tr.items.map((project, i) => (
            <a key={i} href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="tech-card project-card" style={{
              borderRadius: '12px',
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              cursor: 'pointer',
              color: 'inherit',
              textDecoration: 'none',
            }}>
              {/* Number */}
              <div className="project-number hidden lg:block">{project.number}</div>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.125rem' }}>{project.title}</h3>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6875rem',
                    color: 'var(--accent)',
                    background: 'rgba(6,182,212,0.08)',
                    border: '1px solid rgba(6,182,212,0.2)',
                    borderRadius: '4px',
                    padding: '0.125rem 0.5rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}>
                    {project.highlight}
                  </span>
                </div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--secondary-foreground)', marginBottom: '1rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((tech, j) => (
                    <span key={j} style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.75rem',
                      color: 'var(--primary)',
                      background: 'rgba(59,130,246,0.08)',
                      border: '1px solid rgba(59,130,246,0.15)',
                      borderRadius: '4px',
                      padding: '0.2rem 0.6rem',
                      fontWeight: 500,
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--border)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience({ lang }: { lang: Lang }) {
  const tr = t[lang].experience
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}><span className="accent-line" />{tr.sectionLabel}</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{tr.title}</h2>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {tr.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.25rem' }}>
                    <div className="timeline-dot" />
                    {i < tr.items.length - 1 && (
                      <div style={{ width: '1px', flex: 1, background: 'var(--border)', marginTop: '0.5rem' }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < tr.items.length - 1 ? '1rem' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                      <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>{item.role}</h3>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.6875rem',
                        color: item.type === 'Education' || item.type === 'Formation' ? 'var(--accent)' : 'var(--primary)',
                        background: item.type === 'Education' || item.type === 'Formation' ? 'rgba(6,182,212,0.08)' : 'rgba(59,130,246,0.08)',
                        border: `1px solid ${item.type === 'Education' || item.type === 'Formation' ? 'rgba(6,182,212,0.2)' : 'rgba(59,130,246,0.15)'}`,
                        borderRadius: '4px',
                        padding: '0.125rem 0.5rem',
                        fontWeight: 600,
                      }}>
                        {item.type}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.125rem' }}>{item.org}</div>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)', marginBottom: '0.75rem' }}>{item.period}</div>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--secondary-foreground)' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Engineering Process ──────────────────────────────────────────────────────

function Process({ lang }: { lang: Lang }) {
  const tr = t[lang].process
  return (
    <section style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}><span className="accent-line" />{tr.sectionLabel}</p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{tr.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem' }} className="sm:grid-cols-2 lg:grid-cols-4">
          {tr.steps.map((s, i) => (
            <div key={i} className="tech-card" style={{ borderRadius: '10px', padding: '1.75rem', position: 'relative' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6875rem',
                color: 'var(--primary)',
                fontWeight: 600,
                marginBottom: '0.875rem',
                letterSpacing: '0.1em',
              }}>
                {s.number}
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.125rem', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>{s.step}</h3>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--muted-foreground)' }}>{s.desc}</p>
              {i < tr.steps.length - 1 && (
                <div className="hidden lg:block" style={{
                  position: 'absolute', right: '-0.75rem', top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  color: 'var(--border)',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Certifications ───────────────────────────────────────────────────────────

function Certifications({ lang }: { lang: Lang }) {
  const tr = t[lang].certifications
  return (
    <section style={{ padding: '6rem 0', background: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}><span className="accent-line" />{tr.sectionLabel}</p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{tr.title}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1.25rem' }} className="sm:grid-cols-3">
          {tr.items.map((cert, i) => (
            <div key={i} className="tech-card" style={{ borderRadius: '10px', padding: '1.75rem' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{cert.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.25rem' }}>{cert.name}</h3>
              <div style={{ fontSize: '0.8125rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.75rem' }}>{cert.org}</div>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--muted-foreground)' }}>{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact({ lang }: { lang: Lang }) {
  const tr = t[lang].contact
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" style={{ padding: '6rem 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="lg:grid-cols-[1fr_1.5fr]">
          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}><span className="accent-line" />{tr.sectionLabel}</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
              {tr.title}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--secondary-foreground)', marginBottom: '2rem' }}>
              {tr.subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: '✉️', label: tr.links.email, href: 'mailto:dourayed.glii@example.com' },
                { icon: '💼', label: tr.links.linkedin, href: 'https://www.linkedin.com/in/glii-dourayed-14047a30b/' },
                { icon: '🐙', label: tr.links.github, href: 'https://github.com/DOURAYED03' },
              ].map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '1rem 1.25rem',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: 'var(--foreground)',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    transition: 'border-color 0.2s, transform 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateX(0)' }}
                >
                  <span>{link.icon}</span>
                  {link.label}
                  <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted-foreground)" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="tech-card" style={{ borderRadius: '12px', padding: '2rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <p style={{ fontWeight: 600, fontSize: '1.0625rem', color: 'var(--foreground)', marginBottom: '0.5rem' }}>{tr.successMsg}</p>
                <button className="btn-ghost" style={{ marginTop: '1.5rem' }} onClick={() => setSent(false)}>
                  {lang === 'en' ? 'Send another' : 'Envoyer un autre'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem', color: 'var(--foreground)' }}>{tr.form.name}</label>
                    <input className="form-input" type="text" placeholder={tr.form.name} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem', color: 'var(--foreground)' }}>{tr.form.email}</label>
                    <input className="form-input" type="email" placeholder={tr.form.email} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem', color: 'var(--foreground)' }}>{tr.form.subject}</label>
                  <input className="form-input" type="text" placeholder={tr.form.subject} value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.375rem', color: 'var(--foreground)' }}>{tr.form.message}</label>
                  <textarea className="form-input" rows={5} placeholder={tr.form.message} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  {tr.form.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 1.5rem', textAlign: 'center' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
        {t[lang].footer}
      </p>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [theme, setTheme] = useState<Theme>('dark')
  const [activeSection, setActiveSection] = useState('home')

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'light' : ''
  }, [theme])

  // Scroll spy
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} activeSection={activeSection} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <Process lang={lang} />
      <Certifications lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}
