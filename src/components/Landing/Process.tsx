const steps = [
  ["01", "Discover", "We learn about your business, audience, and the opportunity ahead."],
  ["02", "Define", "We shape a focused direction, content structure, and clear creative system."],
  ["03", "Design & build", "We bring it to life through considered design and robust development."],
  [
    "04",
    "Launch & evolve",
    "We refine the details, launch with confidence, and support what comes next.",
  ],
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold text-[#4b857b]">Our process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            Good work starts with a good working relationship.
          </h2>
        </div>
        <div className="divide-y divide-slate-200">
          {steps.map(([number, title, text]) => (
            <article key={number} className="grid grid-cols-[3rem_1fr] gap-4 py-6 first:pt-0">
              <span className="text-sm font-semibold text-[#4b857b]">{number}</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
