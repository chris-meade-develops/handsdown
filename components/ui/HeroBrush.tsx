import { TakeYourself, ToThe, NextLevel } from "../../icons";
import Image from "../ui/image";

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
    <div className="relative flex flex-col items-center justify-center z-2 w-full h-[104px]">
      <TakeYourself className={svgOne} />
      <ToThe className={svgTwo} />
      <NextLevel className={svgThree} />
      <div className="absolute w-full h-full">
        <Image
          src="/images/TakeYourselfTotheNextLevel.png"
          className="h-auto  z-2"
          alt="take yourself to the next level"
        />
      </div>
    </div>
  );
}
