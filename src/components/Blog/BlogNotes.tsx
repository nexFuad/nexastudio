const topics = ["Website strategy", "Brand direction", "Design systems", "Frontend development"];
export default function BlogNotes() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            What we write about
          </p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            Useful perspective for your next digital move.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <article key={topic} className="border-t border-slate-300 pt-5">
              <p className="text-sm font-semibold text-[#4b857b]">0{index + 1}</p>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-800">{topic}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Clear thinking and practical lessons from the work of building better websites.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
