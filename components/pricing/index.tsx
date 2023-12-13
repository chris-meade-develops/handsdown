import Section from '@/components/section/Section'
import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import PricingCard from '@/components/cards/PricingCard'

export default function Pricing(data: ICms.DynamicComponents) {
  const pricingCards = data.pricingCards
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
      <Heading text={data.title} fill="fill-primary" textColour="text-white" />
      <p className="mb-20 text-base text-center text-primary font-open-sans opacity-80 min-w-[334px] mx-auto leading-7 md:text-lg md:max-w-[664px]">
        {data.subTitle}
      </p>
      <div className="flex flex-col md:flex-row md:gap-30 md:px-51 md:mb-34">
        {pricingCards.map((item: ICard.CallToAction , index: number) => (
          <PricingCard key={item.id} {...item} />
        ))}
      </div>
      <div className="h-25 w-[269px] md:w-[305px] md:h-[55px] mx-auto mb-14 z-1 relative">
        <PrimaryLink href={data.link.address}>
          <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
            {data.link.text}
          </span>
        </PrimaryLink>
      </div>
    </Section>
  )
}
