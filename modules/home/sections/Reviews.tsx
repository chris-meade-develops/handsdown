import Section from '@/components/section/Section'
import Review from '@/components/cards/Reviews'
import Carousel from '@/components/carousel/Carousel'
import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import reviews from '@/temporary_data/carousels/reviews'

export default function Reviews() {
  return (
    <Section
      bgColor="bg-primary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 md:px-23 bg-primary py-23 font-montserrat text-tertiary-text"
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
      <div className="hidden grid-cols-3 md:grid gap-11">
        {reviews.map((item, index) => (
          <div key={index} className="max-w-[436px]">
            <Review {...item} />
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
          {reviews.map((item, index) => (
            <div key={index} className="embla_slide flex-[0_0_100%] mb-19">
              <Review {...item} />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}
