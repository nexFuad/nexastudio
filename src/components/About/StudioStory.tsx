export default function StudioStory() {
  return (
    <section id="story" className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div className="flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            Our studio
          </p>
          <p className="hidden max-w-xs text-sm leading-6 text-slate-600 lg:block">
            A focused team of designers and developers, brought together by a belief in useful,
            lasting digital work.
          </p>
        </div>
        <div>
          <p className="text-3xl font-medium leading-[1.2] tracking-tight text-slate-800 sm:text-5xl sm:leading-[1.15]">
            We help good businesses become easier to understand, easier to trust, and easier to
            choose.
          </p>
          <div className="mt-12 grid gap-6 border-t border-[#a9c8bc] pt-6 sm:grid-cols-2">
            <p className="text-sm leading-6 text-slate-600">
              NexaStudio brings together the full journey: finding the right message, designing the
              experience, and building the final website with care.
            </p>
            <p className="text-sm leading-6 text-slate-600">
              Our process stays practical and collaborative. You get a committed creative partner,
              not a complicated agency process or a one-person handoff.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
