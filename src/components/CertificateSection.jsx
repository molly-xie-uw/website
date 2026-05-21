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
    <section id="certificates" className="section-padding bg-[#FFFDF8] text-[#40483F]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#6F8A72]">
            Credentials
          </p>
          <h2 className="font-display text-3xl font-bold text-[#40483F] md:text-4xl">
            Certificates & Honors
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-[#CFC3B0]/80 bg-[#F6F1E7] p-6 shadow-[0_16px_40px_rgba(64,72,63,0.08)] transition duration-200 hover:border-[#6F8A72]/55 hover:shadow-[0_18px_44px_rgba(64,72,63,0.12)]"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-[#6F8A72]" />
              <h3 className="font-display text-xl font-bold leading-snug text-[#40483F]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-[#506654]">{item.meta}</p>
              <p className="mt-4 text-sm leading-6 text-[#5f665d]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
