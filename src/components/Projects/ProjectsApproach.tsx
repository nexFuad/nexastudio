const points = [
  [
    "Choose clarity",
    "Each project begins by finding the story and structure that will make the biggest difference.",
  ],
  [
    "Design with purpose",
    "The visual system is made to support the message, not distract from it.",
  ],
  [
    "Build for momentum",
    "Every responsive detail is developed to help the experience work harder after launch.",
  ],
];
export default function ProjectsApproach() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            The common thread
          </p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            Different industries. One clear ambition.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {points.map(([title, text], index) => (
            <article key={title} className="border-t border-slate-300 pt-5">
              <p className="text-sm font-semibold text-[#4b857b]">0{index + 1}</p>
              <h3 className="mt-6 text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
