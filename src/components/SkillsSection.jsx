const skills = [
  { category: 'Languages', items: ['Python', 'C', 'SQL', 'JavaScript/TypeScript'] },
  { category: 'Web & Apps', items: ['React', 'Streamlit', 'Firebase', 'Vite', 'Tailwind CSS', 'Vercel'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Figma', 'LaTeX'] },
  { category: 'Focus Areas', items: ['Data Analysis', 'Data Visualization', 'Probability', 'SOA Exam P', 'Responsible AI', 'Computer Vision'] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-[#F6F1E7] dark:bg-[#171D17]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#6F8A72] dark:text-[#A9B8A0]">Skills</p>
            <h2 className="font-display text-3xl font-bold text-[#40483F] dark:text-[#FFFDF8] md:text-4xl">Skills & Tools</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5f6a5d] dark:text-[#D7E2CF] md:text-base">A practical toolkit across software, data, and quantitative problem solving.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <article key={group.category} className="rounded-2xl border border-[#CFC3B0]/70 bg-[#FFFDF8] p-6 shadow-[0_14px_34px_rgba(64,72,63,0.10)] transition duration-200 hover:-translate-y-0.5 hover:border-[#A9B8A0] dark:border-[#A9B8A0]/25 dark:bg-[#40483F] dark:shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
              <h3 className="font-display text-lg font-bold text-[#40483F] dark:text-[#FFFDF8]">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-lg border border-[#CFC3B0]/60 bg-[#F6F1E7] px-3 py-1 text-sm font-medium text-[#40483F] dark:border-[#A9B8A0]/25 dark:bg-[#283027] dark:text-[#F6F1E7]">
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
