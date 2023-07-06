interface PricingProps {
  highlight: boolean;
  title: string;
  pricing: string;
  description: string;
  footer: string;
}

export default function Pricing({
  highlight,
  title,
  pricing,
  description,
  footer,
}: PricingProps) {
  return (
    <div className="w-full rounded-[15px] relative overflow-hidden flex flex-col mb-19">
      <div className="relative flex-col justify-center w-full text-center bg-white pt-25 px-17 font-montserrat">
        {highlight && (
          <div className="absolute top-0 z-0 py-4 text-white capitalize -translate-x-1/2 border-b-2 left-1/2 px-14 border-accent bg-primary-text">
            <span className="text-sm font-semibold leading-[18px] ">
              best value
            </span>
          </div>
        )}
        <h3 className="mt-8 mb-5 text-xl font-bold leading-5 text-center capitalize text-primary-text">
          {title}
        </h3>
        <div className="flex items-end justify-center text-primary-text">
          <span className="text-5xl font-semibold ">{pricing}</span>
          <span className="text-xl font-medium ">/month</span>
        </div>
        <p className="mt-8 text-base font-semibold text-center mb-9 text-primary-text">
          {description}
        </p>
      </div>
      <div className="w-full text-base font-medium leading-5 text-center text-white border-t-2 bg-primary-text font-futura border-accent px-18 pt-9 pb-7">
        <p>{footer}</p>
      </div>
    </div>
  );
}
