const skills = [
  { name: 'Python', description: 'Writing clear scripts for data, automation, and analysis.' },
  { name: 'C', description: 'Practicing memory, pointers, and lower-level problem solving.' },
  { name: 'SQL', description: 'Querying structured data and shaping it for decisions.' },
  { name: 'React', description: 'Building clean, responsive interfaces with reusable components.' },
  { name: 'Streamlit', description: 'Turning Python analysis into lightweight interactive apps.' },
  { name: 'Firebase', description: 'Exploring auth, realtime data, and app backends.' },
  { name: 'Git', description: 'Versioning projects and collaborating with a reliable workflow.' },
  { name: 'Data Analysis', description: 'Finding patterns, checking assumptions, and explaining results.' },
  { name: 'SOA Exam P', description: 'Building probability foundations for actuarial and risk work.' },
  { name: 'Responsible AI', description: 'Learning how to evaluate models with care and context.' },
];

const JadeDragonIcon = () => (
  <svg
    className="h-14 w-14 text-[#6F8A72]"
    viewBox="0 0 96 96"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M22 58c8-18 24-30 42-30 9 0 15 3 17 9 2 7-4 13-12 12-6-1-10-5-9-10"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 58c12 7 27 7 42 0M17 61c5-1 9-2 13-5M62 29l6-10 3 12M76 34l9-3-5 8"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="70" cy="39" r="2.5" fill="currentColor" />
    <path
      d="M13 70c10 4 20 2 27-6"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default function JadeDragonSkillPath() {
  return (
    <section id="skills" className="section-padding bg-[#F6F1E7] text-[#40483F]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#6F8A72]">
              Learning Journey
            </p>
            <h2 className="font-display text-3xl font-bold text-[#40483F] md:text-4xl">
              Skill Path
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5f665d] md:text-base">
              A small path through the tools and topics I&apos;ve been learning.
            </p>
          </div>
          <div className="hidden shrink-0 rounded-full border border-[#CFC3B0]/70 bg-[#FFFDF8]/80 p-3 shadow-sm md:block">
            <JadeDragonIcon />
          </div>
        </div>

        <div className="relative rounded-[28px] border border-[#CFC3B0]/70 bg-[#FFFDF8]/65 p-5 shadow-[0_18px_48px_rgba(64,72,63,0.10)] md:p-8">
          <div className="mb-5 flex justify-center md:hidden">
            <div className="rounded-full border border-[#CFC3B0]/70 bg-[#FFFDF8] p-3 shadow-sm">
              <JadeDragonIcon />
            </div>
          </div>

          <svg
            className="pointer-events-none absolute left-10 right-10 top-[112px] hidden h-16 text-[#CFC3B0] md:block"
            viewBox="0 0 900 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M8 42 C 150 14, 250 70, 380 42 S 610 14, 760 42 S 850 68, 892 39"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 12"
            />
          </svg>

          <div className="absolute bottom-8 left-[34px] top-32 w-px bg-[#CFC3B0] md:hidden" />

          <div className="relative grid gap-4 md:grid-cols-5 md:gap-x-5 md:gap-y-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative pl-10 md:pl-0"
                tabIndex={0}
              >
                <div className="absolute left-[25px] top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#FFFDF8] bg-[#6F8A72] shadow-[0_0_0_4px_rgba(169,184,160,0.28)] md:left-1/2 md:top-[-18px]" />
                <div
                  className={`min-h-[116px] rounded-2xl border border-[#CFC3B0]/75 bg-[#FFFDF8] p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#6F8A72]/70 hover:shadow-[0_14px_28px_rgba(64,72,63,0.12)] focus-within:border-[#6F8A72] ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-6'}`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-sm font-bold text-[#40483F]">{skill.name}</h3>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A9B8A0]" />
                  </div>
                  <p className="max-h-0 overflow-hidden text-xs leading-5 text-[#5f665d] opacity-0 transition-all duration-200 group-hover:max-h-24 group-hover:opacity-100 group-focus:max-h-24 group-focus:opacity-100 max-md:max-h-24 max-md:opacity-100">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
