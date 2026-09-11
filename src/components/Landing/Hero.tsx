import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(circle_at_75%_15%,#d9ebe4,transparent_35%),radial-gradient(circle_at_15%_45%,#edf4f0,transparent_30%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#bad4ca] bg-[#edf5f1] px-3 py-1.5 text-xs font-semibold tracking-wide text-[#28564f]">
            <Sparkles className="size-3.5" /> Digital design & development studio
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-slate-800 sm:text-6xl lg:text-7xl">
            Websites with clarity, character, and momentum.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            NexaStudio partners with ambitious brands to turn ideas into polished digital
            experiences that are built to connect and grow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d5d57] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#234a45] hover:shadow-md"
            >
              Start a project{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#80a99f] hover:bg-white"
            >
              Explore our work
            </Link>
          </div>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {["Strategy-led", "Built to perform", "Designed to last"].map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-white/80 bg-white/60 p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-xs font-semibold text-[#4b857b]">0{index + 1}</span>
              <p className="mt-4 text-base font-medium text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
