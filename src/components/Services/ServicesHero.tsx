import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="border-b border-slate-200 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
          Services · NexaStudio
        </p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-slate-800 sm:text-7xl lg:text-8xl">
            The strategy, design, and build behind a better website.
          </h1>
          <div className="border-l-2 border-[#80a99f] pl-5 sm:pl-6">
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              From a new direction to a complete launch, we bring the right creative and technical
              thinking into one connected process.
            </p>
            <Link
              href="#services"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]"
            >
              Explore our services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
