import { useState } from 'react';
import DragonRunModal from './DragonRunModal.jsx';

const skills = [
  { category: 'Languages', items: ['Python', 'C', 'SQL'] },
  { category: 'Web & Apps', items: ['React', 'Streamlit', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Linux'] },
  { category: 'Focus Areas', items: ['Data Analysis', 'SOA Exam P', 'Responsible AI'] },
];

export default function SkillsSection() {
  const [isGameOpen, setIsGameOpen] = useState(false);

  return (
    <section id="skills" className="section-padding bg-[#F6F1E7]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-matcha-700">Skills</p>
            <h2 className="font-display text-3xl font-bold text-slate-800 md:text-4xl">Skills & Tools</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 md:text-base">A practical toolkit across software, data, and quantitative problem solving.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <article key={group.category} className="glass-card p-6 border-b-4 border-b-matcha-400">
              <h3 className="font-display text-lg font-bold text-slate-800">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-lg border border-slate-100 bg-white px-3 py-1 text-sm font-medium text-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-100 bg-white/80 p-5 shadow-sm md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="font-semibold text-slate-800">A small easter egg</p>
            <p className="mt-1 text-sm text-slate-500">A tiny skill game inspired by the simple games I play to unwind.</p>
          </div>
          <button type="button" onClick={() => setIsGameOpen(true)} className="mt-4 rounded-xl bg-matcha-700 px-5 py-3 text-sm font-bold text-white shadow-md shadow-matcha-200 transition hover:bg-matcha-800 md:mt-0">
            Try the hidden dragon run
          </button>
        </div>
      </div>
      <DragonRunModal open={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </section>
  );
}
