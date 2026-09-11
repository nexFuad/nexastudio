"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { projectsData } from "@/Data/projectsData";
import Pagination from "@/components/Shared/Pagination";

const projectsPerPage = 6;

export default function ProjectsShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const displayedProjects = projectsData.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage,
  );
  const changePage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("project-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="project-grid"
      className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 sm:text-5xl">
              A closer look at the work.
            </h2>
          </div>
          <p className="text-sm text-slate-500">{projectsData.length} selected projects</p>
        </div>
        <div className="mt-12 space-y-12 lg:space-y-16">
          {displayedProjects.map((project, index) => {
            const isReversed = ((currentPage - 1) * projectsPerPage + index) % 2 === 1;

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group grid overflow-hidden border-y border-[#b7d1c7] transition-all duration-300 hover:border-[#709b8e] lg:min-h-120 lg:grid-cols-[0.95fr_1.05fr]"
              >
                <div
                  className={`relative aspect-16/10 overflow-hidden lg:aspect-auto lg:min-h-120 ${isReversed ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} project`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`flex flex-col justify-between p-7 sm:p-10 lg:p-14 ${isReversed ? "lg:order-1" : ""}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4b857b]">
                        {project.category} · {project.year}
                      </p>
                      <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-5 shrink-0 text-[#28564f] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <div className="mt-8">
                    <p className="max-w-xl text-lg leading-8 text-slate-700">{project.summary}</p>
                    <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-end justify-between gap-5 border-t border-[#b7d1c7] pt-5">
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-slate-500">
                      {project.services.slice(0, 2).map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]">
                      View case study{" "}
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={changePage} />
      </div>
    </section>
  );
}
