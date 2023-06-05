import { HeadingBrush } from "@/icons";
import Primary from "../links/primary";

export default function Intro() {
  return (
    <div>
      <div className="relative w-4/5 h-40 mx-auto">
        <HeadingBrush className="absolute z-0 w-full h-full -translate-x-1/2 -translate-y-1/2 left-[54%] top-[29%] fill-primary min-w-[340px]" />
        <h2 className=" relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4 ">
          who we are
        </h2>
      </div>

      <p className="text-lg font-normal leading-9 text-center font-montserrat text-primary-text">
        Hands Down is a family run martial arts club in Surrey set up by
        brothers Michael and Kalon Page, two high achieving martial arts
        pedigrees. <br /> <br /> We offer elite training classes at our
        academies in Epsom and Cobham led by highly accredited and world
        champion coaches for students of all ages, abilities and training goals
        .
      </p>

      <div className="h-25 w-[270px] mx-auto mt-15 mb-43">
        <Primary href="/about">
          <span className="font-montserrat font-extrabold text-white text-lg leading-[1.4px] uppercase">
            Read our story
          </span>
        </Primary>
      </div>
    </div>
  );
}
