import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/Data/projectsData";

const selectedProjects = projectsData.slice(0, 3);

export default function Projects() {
  return (
    <section className="bg-[#eaf1ee] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold text-[#4b857b]">Selected work</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
          Digital spaces made for real-world growth.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {selectedProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} className="group block">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-slate-950/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                      {project.category}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">{project.title}</p>
                  </div>
                  <span className="text-xs font-medium text-white/80">{project.year}</span>
                </div>
                <div className="sr-only">
                  <p className="font-semibold text-slate-800">{project.title}</p>
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
