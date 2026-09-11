import { Code2, Compass, LayoutTemplate } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Compass,
    title: "Digital strategy",
    description:
      "A clear starting point for your website—built around audience needs, content priorities, and business goals.",
    items: ["Discovery workshops", "Website strategy", "Content structure"],
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Brand & web design",
    description:
      "A distinctive visual system and intuitive interface that make your business feel recognisable and easy to choose.",
    items: ["Visual direction", "UX & UI design", "Responsive layouts"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Development & launch",
    description:
      "Thoughtfully built frontend experiences that perform across devices and give your team a strong, flexible foundation.",
    items: ["Next.js development", "Performance checks", "Launch support"],
  },
];

export default function ServiceList() {
  return (
    <section id="services" className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            What we offer
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
            One studio, every essential part of your digital presence.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-[#a9c8bc] border-y border-[#a9c8bc]">
          {services.map(({ number, icon: Icon, title, description, items }) => (
            <article
              key={number}
              className="grid gap-5 py-8 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_1.1fr_1fr_0.8fr] lg:items-start lg:gap-8 lg:py-10"
            >
              <span className="text-sm font-semibold text-[#4b857b]">{number}</span>
              <div>
                <span className="flex size-10 items-center justify-center rounded-full bg-white text-[#28564f]">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-800">
                  {title}
                </h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">{description}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#4b857b]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
