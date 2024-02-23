'use client'
import { useState, useRef, useEffect, RefObject } from 'react'

interface UseExpanderReturn<T extends HTMLElement> {
  ref: RefObject<T>
  isExpanded: boolean
  handleToggle: () => void
  handleOpen: () => void
  handleClose: () => void
  maxHeight: string
}

export default function useExpander<T extends HTMLElement>(
  initialState: boolean = false,
  minHeight: string = '0px'
): UseExpanderReturn<T> {
  const ref = useRef<T>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(initialState)
  const [maxHeight, setMaxHeight] = useState<string>(minHeight)

  const handleToggle = () => {
    if (isExpanded) handleClose()
    else handleOpen()
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  const handleOpen = () => {
    setIsExpanded(true)
  }

  useEffect(() => {
    if (ref.current) {
      if (isExpanded) {
        let totalHeight = ref.current.scrollHeight
        Array.from(ref.current.children).forEach((child) => {
          const style = getComputedStyle(child as HTMLElement)
          totalHeight +=
            (child as HTMLElement).scrollHeight +
            parseInt(style.marginTop) +
            parseInt(style.marginBottom)
        })
        setMaxHeight(`${totalHeight}px`)
      } else {
        setMaxHeight(minHeight)
      }
    }
  }, [ref, isExpanded, minHeight])

  return { ref, isExpanded, handleToggle, maxHeight, handleOpen, handleClose }
}
