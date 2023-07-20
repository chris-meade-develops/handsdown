import NavigationComposer from "@/components/navigation";
import Hero from "@/components/hero";
import Section from "@/components/layout/Section";
import Form from "@/components/form";
import Intro from "@/components/intro";
import Classes from "@/components/cards/Classes";
import Heading from "@/components/ui/Heading";
import Pricing from "@/components/cards/Pricing";
import Review from "@/components/cards/Reviews";
import Carousel from "@/components/carousel/Carousel";
import Icons from "@/components/social/Icons";
import InstagramFeed from "@/components/social/InstagramFeed";
import Primary from "@/components/links/Primary";

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

const pricing = [
  {
    highlight: false,
    title: "1 session per week",
    pricing: "£50",
    description: "Works out at roughly £12.50 per class",
    footer: "Great for beginners or those looking to improve their fitness",
  },
  {
    highlight: true,
    title: "Unlimited",
    pricing: "£65",
    description:
      "Full access to set classes. Up to 21 hours of training available per month. from £3 per class",
    footer: "Our best seller! Intended to help you progress quickly",
  },
];

const reviews = [
  {
    review:
      "A great way to improve fitness, in a family friendly atmosphere. Progress at your pace with the support of the very experienced instructors.",
    name: "James Brown",
    description: "member for 4 years",
    image: "/images/James_Brown_headshot.jpeg",
  },
  {
    review:
      "A great way to improve fitness, in a family friendly atmosphere. Progress at your pace with the support of the very experienced instructors.",
    name: "James Brown",
    description: "member for 4 years",
    image: "/images/James_Brown_headshot.jpeg",
  },
  {
    review:
      "A great way to improve fitness, in a family friendly atmosphere. Progress at your pace with the support of the very experienced instructors.",
    name: "James Brown",
    description: "member for 4 years",
    image: "/images/James_Brown_headshot.jpeg",
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
          <div className="absolute w-full h-full opacity-10">
            <img
              src="/images/action_shot.jpg"
              className="object-cover object-[-242px_-30px] w-full h-full"
              alt="action shot"
            />
          </div>
          <Heading
            text="pricing programes"
            fill="fill-primary"
            textColour="text-white"
          >
            <h2
              className={`relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center text-white -translate-x-1/2 -translate-y-1/2 left-[34%] top-1/4 whitespace-nowrap`}
            >
              pricing programes
            </h2>
          </Heading>
          <p className="mb-20 text-base text-center text-primary font-open-sans opacity-80 min-w-[334px] mx-auto leading-7">
            We offer 2 different pricing programmes depending on your budget,
            training goals and time commitment.
          </p>

          {pricing.map((item, index) => (
            <Pricing key={index} {...item} />
          ))}
          <div className="h-25 w-[269px] mx-auto mb-14">
            <Primary href="/pricing">
              <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                learn more
              </span>
            </Primary>
          </div>
        </Section>
        <Section
          bgColor="bg-primary"
          className="relative pl-8 pr-10 text-base font-medium leading-7 bg-primary py-23 font-montserrat text-tertiary-text"
        >
          <Heading
            text="member's reviews"
            fill="fill-white"
            textColour="text-primary-text"
          >
            <h2
              className={`relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center text-primary-text -translate-x-1/2 -translate-y-1/2 left-[37%] top-1/4 whitespace-nowrap`}
            >
              member&#39;s reviews
            </h2>
          </Heading>
          <Carousel>
            {reviews.map((item, index) => (
              <Review key={index} {...item} />
            ))}
          </Carousel>
        </Section>
        <Section
          bgColor="bg-secondary"
          className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text"
        >
          <Heading
            text="book a trial class"
            fill="fill-primary"
            textColour="text-white"
          >
            <h2
              className={`relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center text-white -translate-x-1/2 -translate-y-1/2 left-[34%] top-1/4 whitespace-nowrap`}
            >
              book a trial class
            </h2>
          </Heading>
          <div className="text-center mb-13">
            Fill in the form below and we’ll be in touch to book you in to try
            one of our classes
          </div>
          <Form />
        </Section>
        <Section
          bgColor="bg-offBlack"
          className="relative pl-8 pr-10 text-base font-medium leading-7 bg-offBlack py-23 font-montserrat text-tertiary-text"
        >
          <Heading
            text="Follow us"
            fill="fill-white"
            textColour="text-primary-text"
          />
          <Icons />
          <InstagramFeed />
        </Section>
      </main>
    </div>
  );
}
