import NavigationComposer from "@/components/navigation";
import Hero from "@/components/hero";
import Section from "@/components/layout/section";
import Form from "@/components/form";
import Intro from "@/components/intro";
import Classes from "@/components/cards/classes";
import Heading from "@/components/ui/heading";

const classes = [
  {
    title: "HD Dragons",
    description: "(Ages 5 - 6)",
    image: "/images/happy.jpg",
    alt: "HD Dragons",
    link: "/classes/dragons",
  },
  {
    title: "Children",
    description: "(Ages 5 - 6)",
    image: "/images/children.jpg",
    alt: "Children",
    link: "/classes/children",
  },
  {
    title: "Juniors",
    description: "(Ages 5 - 6)",
    image: "/images/juniors.jpg",
    alt: "Juniors",
    link: "/classes/juniors",
  },
  {
    title: "Adults",
    description: "(Ages 5 - 6)",
    image: "/images/michael-grading.jpg",
    alt: "Adults",
    link: "/classes/adults",
    imgPosition: "top center",
  },
];

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
          <Intro />
        </Section>
        <Section
          bgColor="bg-primary"
          className="relative pl-8 pr-10 text-base font-medium leading-7 bg-primary py-23 font-montserrat text-tertiary-text"
        >
          <Heading
            text="Our classes"
            fill="fill-white"
            textColour="text-primary-text"
          />


          <p className="mb-20 text-base text-center text-white font-open-sans opacity-80 w-[90%] mx-auto">
            We offer classes for 4 different age groups with a focus on
            progression across both Epsom and Cobham.
          </p>

          {classes.map((item, index) => (
            <Classes key={index} {...item} />
          ))}
        </Section>
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
