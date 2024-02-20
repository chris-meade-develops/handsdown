import { useEffect, useState } from 'react'

export default function useScrolled({ scrollable }: { scrollable: boolean }) {
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

  return scrolled
}
