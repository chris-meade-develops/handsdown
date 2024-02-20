'use client'
import { useEffect, useState } from 'react'
import DesktopItem from './DesktopItem'
import Image from 'next/image'

export default function Desktop({
  scrolled,
  navItems,
}: {
  scrolled: boolean
  navItems: INavigation.Items
}) {
  const firstHalf = navItems.data.slice(0, 3)
  const secondHalf = navItems.data.slice(3, 8)

  return (
    <nav
      className={`fixed top-0 left-0 justify-between hidden w-full  md:flex transition-all duration-300 md:mb-14 z-2 ${
        scrolled
          ? 'bg-secondary md:pl-32 md:pr-41 text-primary-text'
          : 'bg-transparent md:py-21 md:pr-41 md:pl-46 text-secondary-text '
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
      <div className={`transition-all duration-300 ${scrolled ? 'my-8' : ''}`}>
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
    </nav>
  )
}
