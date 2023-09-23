import Pricing from './sections/Pricing'
import Reviews from './sections/Reviews'
import Hero from '@/components/hero'
import Intro from './sections/Intro'
import Classes from './sections/Classes'
import BookAClass from './sections/BookAClass'
import SocialFeed from '../global/SocialFeed'

export default function Body(data: ICms.HomePage) {
  return (
    <main>
      <Hero />
      <Intro />
      <Classes {...data.classes} />
      <Pricing data={...data.pricing} />
      <Reviews />
      <BookAClass />
      <SocialFeed />
    </main>
  )
}
