const certificate = {
  title: 'SOA Exam P',
  issuer: 'Society of Actuaries',
  status: 'Preparing',
  focus: ['Probability', 'Risk models', 'Actuarial foundations'],
  description:
    'Studying probability foundations for actuarial science, quantitative risk, and data-driven decision making.',
};

const SealIcon = () => (
  <svg className="h-10 w-10 text-[#6F8A72]" viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" />
    <path
      d="M23 33l6 6 13-16"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 52l-4 8 9-4M42 52l4 8-9-4"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CertificateSection() {
  return (
    <section id="certificates" className="section-padding bg-[#FFFDF8] text-[#40483F]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#6F8A72]">
              Credentials
            </p>
            <h2 className="font-display text-3xl font-bold text-[#40483F] md:text-4xl">
              Certificates
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#5f665d] md:text-base">
              A focused credential path connecting probability, risk, and quantitative reasoning.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#CFC3B0]/80 bg-[#F6F1E7] p-5 shadow-[0_18px_48px_rgba(64,72,63,0.10)] md:p-8">
          <article className="grid gap-6 rounded-3xl border border-[#6F8A72]/25 bg-[#FFFDF8] p-6 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#CFC3B0]/70 bg-[#F6F1E7]">
              <SealIcon />
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-bold text-[#40483F]">{certificate.title}</h3>
                <span className="rounded-full border border-[#A9B8A0]/70 bg-[#A9B8A0]/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#506654]">
                  {certificate.status}
                </span>
              </div>
              <p className="text-sm font-semibold text-[#506654]">{certificate.issuer}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5f665d]">{certificate.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {certificate.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#CFC3B0]/75 bg-[#F6F1E7] px-3 py-1 text-xs font-medium text-[#40483F]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#CFC3B0]/70 bg-[#F6F1E7] px-5 py-4 text-left md:text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F8A72]">Exam</p>
              <p className="mt-1 text-lg font-bold text-[#40483F]">P</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
