'use client'
import { useEffect, useState } from 'react'

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  const handleUpdate = (e: MediaQueryListEvent) => {
    setMatches(e.matches)
  }

  useEffect(() => {
    const hasWindow = typeof window !== 'undefined'

    if (hasWindow) {
      const media = window.matchMedia(query)


      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      media.addEventListener('change', handleUpdate)
      return () => media.removeEventListener('change', handleUpdate)
    }
  }, [query])

  return matches
}
