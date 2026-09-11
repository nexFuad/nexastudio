const principles = [
  [
    "01",
    "Start with what matters",
    "Every project starts with your audience, your purpose, and the action you need people to take.",
  ],
  [
    "02",
    "Make it feel distinct",
    "We build a visual language that makes your brand recognizable without sacrificing clarity.",
  ],
  [
    "03",
    "Build for the long term",
    "Our sites are responsive, maintainable, and designed to keep working as your business evolves.",
  ],
];

export default function StudioValues() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            Our approach
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
            A simple approach, done with uncommon care.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {principles.map(([number, title, text]) => (
            <article
              key={number}
              className="grid gap-4 py-7 sm:grid-cols-[5rem_1fr_1fr] sm:gap-8 sm:py-9"
            >
              <span className="text-sm font-semibold text-[#4b857b]">{number}</span>
              <h3 className="text-xl font-semibold tracking-tight text-slate-800">{title}</h3>
              <p className="max-w-md text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
