/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  BookOpen,
  Layers,
  Menu,
  X,
  Moon,
  Sun,
  MonitorCog
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import cscLogo from './assets/csc-logo.png';
import dscLogo from './assets/dsc-logo.png';
import technovationLogo from './assets/technovation-logo.png';
import waterlooMathLogo from './assets/waterloo-math-logo.png';
import wicsLogo from './assets/wics-logo.png';
import CertificateSection from './components/CertificateSection.jsx';

// --- Types ---

interface Project {
  title: string;
  tech: string[];
  description: string;
  features: string[];
  link?: string;
  github?: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

interface InvolvementItem {
  org: string;
  role: string;
  logoPath: string;
  abbr: string;
}

type ThemeMode = 'auto' | 'light' | 'dark';
type ActiveTheme = 'light' | 'dark';

const getAutoTheme = (): ActiveTheme => {
  const now = new Date();
  const month = now.getMonth();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const sunriseByMonth = [7.8, 7.3, 7.1, 6.6, 5.9, 5.6, 5.8, 6.3, 6.8, 7.4, 7.1, 7.7];
  const sunsetByMonth = [17.0, 17.7, 18.7, 20.0, 20.7, 21.0, 20.8, 20.1, 19.2, 18.2, 16.9, 16.7];

  return currentHour >= sunsetByMonth[month] || currentHour < sunriseByMonth[month] ? 'dark' : 'light';
};

const themeSequence: ThemeMode[] = ['auto', 'light', 'dark'];

// --- Components ---

const Section = ({ id, title, children, className = "" }: { id: string; title: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-slate-800"
      >
        <span className="h-px bg-matcha-300 flex-grow max-w-[40px]"></span>
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

const Navbar = ({
  themeMode,
  activeTheme,
  onThemeToggle,
}: {
  themeMode: ThemeMode;
  activeTheme: ActiveTheme;
  onThemeToggle: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Involvement', href: '#involvement' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const ThemeIcon = themeMode === 'auto' ? MonitorCog : activeTheme === 'dark' ? Moon : Sun;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-xl font-bold text-matcha-800 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-matcha-500 flex items-center justify-center text-white">MX</div>
          Molly Xie
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-matcha-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label={`Theme: ${themeMode}`}
            title={`Theme: ${themeMode}`}
            className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl border border-matcha-200 bg-white/70 text-matcha-800 shadow-sm backdrop-blur transition-all hover:border-matcha-400 hover:bg-matcha-50"
          >
            <ThemeIcon className="w-4 h-4" />
          </button>

          {/* Mobile Toggle */}
          <button 
          className="md:hidden text-slate-600 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-slate-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('auto');
  const [activeTheme, setActiveTheme] = useState<ActiveTheme>(getAutoTheme);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('molly-theme-mode');
    if (storedTheme === 'auto' || storedTheme === 'light' || storedTheme === 'dark') {
      setThemeMode(storedTheme);
    }
  }, []);

  useEffect(() => {
    const applyTheme = () => {
      const nextTheme = themeMode === 'auto' ? getAutoTheme() : themeMode;
      setActiveTheme(nextTheme);
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      document.documentElement.dataset.themeMode = themeMode;
      window.localStorage.setItem('molly-theme-mode', themeMode);
    };

    applyTheme();
    const intervalId = window.setInterval(applyTheme, 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, [themeMode]);

  const handleThemeToggle = () => {
    setThemeMode((currentMode) => {
      const currentIndex = themeSequence.indexOf(currentMode);
      return themeSequence[(currentIndex + 1) % themeSequence.length];
    });
  };

  const experiences: ExperienceItem[] = [
    {
      role: "Research Mentee, Quantitative Finance Project",
      company: "Women in Math Directed Reading/Research Program, UWaterloo",
      period: "May 2026 – Aug 2026",
      description: [
        "Conducting quantitative analysis of entry and exit strategies using historical stock and ETF data from the Yahoo Finance API.",
        "Developing Python-based backtesting pipelines for SMA, EMA, RSI, and MACD using return, Sharpe ratio, and drawdown.",
        "Evaluating strategy robustness through parameter tuning and visualization against baseline investment strategies."
      ]
    },
    {
      role: "Administrative Assistant",
      company: "Hunan Chiyang Information Technology Co., Ltd.",
      period: "Dec 2024 – Jan 2025",
      description: [
        "Screened 50+ resumes and maintained applicant tracking system, reducing processing time for HR team.",
        "Maintained and updated applicant tracking spreadsheets in Excel, improving accuracy and consistency of records.",
        "Supported day-to-day administrative and HR-related tasks in a fast-paced office environment.",
        "Ensured data accuracy across internal records and inventory-related documentation."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "New Channel International Education Group",
      period: "Jul 2024 – Sep 2024",
      description: [
        "Instructed 30+ students in IELTS and A-Level STEM subjects across 6 daily classes, with 80% achieving target scores.",
        "Prepared written feedback and progress reports, summarizing student performance and actionable recommendations.",
        "Analyzed learning patterns to identify gaps and adjust teaching strategies for different student needs.",
        "Collaborated with instructors to maintain consistent teaching quality in a fast-paced setting."
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: "MatchaMatch",
      tech: ["React", "Vite", "Tailwind CSS", "Express", "Firebase"],
      description: "A swipe-based platform for students to discover mentors, peers, and career opportunities through matching.",
      features: [
        "Real-time matching & messaging",
        "Community board features",
        "Styled with Framer Motion and Tailwind",
        "Firebase Firestore & Auth"
      ],
      github: "https://github.com/molly-xie-uw/matchamatch",
    },
    {
      title: "SpatialVCS",
      tech: ["Python", "FastAPI", "WebSocket", "YOLOv8", "LLM"],
      description: "Best Beginner Hack Winner at CTRL+HACK+DEL 2.0 2026. A 'Git for Reality' prototype that transforms physical spaces into searchable snapshots.",
      features: [
        "Object detection with YOLOv8",
        "Physical Diff method tracking movement",
        "Privacy-preserving search via embeddings"
      ],
      github: "https://github.com/molly-xie-uw/spatialvcs",
    },
    {
      title: "SleepMatch",
      tech: ["Python", "Data Analysis", "Streamlit"],
      description: "A sleep recommendation tool based on age, activity level, and caffeine intake using guidelines from NSF and Harvard Medical School.",
      features: [
        "Streamlit web app deployment",
        "Modular functions with input validation",
        "Statistical reasoning on lifestyle variables"
      ],
      github: "https://github.com/molly-xie-uw/sleepmatch",
    }
  ];

  const involvements: InvolvementItem[] = [
    { org: "Computer Science Club", role: "Event Coordinator", logoPath: cscLogo, abbr: "CSC" },
    { org: "Data Science Club", role: "Event Coordinator", logoPath: dscLogo, abbr: "DSC" },
    { org: "Women in Computer Science", role: "Volunteer & Judge", logoPath: wicsLogo, abbr: "WiCS" },
    { org: "Technovation Girls", role: "Volunteer & Judge", logoPath: technovationLogo, abbr: "TG" },
    { org: "Waterloo Math", role: "Math Open House Volunteer", logoPath: waterlooMathLogo, abbr: "Math" },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar themeMode={themeMode} activeTheme={activeTheme} onThemeToggle={handleThemeToggle} />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-matcha-50/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-matcha-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-matcha-100 text-matcha-700 text-xs font-bold tracking-wider uppercase mb-6">
              Available for Fall 2026 Co-op
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Molly Xie
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Honours Mathematics Co-op Student at <span className="text-matcha-700 font-semibold underline decoration-matcha-300 underline-offset-4">University of Waterloo</span>.
              <br />
              <span className="text-slate-500 text-lg md:text-xl">
                I build data-driven and AI-focused projects that turn messy information into useful decisions.
              </span>
            </h2>

            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-semibold transition-all shadow-sm"
              >
                <Download className="w-4 h-4" /> Download
              </a>

              <div className="flex items-center gap-3 ml-2">
                <a href="https://github.com/molly-xie-uw" target="_blank" className="p-3 bg-white border border-slate-100 rounded-xl hover:border-matcha-300 hover:text-matcha-600 transition-all shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/molly-xie-uw" target="_blank" className="p-3 bg-white border border-slate-100 rounded-xl hover:border-matcha-300 hover:text-matcha-600 transition-all shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:z95xie@uwaterloo.ca" className="p-3 bg-white border border-slate-100 rounded-xl hover:border-matcha-300 hover:text-matcha-600 transition-all shadow-sm">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Molly is a University of Waterloo Honours Mathematics Co-op student interested in data analysis, software development, responsible AI, quantitative finance, and building useful tools. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              She has experience with Python, C, SQL, React, Firebase, Streamlit, and data analysis. She enjoys projects that combine technical implementation with real-world decision making, striving to create solutions that are both robust and impactful.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-500">
                <MapPin className="w-4 h-4" /> <span>Waterloo, ON</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <BookOpen className="w-4 h-4" /> <span>Math & CS</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 bg-gradient-to-br from-matcha-50 to-white">
            <h3 className="font-display font-bold text-xl mb-4 text-slate-800">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-slate-800">University of Waterloo</p>
                <p className="text-sm text-slate-600 italic">Bachelor of Honours Mathematics (Co-op)</p>
                <p className="text-sm font-semibold text-matcha-700 mt-1">Average: 86.3/100</p>
              </div>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Relevant Coursework</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Algorithms & Data Abstraction</li>
                  <li>• Functional Programming</li>
                  <li>• Calculus I–II</li>
                  <li>• Linear Algebra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Work Experience" className="bg-slate-50/50">
        <div className="space-y-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-12 group ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-matcha-500 border-4 border-white shadow-sm z-10"></div>
              
              <div className="w-full md:w-1/2">
                <div className="glass-card p-8 hover:shadow-md hover:border-matcha-200">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-800">{exp.role}</h3>
                      <p className="text-matcha-700 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                        <span className="text-matcha-400 font-bold shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 flex flex-col hover:border-matcha-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-matcha-50 text-matcha-600 rounded-xl">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" className="p-2 hover:text-matcha-600 text-slate-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" className="p-2 hover:text-matcha-600 text-slate-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="font-display font-bold text-2xl mb-3 text-slate-800">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="border-t border-slate-50 pt-6 space-y-2">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <ChevronRight className="w-3 h-3 text-matcha-400" /> {f}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Involvement Section */}
      <Section id="involvement" title="Campus Involvement" className="bg-matcha-50/20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {involvements.map((inv, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 mb-6 relative">
                 {/* Logo image container */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-matcha-700 font-display font-bold text-xl group-hover:border-matcha-400 transition-all overflow-hidden">
                  <img src={inv.logoPath} alt={inv.org} className="w-full h-full object-contain p-2" onError={(e) => {
                    // Fallback to text if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerText = inv.abbr;
                  }} />
                </div>
              </div>
              <h4 className="font-bold text-slate-800 text-sm mb-1">{inv.org}</h4>
              <p className="text-xs text-slate-500">{inv.role}</p>
            </motion.div>
          ))}
        </div>

      </Section>

      <CertificateSection />

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" className="pb-32">
        <div className="glass-card p-12 bg-matcha-900 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-matcha-800/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-matcha-700/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">Let's connect!</h3>
              <p className="text-matcha-100 text-lg max-w-md">
                I'm currently looking for Fall 2026 co-op opportunities. Feel free to reach out for internship roles or just to say hi!
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="mailto:z95xie@uwaterloo.ca" className="flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-matcha-50 transition-all shadow-xl">
                <Mail className="w-5 h-5 text-matcha-600" /> z95xie@uwaterloo.ca
              </a>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/molly-xie-uw" target="_blank" className="flex-1 flex items-center justify-center gap-3 bg-matcha-800 text-white px-6 py-4 rounded-2xl font-bold hover:bg-matcha-700 transition-all">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
                <a href="https://github.com/molly-xie-uw" target="_blank" className="flex-1 flex items-center justify-center gap-3 bg-matcha-800 text-white px-6 py-4 rounded-2xl font-bold hover:bg-matcha-700 transition-all">
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-sm text-slate-400">
          Designed & Built with React + Tailwind CSS
        </p>
        <p className="text-xs text-slate-300 mt-2">
          © 2026 Molly Xie. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
