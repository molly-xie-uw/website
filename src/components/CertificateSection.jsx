const credentials = [
  {
    title: 'SOA Exam P',
    meta: 'Society of Actuaries · Passed',
    description: 'Passed the SOA preliminary exam covering probability foundations for actuarial science, risk, and quantitative reasoning.',
  },
  {
    title: "University of Waterloo President's Scholarship of Distinction",
    meta: 'University of Waterloo',
    description: 'Awarded to students admitted with an admission average of 95% or above.',
  },
];

export default function CertificateSection() {
  return (
    <section id="certificates" className="section-padding bg-slate-50/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-matcha-700">
            Credentials
          </p>
          <h2 className="font-display text-3xl font-bold text-slate-800 md:text-4xl">
            Certificates & Honors
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map((item) => (
            <article
              key={item.title}
              className="glass-card p-6 border border-slate-100 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-matcha-400 hover:shadow-md"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-matcha-600" />
              <h3 className="font-display text-xl font-bold leading-snug text-slate-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-matcha-700">{item.meta}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
