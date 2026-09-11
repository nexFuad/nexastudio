import Hero from "@/components/Landing/Hero";
import Insights from "@/components/Landing/Insights";
import Process from "@/components/Landing/Process";
import Projects from "@/components/Landing/Projects";
import Services from "@/components/Landing/Services";
import Stats from "@/components/Landing/Stats";
import Testimonials from "@/components/Landing/Testimonials";
import Values from "@/components/Landing/Values";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Process />
      <Values />
      <Testimonials />
      <Insights />
    </>
  );
}
