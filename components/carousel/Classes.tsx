import ClassesCard from '@/components/cards/ClassesCard'
import PrimaryLink from '@/components/links/PrimaryLink'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'
import getCarouselData from '@/helpers/getCarouselData'

const tiltMap = {
  '0': 'tilted-left',
  '1': 'tilted-right',
  '2': 'tilted-right',
  '3': 'tilted-left',
}

export default async function Classes() {
  const classesData = await getCarouselData('class')

  if(!classesData) return null

  const {
    title: heading,
    subTitle: subTitle,
    cards: data,
  } = classesData.data.attributes

  return (
    <Section
      bgColor="bg-primary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 md:px-40 bg-primary py-23 font-montserrat text-tertiary-text"
    >
      <Heading
        text={heading ?? "EXPLORE OUR OTHER CLASSES"}
        fill="fill-white"
        textColour="text-primary-text"
      />

      {subTitle && (
        <p className="mb-20 text-base text-center text-white font-open-sans opacity-80 w-[90%] mx-auto">
          {subTitle}
        </p>
      )}

      <div className="flex flex-col mx-auto md:flex md:flex-row md:justify-center md:gap-24 md:h-[456px]">
        {data.cards.map((item: ICard.WithImage, index: number) => (
          <div
            key={item.title}
            className={
              tiltMap[String(index) as keyof typeof tiltMap] + ' max-w-[272px]'
            }
          >
            <ClassesCard {...item} />
          </div>
        ))}
      </div>
      <div className="md:w-[305px] md:h-27 mx-auto mt-25 mb-20">
        <PrimaryLink href="/timetable">
          <span className="text-white">View Timetables</span>
        </PrimaryLink>
      </div>
    </Section>
  )
}
