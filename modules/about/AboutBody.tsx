import DefaultHero from '../global/DefaultHero'
import Reviews from '../global/Reviews'
import SocialFeed from '../global/SocialFeed'
import BookAClass from '../global/BookAClass'
import MeetTheFounders from './sections/MeetTheFounders'
import MainText from './sections/MainText'

export default function AboutBody({ cmsData, }: IPage.Props) {
  const { hero, reviews_carousel, classes_carousel, graduates_carousel, coaches_carousel, dynamicComponents  } = cmsData
  console.log("reviews_carousel", reviews_carousel)
  return (
    <main>
      <DefaultHero {...hero} />
      <MainText />
      <MeetTheFounders />
      {reviews_carousel && <Reviews data={reviews_carousel.data.attributes.reviews} />}
      <BookAClass />
      <SocialFeed />
    </main>
  )
}
