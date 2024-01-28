export default function PricingCard({
  highlight,
  title,
  action,
  description,
  footer,
}: ICard.CallToAction) {
  return (
    <div className="w-full rounded-[15px] relative overflow-hidden flex flex-col justify-between mb-19 md:mb-0 bg-white">
      <div className="relative flex-col justify-center w-full text-center pt-25 md:pt-28 px-17 font-montserrat">
        {highlight && (
          <div className="absolute top-0 z-0 py-4 text-white capitalize -translate-x-1/2 border-b-2 left-1/2 px-14 border-accent bg-primary-text">
            <span className="text-sm font-semibold leading-[18px] ">
              best value
            </span>
          </div>
        )}
        <h3 className="mt-8 mb-5 text-xl font-bold leading-5 text-center capitalize md:text-xl text-primary-text md:mb-9">
          {title}
        </h3>
        <div className="flex items-end justify-center text-primary-text md:mb-14">
          <span className="text-5xl md:text-[51px] font-semibold ">
            {action}
          </span>
          <span className="text-xl font-medium md:text-2xl">/month</span>
        </div>
        <p className="mt-8 text-base font-semibold text-center mb-9 text-primary-text">
          {description}
        </p>
      </div>
      <div className="w-full text-base font-medium leading-5 text-center text-white border-t-2 bg-primary-text font-futura border-accent px-18 pt-9 md:py-12 pb-7">
        <p>{footer}</p>
      </div>
    </div>
  )
}
