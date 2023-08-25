import { HeadingBrush } from "@/icons";

interface iHeading {
  text: string;
  fill: string;
  textColour: string;
  children?: React.ReactNode;
}

export default function Heading({
  text,
  fill,
  textColour,
  children,
}: iHeading) {
  return (
    <div className="relative w-4/5 h-40 mx-auto mt-35">
      <HeadingBrush
        className={`absolute z-0 w-full h-full -translate-x-1/2 -translate-y-1/2 left-1/2 min-w-[340px] ${fill}`}
      />
      {children ? (
        children
      ) : (
        <h2
          className={`relative z-1 uppercase font-montserrat font-extrabold text-xl leading-6 text-center ${textColour} -translate-x-1/2 -translate-y-1/2 left-1/2 whitespace-nowrap md:text-2xl`}
        >
          {text}
        </h2>
      )}
    </div>
  );
}
