import Pricing from './sections/Pricing'
import Reviews from '../global/Reviews'
import Hero from '@/components/hero'
import Intro from './sections/Intro'
import Classes from '../global/Classes'
import BookAClass from '../global/BookAClass'
import SocialFeed from './sections/SocialFeed'

export default function HomeBody(data: ICms.HomePage) {
  console.log(data)
  return (
    <main>
      <Hero />
      <Intro />
      <Classes
        data={data.classes}
        subTitle="We offer classes for 4 different age groups with a focus on
          progression across both Epsom and Cobham."
          heading="our classes"
      />
      <Pricing data={data.pricing} />
      <Reviews data={data.reviews} />
      <BookAClass />
      <SocialFeed />
    </main>
  )
}
