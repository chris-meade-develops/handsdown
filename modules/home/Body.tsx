import Pricing from './sections/Pricing'
import Reviews from './sections/Reviews'
import Hero from '@/components/hero'
import Intro from './sections/Intro'
import Classes from './sections/Classes'
import BookAClass from './sections/BookAClass'
import SocialFeed from './sections/SocialFeed'

export default function Body(data: ICms.HomePage) {
  console.log(data)
  return (
    <main>
      <Hero />
      <Intro />
      <Classes data={data.classes} />
      <Pricing data={data.pricing} />
      <Reviews data={data.reviews} />
      <BookAClass />
      <SocialFeed />
    </main>
  )
}
