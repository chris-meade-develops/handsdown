'use client'
import { useEffect } from 'react'

export default function ClientHelperComponent() {
  useEffect(() => {
    function checkHash() {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
          })
        }
      }
    }

    checkHash()

    document.addEventListener('hashchange', checkHash)

    return () => document.removeEventListener('hashchange', checkHash)
  }, [])
  return <></>
}
