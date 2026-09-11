import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  { title: "Northline", type: "Architecture & interiors", color: "from-[#dcece5] to-[#aac9ba]" },
  { title: "Aster & Co.", type: "Modern lifestyle brand", color: "from-[#f1e8dc] to-[#d5baa3]" },
  { title: "Morrow", type: "Sustainable food company", color: "from-[#dce8ee] to-[#a9c2ce]" },
];

export default function Projects() {
  return (
    <section className="bg-[#eaf1ee] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-[#4b857b]">Selected work</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
          Digital spaces made for real-world growth.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.title} href="/projects" className="group block">
              <div
                className={`flex aspect-4/3 items-end rounded-2xl bg-linear-to-br p-6 ${project.color} transition-transform duration-300 group-hover:-translate-y-2`}
              >
                <div className="rounded-xl bg-white/80 px-4 py-3 backdrop-blur">
                  <p className="font-semibold text-slate-800">{project.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{project.type}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/projects"
          className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]"
        >
          See all projects{" "}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
