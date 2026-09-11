import ServiceList from "@/components/Services/ServiceList";
import ServiceProcess from "@/components/Services/ServiceProcess";
import ServicesCta from "@/components/Services/ServicesCta";
import ServicesHero from "@/components/Services/ServicesHero";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceList />
      <ServiceProcess />
      <ServicesCta />
    </>
  );
}
