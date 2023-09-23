import classes from '@/temporary_data/carousels/classes'
import pricing from '@/temporary_data/callToAction/pricing'
import reviews from '@/temporary_data/carousels/reviews'
import HomeBody from '@/modules/home/HomeBody'
import NavigationComposer from '@/components/navigation'

export default async function Home() {
  const props = {
    classes,
    pricing,
    reviews,
  }

  return (
    <div className="relative">
      <header>
        <NavigationComposer scrollable={true} />
      </header>
      <HomeBody {...props} />
    </div>
  )
}
