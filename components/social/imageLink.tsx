import Link from 'next/link'
import Image from '../ui/image'
import StackedSquares from '@/icons/StackedSquares'

export default function ImageLink({ image, link }: iImageLinks) {
  return (
    <Link href={link} className="relative w-51 h-50">
      <StackedSquares className="absolute w-2 h-2 right-2 top-2 stroke-transparent fill-white" />
      <Image
        src={image}
        alt="click to find out more"
        className="w-full h-full overflow-hidden"
        imgPosition="center"
        cover
      />
    </Link>
  )
}
