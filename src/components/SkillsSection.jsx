const skills = [
  { category: 'Languages', items: ['Python', 'C', 'SQL'] },
  { category: 'Web & Apps', items: ['React', 'Streamlit', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Linux'] },
  { category: 'Focus Areas', items: ['Data Analysis', 'SOA Exam P', 'Responsible AI'] },
];

export default function SkillsSection() {
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
      </div>
    </section>
  );
}
