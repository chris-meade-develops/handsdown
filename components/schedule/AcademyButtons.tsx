'use client'

export default function AcademyButtons({
  academies,
  buttonState,
  handleClick,
}: {
  academies: string[]
  buttonState: { [key: string]: boolean }
  handleClick: (academy: string) => void
}) {
  return (
    <div className="absolute top-0 flex justify-center w-full gap-4 -translate-y-full">
      {academies.map((academy: string, index: number) => {
        return (
          <div key={academy} className="">
            <button
              type="button"
              onClick={() => handleClick(academy)}
              className={`px-[40px] max-w-[168px] md:max-w-none md:px-[90px] pt-10 bg-primary-text font-montserrat font-extrabold tracking-widest leading-5 uppercase text-center ${
                buttonState[academy] ? 'pb-14 border-t-2 border-x-2 border-white' : 'pb-10'
              }`}
            >
              {academy}
            </button>
          </div>
        )
      })}
    </div>
  )
}
