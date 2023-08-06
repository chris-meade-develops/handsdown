import { TakeYourself, ToThe, NextLevel } from "../../icons";
import Image from "next/image";

interface HeroBrushProps {
  svgOne: string;
  svgTwo: string;
  svgThree: string;
}

export default function HeroBrush({
  svgOne,
  svgTwo,
  svgThree,
}: HeroBrushProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full z-2 xl:mb-11">
      <TakeYourself className={svgOne} />
      <ToThe className={svgTwo} />
      <NextLevel className={svgThree} />
      
      <Image src="/images/TakeYourselfTotheNextLevel.png" className="h-auto z-2 " alt="Take yourself to the next level" width={615} height={200} />
    </div>
  );
}
