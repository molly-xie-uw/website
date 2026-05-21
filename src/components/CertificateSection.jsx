const credentials = [
  {
    title: 'Exam P (Probability)',
    issuer: 'Society of Actuaries',
    issued: 'Issued May 2026',
  },
  {
    title: "President's Scholarship of Distinction",
    issuer: 'University of Waterloo',
    issued: 'Awarded for an admission average of 95% or above',
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
              <div className="flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-matcha-700 text-white shadow-sm">
                  <span className="text-xl font-bold">{item.title.startsWith('Exam') ? 'P' : 'UW'}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold leading-snug text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-lg leading-snug text-slate-800">{item.issuer}</p>
                  <p className="mt-2 text-base text-slate-500">{item.issued}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
