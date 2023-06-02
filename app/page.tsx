import NavigationComposer from "@/components/navigation";
import Hero from "@/components/hero";
import Section from "@/components/layout/section";
import Form from "@/components/form";

export default async function Home() {
  return (
    <div className="relative">
      <header>
        <NavigationComposer />
      </header>

      <main>
        <Hero />
        <Section
          bgColor="bg-secondary"
          className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text"
        >
          <div className="text-center mb-13">
            Fill in the form below and we’ll be in touch to book you in to try
            one of our classes
          </div>
          <Form />
        </Section>
      </main>
    </div>
  );
}
