'use client'
import Primary from '@/components/buttons/Primary'
import HeroBrush from '@/components/hero/HeroBrush'

export default function ClassesHero(heroData: ICms.Hero) {
  return (
    <section
      style={{
        backgroundImage: `url("${heroData.image.src}")`,
      }}
      className="relative w-full h-[638px] bg-no-repeat bg-center bg-cover pt-[185px] pb-50 z-0
      "
    >
      <div className="absolute top-0 w-full h-full bg-offBlack/50 z-2" />
      <div className="flex justify-center w-full">
        <div className="relative">
          <HeroBrush
            svgOne="absolute -top-[14px] sm:-top-[12px] h-[83px] sm:h-[147px]"
            svgTwo="absolute top-[46%] hidden sm:block "
            svgThree="absolute -bottom-[44px] sm:-bottom-[85px] sm:-left-[68px]"
            svgFour="absolute -bottom-[71px] rotate-180 left-[55px]"
            image={false}
            text={heroData}
          />
        </div>
      </div>
      <div className="w-[270px] h-25 mx-auto relative z-2 mt-20">
        <Primary
          type="button"
          onClick={() => {
            document
              .getElementById('#booking-form')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Book a trial class
        </Primary>
      </div>
    </section>
  )
}
