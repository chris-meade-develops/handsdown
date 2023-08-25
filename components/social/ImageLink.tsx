import Link from 'next/link'
import Image from '../ui/Image'
import StackedSquares from '@/icons/StackedSquares'

export default function ImageLink({
  image,
  link,
}: {
  image: ICms.Image
  link: string
}) {
  return (
    <Link
      href={link}
      className="relative block w-full h-auto pb-[50%] min-h-[156px] md:min-h-[334px]"
    >
      <StackedSquares className="absolute w-2 h-2 right-2 top-2 stroke-transparent fill-white" />
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full h-full overflow-hidden"
        imgPosition="center"
        cover
      />
    </Link>
  )
}
