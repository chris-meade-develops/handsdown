'use client'

import DesktopItem from './DesktopItem'
import Image from 'next/image'
import AnnouncementBar from '../announcement-bar'

export default function Desktop({
  scrolled,
  navItems,
  promoBlock,
}: {
  scrolled: boolean
  navItems: INavigation.Items
  promoBlock: ICms.Announcement | null
}) {
  const firstHalf = navItems.data.slice(0, 3)
  const secondHalf = navItems.data.slice(3, 8)

  return (
    <nav
      className={`fixed top-0 left-0  hidden w-full md:block transition-all duration-300 md:mb-14 z-2 ${
        scrolled
          ? 'bg-secondary  text-primary-text'
          : 'bg-transparent  text-secondary-text '
      }`}
    >
      {promoBlock && !scrolled && <AnnouncementBar promoBlock={promoBlock} />}
      <div
        className={`flex justify-between ${
          scrolled ? 'md:pl-32 md:pr-41' : 'md:py-21 md:pr-41 md:pl-46'
        }`}
      >
        <ul className="flex justify-between gap-3 list-none w-1/3 max-w-[468px] items-center">
          {firstHalf.map((item) => (
            <DesktopItem
              key={item.id}
              id={item.id}
              attributes={item.attributes}
            />
          ))}
        </ul>
        <div
          className={`transition-all duration-300 ${scrolled ? 'my-8' : ''}`}
        >
          <a href="/" className={`${scrolled ? 'block' : 'hidden'}`}>
            <Image
              src="https://res.cloudinary.com/dkf2b6ta5/image/upload/v1702322316/nav_logo_a34c0a09de.png"
              width={116}
              height={71}
              alt="Handsdown logo"
            />
          </a>
        </div>
        <ul className="flex justify-between list-none max-w-[478px] w-1/3 items-center gap-3">
          {secondHalf.map((item) => (
            <DesktopItem
              key={item.id}
              id={item.id}
              attributes={item.attributes}
            />
          ))}
        </ul>
      </div>
      {promoBlock && scrolled && <AnnouncementBar promoBlock={promoBlock} />}
    </nav>
  )
}
