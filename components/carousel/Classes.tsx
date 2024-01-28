import ClassesCard from '@/components/cards/ClassesCard'
import PrimaryLink from '@/components/links/PrimaryLink'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'
import getCarouselData from '@/helpers/getCarouselData'

const tiltMap = {
  '0': 'sm:tilted-left',
  '1': 'sm:tilted-right',
  '2': 'sm:tilted-right',
  '3': 'sm:tilted-left',
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
        text={heading ?? "OUR CLASSES"}
        fill="fill-white"
        textColour="text-primary-text"
      />

      {subTitle && (
        <p className="mb-20 text-base text-center text-white font-open-sans opacity-80 w-[90%] mx-auto">
          {subTitle}
        </p>
      )}

      <div className="flex flex-col flex-wrap items-center justify-center mx-auto sm:flex sm:flex-row sm:gap-24 ">
        {data.cards.map((item: ICard.WithImage, index: number) => (
          <div
            key={item.title}
            className={
              tiltMap[String(index) as keyof typeof tiltMap] + ' w-full sm:max-w-[272px] h-[314px] sm:h-[456px] mb-27'
            }
          >
            <ClassesCard {...item} />
          </div>
        ))}
      </div>
      <div className="w-[305px] h-27 mx-auto mt-25 mb-20 hidden sm:block">
        <PrimaryLink href="/timetable">
          <span className="text-white">View Timetables</span>
        </PrimaryLink>
      </div>
    </Section>
  )
}
