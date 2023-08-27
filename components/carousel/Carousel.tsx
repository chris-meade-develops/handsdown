'use client'
import { useCallback, useEffect, useState, cloneElement } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel-react'
import ArrowButton from './ArrowButton'
import DotButton from './DotButton'

export default function Carousel({
  children,
  options,
  displayButtons = true,
  displayDots = false,
  selectableChildren = false,
  reverseColors = false,
}: ICarousel.Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  const renderChildren = () => {
    if (selectableChildren) {
      if (Array.isArray(children) && children.length > 0) {
        return children?.map((child, index) => {
          return cloneElement(child, {
            ...child.props,
            key: index,
            selected: index === selectedIndex,
            onClick: () => scrollTo(index),
          })
        })
      }
    } else {
      return children
    }
  }

  return (
    <>
      <div className="overflow-hidden embla" ref={emblaRef}>
        <div className="flex items-center embla-container">
          {renderChildren()}
        </div>
      </div>
      <div className="flex justify-center mt-20 mb-7">
        {displayDots &&
          scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
      </div>
      {displayButtons && (
        <>
          <div className="absolute left-23 top-1/2">
            <ArrowButton type="prev" onClick={scrollPrev} reverseColors={reverseColors} />
          </div>
          <div className="absolute right-23 top-1/2">
            <ArrowButton type="next" onClick={scrollNext} reverseColors={reverseColors}  />
          </div>
        </>
      )}
    </>
  )
}
