import PrimaryLink from '../links/PrimaryLink'
import Image from '../ui/Image'

export default function ClassesCard({
  title,
  description,
  image,
  link,
  imgPosition,
}: ICard.WithImage) {
  return (
    <div className="w-full rounded-[30px] pt-47 relative overflow-hidden flex flex-col justify-end h-full">
      <Image
        src={image.src.data.attributes.url ?? ''}
        alt={image.alt}
        className="absolute top-0 left-0 z-0 w-full h-full"
        imgPosition={imgPosition}
        cover
      />
      <div className="relative w-full pt-8 px-25 bg-tertiary/75 z-1">
        <div className="md:mb-25">
          <h3 className="sm:mt-8 text-[22px] sm:text-2xl font-bold text-center text-white uppercase font-montserrat whitespace-nowrap">
            {title}
          </h3>
          <p className="mt-2 mb-6 text-base font-normal text-center text-white sm:mt-4 font-montserrat">
            {description}
          </p>
          <div className="h-25 w-[185px] mx-auto mb-14">
            {link && <PrimaryLink href={link.address}>learn more</PrimaryLink>}
          </div>
        </div>
      </div>
    </div>
  )
}
