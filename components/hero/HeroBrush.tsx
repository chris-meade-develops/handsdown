import { TakeYourself, ToThe, NextLevel } from '../../icons'



export default function HeroBrush({
  svgOne,
  svgTwo,
  svgThree,
  svgFour,
}: IHero.Brush) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full z-2 xl:mb-11">
      <TakeYourself className={svgOne} />
      <ToThe className={svgTwo} />
      <NextLevel className={svgThree} />
      <NextLevel className={svgFour} />

      <img
        src="/images/TakeYourselfTotheNextLevel.png"
        className="h-auto z-2 md:h-55 md:w-[615px] w-[300px]"
        alt="Take yourself to the next level "
      />
    </div>
  )
}
