import Kalon from '@/components/ui/Kalon'
import Section from '../section/Section'
import Heading from '../ui/Heading'
import Michael from '@/components/ui/Michael'
import PrimaryLink from '../links/PrimaryLink'

export default function Intro(data: ICms.DynamicComponents) {
  const text = data.text.split('\n')

  return (
    <Section
      bgColor="bg-secondary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 md:pt-40 md:pb-43 font-montserrat text-tertiary-text"
    >
      <div className="md:bg-[url('/images/Grunge_texture.png')] max-w-[100%] overflow-x-hidden overflow-hidden">
        <Heading
          text={data.title}
          fill="fill-primary"
          textColour="text-white"
        />
        <div className="md:max-w-[802px] mx-auto md:mt-15">
          {text.map((item: string, index: number) => (
            <p
              key={index * data.id}
              className="mb-10 text-lg font-normal leading-9 text-center font-montserrat text-primary-text md:text-[21px] md:leading-[40px]"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="h-25 w-[270px] mx-auto mt-15 mb-40">
          <PrimaryLink href={data.link.address}>{data.link.text}</PrimaryLink>
        </div>
        <Kalon />
        <Michael />
      </div>
    </Section>
  )
}
