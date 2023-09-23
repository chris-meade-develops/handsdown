'use client'
import Primary from '@/components/buttons/Primary'
import { MeetTheFounders, TakeYourself } from '@/icons'

export default function AboutHero(heroData: ICms.Hero) {
  return (
    <section
      style={{
        backgroundImage: `url("${heroData.image.src}")`,
      }}
      className="relative w-full h-[595px] bg-no-repeat bg-cover pt-[135px] pb-50 z-0
    "
    >
      <div className="absolute top-0 w-full h-full bg-offBlack/50 z-2" />

      <div className="relative">
        <MeetTheFounders className="w-9/12 mx-auto" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 text-[42px] text-white font-montserrat z-3 -translate-y-1/2 leading-[100px] font-extrabold uppercase ">
          {heroData.title}
        </h1>
      </div>

      <div className="max-w-[565px] mx-auto">
        <p className="relative text-lg font-medium leading-6 text-center text-white font-montserrat z-3">
          {heroData.description}
        </p>
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
          <span className="text-base font-bold leading-6 text-white uppercase font-montserrat">
            Book a trial class
          </span>
        </Primary>
      </div>
    </section>
  )
}
