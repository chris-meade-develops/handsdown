import Carousel from '@/components/carousel/Carousel'
import Section from '@/components/section/Section'
import Heading from '@/components/ui/Heading'
import Image from 'next/image'


export default function LatestGraduates({
  heading,
  graduates,
}: {
  heading: string
  graduates: ICard.WithImage[]
}) {
  const OPTIONS = {
    dragFree: true,
    watchResize: false,
    loop: true,
    startIndex: Math.floor(graduates.length / 2)
  }
  return (
    <Section
      bgColor="bg-secondary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text"
    >
      <Heading text={heading} fill="fill-black" textColour="text-white" />

      <div className="relative">
        <div className="px-45">
          <Carousel displayButtons options={OPTIONS}>
            {graduates.map((grad, index) => (
              <div
                key={`${grad.image.alt} ${Math.random() * index}`}
                className="embla_slide flex-[0_0_auto] mx-7"
              >
                <Image
                  width={291}
                  height={291}
                  src={grad.image.src}
                  alt={grad.image.alt}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  )
}
