const testimonials = [
  {
    quote:
      "NexaStudio gave us a website that finally feels like our business. The process was clear, collaborative, and genuinely enjoyable.",
    name: "Maya Rahman",
    role: "Founder, Northline",
  },
  {
    quote:
      "They combined strategic thinking with beautiful execution. We launched with a level of confidence we had never felt before.",
    name: "Elliot Chen",
    role: "Director, Morrow",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <p className="text-sm font-semibold text-[#4b857b]">Client notes</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
        Trusted by people building meaningful things.
      </h2>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9"
          >
            <blockquote className="text-xl leading-8 tracking-tight text-slate-700">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-8 border-t border-slate-100 pt-5">
              <p className="text-sm font-semibold text-slate-800">{item.name}</p>
              <p className="mt-1 text-sm text-slate-500">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
