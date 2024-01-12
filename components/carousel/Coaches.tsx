import CoachCard from '@/components/cards/CoachCard'
import Carousel from '@/components/carousel/Carousel'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'
import getCarouselData from '@/helpers/getCarouselData'

export default async function Coaches({ reverse }: { reverse?: boolean}) {
  const coaches = await getCarouselData('coach')

  if (!coaches) return null
  if (!coaches.data.attributes.cards.cards.length) return null

  const options = {
    dragFree: true,
    watchResize: false,
    align: 'start',
    loop: false,
    startIndex: 0,
  }
  
  const { cards } = coaches.data.attributes.cards

  const sectionBgColor = reverse ? 'bg-secondary' : 'bg-primary'
  const headingColor = reverse ? 'text-white' : 'text-primary'
  const headingBgColor = reverse ? 'fill-primary' : 'fill-secondary'

  return (
    <Section
      bgColor={sectionBgColor}
      className={`pt-31 pb-43 ${sectionBgColor} relative`}
    >
      <Heading
        text="meet the coaches"
        fill={headingBgColor}
        textColour={headingColor}
      />
      <div className="relative max-h-[273px] ">
        <div className="px-45">
          <Carousel options={options} selectableChildren reverseColors>
            {cards.map((card, index) => (
              <CoachCard
                coach={card}
                key={`${card.image.alt} ${Math.random() * index}`}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  )
}
