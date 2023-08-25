import NavigationComposer from '@/components/navigation'
import classes from '@/temporary_data/carousels/classes'
import pricing from '@/temporary_data/callToAction/pricing'
import reviews from '@/temporary_data/carousels/reviews'
import HomeBody from '@/modules/home/HomeBody'

export default async function Home() {
  const props = {
    classes,
    pricing,
    reviews,
  }
  return (
    <div className="relative">
      <header>
        <NavigationComposer />
      </header>
      <HomeBody {...props} />
    </div>
  )
}
