import ClassesCard from '@/components/cards/ClassesCard'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'

export default function Classes(data: ICard.WithImage[]) {
  return (
    <Section
      bgColor="bg-primary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 md:px-40 bg-primary py-23 font-montserrat text-tertiary-text"
    >
      <Heading
        text="Our classes"
        fill="fill-white"
        textColour="text-primary-text"
      />

      <p className="mb-20 text-base text-center text-white font-open-sans opacity-80 w-[90%] mx-auto">
        We offer classes for 4 different age groups with a focus on progression
        across both Epsom and Cobham.
      </p>

      <div className="flex flex-col md:grid md:grid-cols-4 md:gap-24">
        {data.map((item, index) => (
          <ClassesCard key={index} {...item} />
        ))}
      </div>
    </Section>
  )
}
