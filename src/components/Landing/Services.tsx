import Link from "next/link";
import { ArrowUpRight, Code2, LayoutTemplate, PenTool } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Brand & digital direction",
    text: "Positioning, visual language, and a clear plan for what your website needs to achieve.",
  },
  {
    icon: LayoutTemplate,
    title: "Website design",
    text: "Distinct, intuitive interfaces that guide visitors from first impression to action.",
  },
  {
    icon: Code2,
    title: "Web development",
    text: "Responsive, high-quality builds that feel effortless to use and easy to grow with.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-[#4b857b]">What we do</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
            Everything your online presence needs to feel considered.
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]"
        >
          View all services{" "}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {services.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#a8c8bc] hover:shadow-lg hover:shadow-[#315e5420]"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#e5efeb] text-[#28564f]">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-7 text-lg font-semibold text-slate-800">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
