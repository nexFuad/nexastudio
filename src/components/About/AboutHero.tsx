import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
          <span>About NexaStudio</span>
          <span>Independent digital studio · Est. 2018</span>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-slate-800 sm:text-7xl lg:text-8xl">
            Better websites begin with better questions.
          </h1>
          <div className="border-l-2 border-[#80a99f] pl-5 sm:pl-6">
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              NexaStudio is the creative and technical partner for businesses that want a clearer,
              stronger, more useful online presence.
            </p>
            <Link
              href="#story"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]"
            >
              See how we work{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 border-t border-slate-200 pt-5 text-sm text-slate-500 sm:grid-cols-4">
          {["Strategy", "Brand direction", "Web design", "Development"].map((item, index) => (
            <div key={item} className="flex gap-2 py-2">
              <span className="text-[#4b857b]">0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
