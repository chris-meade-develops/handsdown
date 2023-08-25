import Primary from '../links/PrimaryLink'
import HeroBrush from './HeroBrush'

export default function ClassesHero(heroData: ICms.Hero) {
  return (
    <section
      style={{
        backgroundImage: `url(${heroData.image})`,
      }}
      className="relative w-full h-[521px] bg-no-repeat bg-cover pt-43 pb-50
      "
    >
      <div className="absolute top-0 w-full h-full bg-offBlack/50 z-2" />
      <div className="flex justify-center w-full">
        <div className="relative">
          <HeroBrush
            svgOne="absolute -top-[14px] sm:-top-[12px] h-[83px] sm:h-[147px]"
            svgTwo="absolute top-[46%] hidden sm:block "
            svgThree="absolute -bottom-[44px] sm:-bottom-[85px] sm:-left-[47px]"
            svgFour="absolute -bottom-[68px] rotate-180 sm:hidden"
          />
        </div>
      </div>
      <div className="w-[270px] h-25 mx-auto">
        <Primary href="#booking-form">Book a trial class</Primary>
      </div>
    </section>
  )
}
