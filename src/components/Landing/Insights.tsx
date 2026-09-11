import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  "What makes a small business website feel truly premium?",
  "Five signs it is time to rethink your digital presence.",
  "A clearer way to plan your next website project.",
];
export default function Insights() {
  return (
    <section className="border-t border-slate-200 bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#4b857b]">From the studio</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
              Ideas for building better online.
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-[#28564f]">
            Visit the blog
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={article}
              href="/blog"
              className="group rounded-xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-[#a8c8bc] hover:shadow-md"
            >
              <p className="text-xs font-semibold text-[#4b857b]">INSIGHT · 0{index + 1}</p>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-slate-800">{article}</h3>
              <ArrowRight className="mt-8 size-4 text-[#28564f] transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
