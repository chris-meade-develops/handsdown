'use client'
import { HeroLogo } from '@/icons'
import Primary from '../buttons/Primary'
import HeroBrush from './HeroBrush'

export default function Hero() {
  return (
    <section className="relative w-full bg-hero-pattern bg-no-repeat bg-cover bg-[23%] sm:bg-center z-0 flex flex-col items-center justify-between pt-[115px] pb-50 sm:pt-48 sm:pb-51 sm:bg">
      <div className="absolute top-0 w-full h-full bg-offBlack/50 z-2" />

      <HeroLogo className="h-auto z-3 w-52 sm:w-[226px] mb-16" />

      <HeroBrush
        svgOne="absolute -top-[14px] sm:-top-[12px] h-[83px] sm:h-[147px]"
        svgTwo="absolute top-[46%] hidden sm:block "
        svgThree="absolute -bottom-[44px] sm:-bottom-[85px] sm:-left-[47px]"
        svgFour="absolute -bottom-[68px] rotate-180 sm:hidden"
      />

      <h1 className="text-white font-montserrat text-base uppercase font-extrabold leading-[22px] max-w-[220px] sm:max-w-none z-2 mb-9 mt-31 sm:text-xl sm:leading-6 sm:font-extrabold sm:whitespace-nowrap ">
        Surrey&apos;s world class martial arts academy
      </h1>

      <div className="w-[71%] sm:w-[301px] h-[55px] mx-auto relative z-2">
        <Primary
          type="button"
          onClick={() => {
            document
              .getElementById('#booking-form')
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="flex items-center justify-center text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text sm:text-base sm:tracking-widest">
            book a trial class
          </span>
        </Primary>
      </div>
    </section>
  )
}
