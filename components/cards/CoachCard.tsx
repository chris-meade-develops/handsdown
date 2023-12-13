'use client'
import PrimaryLink from '../links/PrimaryLink'

export default function CoachCard({
  coach,
  selected,
  onClick,
}: {
  coach: ICard.WithImage
  selected?: boolean
  onClick?: () => void
}) {
  return (
    <div className="embla_slide flex-[0_0_20%]">
      <button
        type="button"
        onClick={() => onClick && onClick()}
        style={{
          backgroundImage: `url(${coach.image.src.data.attributes.url ?? ''})`,
        }}
        className={`bg-center bg-cover bg-no-repeat  overflow-hidden group relative transition-height duration-300 ${
          selected ? 'w-[224px] h-[273px]' : 'w-[208px] h-[253px] my-5'
        }`}
      >
        <div
          className={`absolute w-full h-full opacity-30 bg-offBlack z-1 ${
            selected ? 'block' : 'hidden'
          }`}
        />
        <div
          className={`relative flex-col items-center justify-center w-full h-full z-2  ${
            selected ? 'flex' : 'hidden'
          }`}
        >
          <h3 className="mb-9 text-[22px] leading-7 font-montserrat font-bold capitalize">
            {coach.title}
          </h3>

          <div className="w-53 h-25">
            <PrimaryLink href={coach.link?.address ? coach.link?.address : '#'}>
              <span className="text-sm font-bold uppercase tracking-[1.4px] leading-[18px] ">
                {coach.link?.text ? coach.link?.text : 'learn more'}
              </span>
            </PrimaryLink>
          </div>
        </div>
      </button>
    </div>
  )
}
