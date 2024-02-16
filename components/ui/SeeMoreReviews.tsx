'use client'
import { useState } from 'react'
import ReviewCard from '../cards/ReviewCard'
import Primary from '../buttons/Primary'

export default function SeeMoreReviews(data: ICms.CarouselData) {
  // State to track the number of reviews to display
  const [visibleReviews, setVisibleReviews] = useState(3)

  // Function to load more reviews
  const loadMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3)
  }

  return (
    <>
      <div className="hidden grid-cols-3 md:grid gap-11">
        {data.data.attributes.cards.cards
          .slice(0, visibleReviews) // Use the slice method to limit the number of displayed reviews
          .map((item, index) => (
            <div key={index} className="max-w-[436px]">
              <ReviewCard {...item} />
            </div>
          ))}
      </div>
      {visibleReviews < data.data.attributes.cards.cards.length && (
        <div className="hidden md:block mx-auto max-w-[305px] h-[55px] mt-40 mb-15">
          <Primary onClick={loadMoreReviews} type="button">
            <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
              Read more
            </span>
          </Primary>
        </div>
      )}
    </>
  )
}
