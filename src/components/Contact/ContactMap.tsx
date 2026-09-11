export default function ContactMap() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            Where we are
          </p>
          <h2 className="mt-6 max-w-sm text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            Based in Dhaka. Working wherever good ideas are.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-slate-600">
            Our studio works with clients locally and remotely. Video calls, shared workshops, and
            clear communication keep every project close.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <iframe
            title="NexaStudio location in Dhaka"
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&z=12&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            className="block border-0 grayscale"
          />
        </div>
      </div>
    </section>
  );
}
