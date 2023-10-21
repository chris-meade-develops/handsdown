'use client'
import { useEffect, useState } from 'react'
import DesktopItem from './DesktopItem'
import navItems from '@/temporary_data/navigation'
import Image from 'next/image'

export default function Desktop({ scrollable }: { scrollable: boolean }) {
  const firstHalf = navItems.slice(0, 3)
  const secondHalf = navItems.slice(3, 8)
  const [scrolled, setScrolled] = useState(!scrollable)

  useEffect(() => {
    if (!scrollable) return
    const handleScroll = () => {
      if (window.scrollY > 130) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

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
            key={item.label}
            label={item.label}
            href={item.href}
            items={item?.items ? item.items : undefined}
          />
        ))}
      </ul>
      <div className={`transition-all duration-300 ${scrolled ? 'my-8' : ''}`}>
        <a href="/" className={`${scrolled ? 'block' : 'hidden'}`}>
          <Image
            src="/uploads/nav_logo_0d594e89df.png"
            width={116}
            height={71}
            alt="Handsdown logo"
          />
        </a>
      </div>
      <ul className="flex justify-between list-none max-w-[478px] w-1/3 items-center gap-3">
        {secondHalf.map((item) => (
          <DesktopItem
            key={item.label}
            label={item.label}
            href={item.href}
            items={item?.items ? item.items : undefined}
          />
        ))}
      </ul>
    </nav>
  )
}
