import Link from 'next/link'
import { Twitter, Instagram, Facebook } from '../../icons'

const iconMap: { [key: string]: any } = {
  facebook: (href: string) => (
    <Link href={href} className="w-auto group h-15 md:h-16">
      <Facebook className="w-full h-full fill-white group-hover:fill-accent" />
    </Link>
  ),
  instagram: (href: string) => (
    <Link href={href} className="w-auto group h-19 md:h-22 ml-25 mr-25">
      <Instagram className="w-full h-full fill-white group-hover:fill-accent" />
    </Link>
  ),
  twitter: (href: string) => (
    <Link href={href} className="w-auto group h-19 md:h-22">
      <Twitter className="w-full h-full fill-white group-hover:fill-accent" />
    </Link>
  ),
}

export default function Icons(platforms: {
  platforms: { id: string; Platform: string; Link: string }[]
}) {
  return (
    <div className="flex items-center justify-center w-full mb-22">
      {platforms.platforms.map((platform) => {
        const { Link: link, Platform: platformName, id } = platform
        const Icon = iconMap[platformName.toLowerCase()]
        return (
          <Icon key={id} className="w-full h-full fill-white" href={link} />
        )
      })}
    </div>
  )
}
