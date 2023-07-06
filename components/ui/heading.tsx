import { HeadingBrush } from "@/icons";

interface iHeading {
  text: string;
  fill: string;
  textColour: string;
}

export default function Heading({ text, fill, textColour }: iHeading) {
  return (
    <div className="relative w-4/5 h-40 mx-auto">
      <HeadingBrush
        className={`absolute z-0 w-full h-full -translate-x-1/2 -translate-y-1/2 left-[54%] top-[29%] min-w-[340px] ${fill}`}
      />
      <h2
        className={`relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center ${textColour} -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/4`}
      >
        {text}
      </h2>
    </div>
  );
}
