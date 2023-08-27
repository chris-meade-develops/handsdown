import { TakeYourself, ToThe, NextLevel } from '../../icons'

export default function HeroBrush({
  svgOne,
  svgTwo,
  svgThree,
  svgFour,
  image = true,
}: IHero.Brush) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full z-2 xl:mb-11">
      <TakeYourself className={svgOne} />
      <ToThe className={svgTwo} />
      <NextLevel className={svgThree} />
      <NextLevel className={svgFour} />

      {image ? (
        <img
          src="/images/TakeYourselfTotheNextLevel.png"
          className="h-auto z-2 md:h-55 md:w-[615px] w-[300px]"
          alt="Take yourself to the next level "
        />
      ) : (
        <div className="h-auto z-2 md:h-55 md:w-[615px] w-[300px]">
          <h1 className=" text-[42px] leading-[100px] font-bold text-center text-white uppercase ">
            HD Dragons
          </h1>
          <h2 className="text-2xl font-bold text-center text-white uppercase md:text-3xl">
            Ages 5+
          </h2>
          <p className="text-base leading-[26px] align-baseline mt-14">
            Our youngest age group class designed to introduce your child to the
            fundamentals of martial arts as well as cultivating discipline and
            life skill that will benefit all aspects of life.
          </p>
        </div>
      )}
    </div>
  )
}
