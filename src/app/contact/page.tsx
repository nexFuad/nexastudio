import ContactFaq from "@/components/Contact/ContactFaq";
import ContactForm from "@/components/Contact/ContactForm";
import ContactHero from "@/components/Contact/ContactHero";
import ContactMap from "@/components/Contact/ContactMap";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactFaq />
    </>
  );
}
