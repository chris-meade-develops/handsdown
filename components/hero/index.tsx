"use client"
import Primary from "../buttons/primary";

export default function Hero() {
  return (
    <div className="relative w-full h-[622px] xl:h-[792px] bg-hero-pattern bg-no-repeat bg-cover bg-[23%] xl:bg-center z-0 flex flex-col items-center justify-center">
      <div className="absolute top-0 w-full h-full bg-offBlack/50 z-2" />

      <div className=" w-[71%] mx-auto h-25 relative z-2">
        <Primary type="button" onClick={() => console.log("clicked")}>
          <span className="text-sm tracking-wide text-center uppercase text-secondary-text">
            book a trial class
          </span>
        </Primary>
      </div>
    </div>
  );
}
