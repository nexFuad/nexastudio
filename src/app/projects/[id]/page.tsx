import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectById, projectsData } from "@/Data/projectsData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projectsData.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) notFound();

  return (
    <>
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#28564f]"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" /> All
            projects
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
                {project.category} · {project.year}
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-slate-800 sm:text-7xl">
                {project.title}
              </h1>
            </div>
            <p className="border-l-2 border-[#80a99f] pl-5 text-lg leading-8 text-slate-600">
              {project.summary}
            </p>
          </div>
          <div className="relative mt-14 aspect-[16/8] overflow-hidden rounded-3xl">
            <Image
              src={project.image}
              alt={`${project.title} project`}
              fill
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#eaf1ee] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
            Project overview
          </p>
          <div>
            <p className="max-w-2xl text-2xl leading-9 tracking-tight text-slate-800 sm:text-3xl sm:leading-10">
              {project.description}
            </p>
            <div className="mt-12 grid gap-7 border-t border-[#a9c8bc] pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
                  Services
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {project.services.map((service) => (
                    <li key={service}>— {service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4b857b]">
                  Outcome
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-600">{project.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#315e56] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Have a project with a similar ambition?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#28564f] transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Start a conversation{" "}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
