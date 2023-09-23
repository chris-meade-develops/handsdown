import AboutHero from './sections/AboutHero'
import Reviews from '../global/Reviews'
import SocialFeed from '../global/SocialFeed'
import BookAClass from '../global/BookAClass'
import MeetTheFounders from './sections/MeetTheFounders'
import MainText from './sections/MainText'

export default function AboutBody({ cmsData, reviews }: ICms.AboutPage) {
  return (
    <main>
      <AboutHero {...cmsData.hero} />
      <MainText />
      <MeetTheFounders />
      <Reviews data={reviews} />
      <BookAClass />
      <SocialFeed />
    </main>
  )
}
