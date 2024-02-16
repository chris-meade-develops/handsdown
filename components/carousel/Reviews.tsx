import Section from '@/components/section/Section'
import Carousel from '@/components/carousel/Carousel'
import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import ReviewCard from '@/components/cards/ReviewCard'
import getCarouselData from '@/helpers/getCarouselData'
import SeeMoreReviews from '../ui/SeeMoreReviews'

export default async function Reviews({
  reverse,
}: {
  reverse?: boolean
}) {

  const reviewsData = await getCarouselData('review')
  const sectionBg = reverse ? 'bg-secondary' : 'bg-primary'
  const headingBg = reverse ? 'fill-primary' : 'fill-white'
  const headingText = reverse ? 'text-white' : 'text-primary-text'

  if(!reviewsData) return null

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
      <div className="mx-auto w-fit">
        <SeeMoreReviews {...reviewsData} />
      </div>
      <div className="md:hidden">
        <Carousel displayButtons={false} displayDots >
          {reviewsData.data.attributes.cards.cards.map((item, index) => (
            <div key={index * Math.random()} className="embla_slide flex-[0_0_100%] mb-19 h-full">
              <ReviewCard {...item} reverse={reverse} />
            </div>
          ))}
        </Carousel>
      </div>
    </Section>
  )
}
