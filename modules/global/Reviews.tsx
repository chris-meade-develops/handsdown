import Section from '@/components/section/Section'
import Carousel from '@/components/carousel/Carousel'
import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import ReviewCard from '@/components/cards/ReviewCard'

export default function Reviews({ data }: { data: ICard.WithImage[] }) {
  return (
    <Section
      bgColor="bg-primary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 md:px-23 bg-primary py-23 font-montserrat text-tertiary-text"
    >
      <Heading
        text="member's reviews"
        fill="fill-white"
        textColour="text-primary-text"
      />
      <div className="hidden grid-cols-3 md:grid gap-11">
        {data.map((item, index) => (
          <div key={index} className="max-w-[436px]">
            <ReviewCard {...item} />
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
              <ReviewCard {...item} />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}
