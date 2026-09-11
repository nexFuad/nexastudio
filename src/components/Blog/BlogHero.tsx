export default function BlogHero() {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
          NexaStudio journal
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-slate-800 sm:text-7xl lg:text-8xl">
            Ideas for building a better online presence.
          </h1>
          <p className="border-l-2 border-[#80a99f] pl-5 text-base leading-7 text-slate-600 sm:pl-6 sm:text-lg sm:leading-8">
            Practical notes on strategy, design, development, and the work that goes into making a
            website useful.
          </p>
        </div>
      </div>
    </section>
  );
}
