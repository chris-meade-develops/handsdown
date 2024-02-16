import Link from 'next/link'
import StackedSquares from '@/icons/StackedSquares'
import Image from 'next/image'

export default function ImageLink(post: IInstagram.Media) {
  return (
    <Link
      target="_blank"
      href={post.permalink}
      className="relative block w-full h-auto pb-[50%] min-h-[156px] md:min-h-[334px] md:max-w-[350px] overflow-hidden mx-auto"
    >
      <StackedSquares className="absolute w-15 h-15 right-2 top-2 stroke-transparent fill-white z-2" />
      <Image
        src={post.media_url}
        alt={post.caption}
        className="w-full h-full overflow-hidden"
        fill={true}
        objectFit="cover"
      />
    </Link>
  )
}
