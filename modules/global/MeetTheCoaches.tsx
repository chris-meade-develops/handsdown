import CoachCard from '@/components/cards/CoachCard'
import Carousel from '@/components/carousel/Carousel'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'

export default function MeetTheCoaches({
  coaches,
  reverse,
}: {
  coaches: ICard.WithImage[]
  reverse?: boolean
}) {
  const options = {
    dragFree: true,
    watchResize: false,
    align: 'start',
    loop: true,
    startIndex: 0,
  }

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
            {coaches.map((coach, index) => (
              <CoachCard
                coach={coach}
                key={`${coach.image.alt} ${Math.random() * index}`}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  )
}
