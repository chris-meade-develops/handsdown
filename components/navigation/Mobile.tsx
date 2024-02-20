'use client'
import { Phone } from '@/icons'
import BurgerMenu from './BurgerMenu'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Mobile({
  open,
  onClick,
  scrolled,
}: INavigation.MobileNav) {
  const [img, setImg] = useState('')

  useEffect(() => {
    const fetchImg = async () => {
      const url = `https://handsdown-postgres-cms-production.up.railway.app/api/upload/files/21`
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      setImg(data.url)
    }
    fetchImg()
  }, [])
  return (
    <nav
      className={`fixed top-0 left-0 w-full md:hidden px-14 z-3 ${
        scrolled
          ? 'bg-secondary text-primary-text py-10'
          : 'bg-transparent text-secondary-text py-20  '
      } transition-all duration-300
    }`}
    >
      <ul className="flex items-center justify-between list-none">
        <li>
          <BurgerMenu scrolled={scrolled} open={open} onClick={onClick} />
        </li>
        {scrolled && !open && (
          <Link href="/">
            <Image src={img} alt="nav logo" width={79} height={42} />
          </Link>
        )}
        <li>
          <a href="tel:0123456789" className="block w-13 h-13">
            <Phone
              className={`w-full h-full -rotate-12 transition-colors duration-300 ${
                open || scrolled ? 'fill-offBlack' : 'fill-secondary-text'
              }`}
            />
          </a>
        </li>
      </ul>
    </nav>
  )
}
