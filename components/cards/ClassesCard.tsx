import PrimaryLink from '../links/PrimaryLink'
import Primary from '../links/PrimaryLink'
import Image from '../ui/Image'

export default function ClassesCard({
  title,
  description,
  image,
  link,
  imgPosition,
}: ICard.WithImage) {
  return (
    <div className="w-full rounded-[30px] pt-47 relative overflow-hidden flex flex-col justify-end mb-27 h-full">
      <Image
        src={image.src}
        alt={image.alt}
        className="absolute top-0 left-0 z-0 w-full h-full"
        imgPosition={imgPosition}
        cover
      />
      <div className="relative w-full pt-8 px-25 bg-tertiary/75 z-1">
        <div className="md:mb-25">
          <h3 className="mt-8 text-2xl font-bold text-center text-white uppercase font-montserrat">
            {title}
          </h3>
          <p className="mt-4 mb-6 text-base font-normal text-center text-white font-montserrat">
            {description}
          </p>
          <div className="h-25 w-[185px] mx-auto mb-14">
            {link && (
              <PrimaryLink href={link}>
                <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                  learn more
                </span>
              </PrimaryLink>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
