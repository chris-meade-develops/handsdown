import Section from '@/components/section/Section'
import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import pricing from '@/temporary_data/callToAction/pricing'
import PricingCard from '@/components/cards/PricingCard'

export default function Pricing({ data }: { data: ICard.CallToAction[] }) {
  return (
    <Section
      bgColor="bg-secondary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text"
    >
      <div className="absolute w-full h-full opacity-10 md:top-0">
        <img
          src="/images/action_shot.jpg"
          className="object-cover object-[-242px_-30px] w-full h-full md:object-center "
          alt="action shot"
        />
      </div>
      <Heading
        text="pricing programes"
        fill="fill-primary"
        textColour="text-white"
      >
        <h2
          className={`relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center text-white -translate-x-1/2 -translate-y-1/2 left-[38%] top-1/4 whitespace-nowrap`}
        >
          pricing programes
        </h2>
      </Heading>
      <p className="mb-20 text-base text-center text-primary font-open-sans opacity-80 min-w-[334px] mx-auto leading-7 md:text-lg md:max-w-[664px]">
        We offer 2 different pricing programmes depending on your budget,
        training goals and time commitment.
      </p>
      <div className="flex flex-col md:flex-row md:gap-30 md:px-51 md:mb-34">
        {data.map((item, index) => (
          <PricingCard key={index} {...item} />
        ))}
      </div>
      <div className="h-25 w-[269px] md:w-[305px] md:h-[55px] mx-auto mb-14 z-1 relative">
        <PrimaryLink href="/pricing">
          <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
            learn more
          </span>
        </PrimaryLink>
      </div>
    </Section>
  )
}
