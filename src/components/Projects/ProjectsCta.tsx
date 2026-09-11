import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function ProjectsCta() {
  return (
    <section className="bg-[#315e56] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#bcd9cf]">
            Your project
          </p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-6xl">
            Let&apos;s make the next project the one people remember.
          </h2>
        </div>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#28564f] transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Tell us about it{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
