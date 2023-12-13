import Carousel from '@/components/carousel/Carousel'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'
import getGraduatesData from '@/helpers/getCarouselData'
import Image from 'next/image'

export default async function Graduates() {
  const graduates = await getGraduatesData('graduate')

  if (!graduates) return null

  const { cards } = graduates.data.attributes.cards
  const { heading } = graduates.data.attributes

  if (!cards.length) return null

  const startIndex = Math.floor(cards.length / 2)

  const OPTIONS = {
    dragFree: true,
    watchResize: false,
    loop: true,
    startIndex,
  }

  return (
    <Section
      bgColor="bg-secondary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text"
    >
      <Heading
        text={heading ?? 'Latest Graduates'}
        fill="fill-black"
        textColour="text-white"
      />

      <div className="relative">
        <div className="px-45">
          <Carousel displayButtons options={OPTIONS}>
            {cards.map((cards, index) => (
              <div
                key={`${cards.image.alt} ${Math.random() * index}`}
                className="embla_slide flex-[0_0_auto] mx-7"
              >
                {cards.image.src.data.attributes.url && (
                  <Image
                    width={291}
                    height={291}
                    src={cards.image.src.data.attributes.url}
                    alt={cards.image.alt}
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  )
}
