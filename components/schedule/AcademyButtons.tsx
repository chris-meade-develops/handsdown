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
  console.log(buttonState)
  return (
    <div className="absolute top-0 flex justify-center w-full gap-4 -translate-y-full">
      {academies.map((academy: string, index: number) => (
        <button
          type="button"
          onClick={() => handleClick(academy)}
          className={`px-[90px] pt-10 pb-14 bg-primary font-montserrat font-extrabold tracking-widest leading-5 uppercase text-center ${buttonState.academy ? 'bg-secondary' : ''}}`}
        >
          {academy}
        </button>
      ))}
    </div>
  )
}
