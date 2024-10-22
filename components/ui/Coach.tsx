'use client'
import useExpander from '@/hooks/useExpander'
import useMediaQuery from '@/hooks/useMediaQuery'
import Primary from '../buttons/Primary'

export default function Coach({
  index,
  name,
  description,
  imgSrc,
  lastCoach,
}: ICoach) {
  const { ref, isExpanded, handleToggle, maxHeight } =
    useExpander<HTMLParagraphElement>(false, '200px')
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (index % 2 === 0)
    return (
      <div
        className={`flex ${lastCoach ? '' : ' mb-20 md:mb-46'}`}
        id={`#${name.replaceAll(' ', '')}`}
      >
        <div
          className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat mr-10 md:mr-44"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        />
        <div className="w-full max-w-[625px] pt-7 ">
          <h3 className="font-bold leading-6 text-primary-text mb-13">
            {name}
          </h3>
          {isMobile ? (
            <>
              <p
                ref={ref}
                style={{
                  maxHeight,
                }}
                className="overflow-hidden font-light transition-all duration-150 mb-14 "
              >
                {description}
              </p>
              <div className="h-20 w-fit">
                <Primary type="button" onClick={handleToggle}>
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Primary>
              </div>
            </>
          ) : (
            <p className="font-light mb-14">{description}</p>
          )}
        </div>
      </div>
    )

  return (
    <div
      className={`flex ${lastCoach ? '' : ' mb-20 md:mb-46'}`}
      id={`#${name.replaceAll(' ', '')}`}
    >
      <div className="w-full max-w-[625px] pt-7 ">
        <h3 className="font-bold leading-6 text-primary-text mb-13">{name}</h3>
        {isMobile ? (
          <>
            <p
              ref={ref}
              style={{
                maxHeight,
              }}
              className="overflow-hidden font-light transition-all duration-150 mb-14 "
            >
              {description}
            </p>
            <div className="h-20 w-fit">
              <Primary type="button" onClick={handleToggle}>
                {isExpanded ? 'Read Less' : 'Read More'}
              </Primary>
            </div>
          </>
        ) : (
          <p className="font-light mb-14">{description}</p>
        )}
      </div>
      <div
        className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat ml-10 md:ml-44"
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      />
    </div>
  )
}
