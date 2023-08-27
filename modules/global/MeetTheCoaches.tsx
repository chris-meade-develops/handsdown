import CoachCard from '@/components/cards/CoachCard'
import Carousel from '@/components/carousel/Carousel'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'

export default function MeetTheCoaches({
  coaches,
}: {
  coaches: ICard.WithImage[]
}) {
  const options = {
    dragFree: true,
    watchResize: false,
    align: 'start',
    loop: true,
    startIndex: 0,
  }

  return (
    <Section bgColor="bg-primary" className=" pt-31 pb-43">
      <Heading
        text="meet the coaches"
        fill="fill-white"
        textColour="text-primary"
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
