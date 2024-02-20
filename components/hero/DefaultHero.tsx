'use client'
import Primary from '@/components/buttons/Primary'
import { MeetTheFounders } from '@/icons'

export default function DefaultHero(heroData: ICms.Hero) {
  return (
    <section
      style={{
        backgroundImage: `url(${
          heroData.data.attributes.image.src.data.attributes.url ?? ''
        })`,
      }}
      className="relative w-full h-[595px] bg-no-repeat bg-cover pt-[135px] pb-50 z-0
    "
    >
      <div className="absolute top-0 w-full h-full bg-offBlack/50 z-2" />

      <div className="relative mx-auto mb-10 w-fit">
        <MeetTheFounders className="absolute w-[230%] max-w-[100vw] mx-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-3" />
        <h1 className=" text-4xl md:text-[42px] text-white font-montserrat z-3 relative md:leading-[100px] font-extrabold uppercase whitespace-nowrap mx-5">
          {heroData.data.attributes.title}
        </h1>
      </div>

      <div className="max-w-[565px] mx-auto px-10 md:px-0">
        <p className="relative text-sm font-medium leading-6 text-center text-white md:text-lg font-montserrat z-3">
          {heroData.data.attributes.description}
        </p>
      </div>
      <div className="w-[270px] h-25 mx-auto relative z-2 mt-20">
        <Primary
          type="button"
          onClick={() => {
            document
              .getElementById(`${heroData.data.attributes.link.address}`)
              ?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-sm font-bold leading-6 text-white uppercase md:text-base font-montserrat">
            {heroData.data.attributes.link.text}
          </span>
        </Primary>
      </div>
    </section>
  )
}
