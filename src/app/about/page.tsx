import AboutCta from "@/components/About/AboutCta";
import AboutHero from "@/components/About/AboutHero";
import StudioStory from "@/components/About/StudioStory";
import StudioValues from "@/components/About/StudioValues";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StudioStory />
      <StudioValues />
      <AboutCta />
    </>
  );
}
