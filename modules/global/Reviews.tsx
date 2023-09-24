import Section from '@/components/section/Section'
import Carousel from '@/components/carousel/Carousel'
import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import ReviewCard from '@/components/cards/ReviewCard'

export default function Reviews({
  data,
  reverse,
}: {
  data: ICard.WithImage[]
  reverse?: boolean
}) {
  const sectionBg = reverse ? 'bg-secondary' : 'bg-primary'
  const headingBg = reverse ? 'fill-primary' : 'fill-white'
  const headingText = reverse ? 'text-white' : 'text-primary-text'
  return (
    <Section
      bgColor={sectionBg}
      className={`relative pl-8 pr-10 text-base font-medium leading-7 md:px-23 py-23 font-montserrat text-tertiary-text ${sectionBg}`}
    >
      <Heading
        text="member's reviews"
        fill={headingBg}
        textColour={headingText}
      />
      <div className="hidden grid-cols-3 md:grid gap-11">
        {data.map((item, index) => (
          <div key={index} className="max-w-[436px]">
            <ReviewCard {...item} reverse={reverse} />
          </div>
        ))}
      </div>
      <div className="hidden md:block mx-auto max-w-[305px] h-[55px] mt-40 mb-15">
        <PrimaryLink href="/reviews">
          <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
            read more
          </span>
        </PrimaryLink>
      </div>
      <div className="md:hidden">
        <Carousel>
          {data.map((item, index) => (
            <div key={index} className="embla_slide flex-[0_0_100%] mb-19">
              <ReviewCard {...item} reverse={reverse} />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}
