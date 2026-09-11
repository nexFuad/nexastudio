import ProjectsApproach from "@/components/Projects/ProjectsApproach";
import ProjectsCta from "@/components/Projects/ProjectsCta";
import ProjectsHero from "@/components/Projects/ProjectsHero";
import ProjectsShowcase from "@/components/Projects/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsShowcase />
      <ProjectsApproach />
      <ProjectsCta />
    </>
  );
}
