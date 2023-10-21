import BookAClass from '../global/BookAClass'
import Classes from '../global/Classes'
import DefaultHero from '../global/DefaultHero'
import Reviews from '../global/Reviews'

export default function CoachesBody({
  cmsData,
  coaches,
  classes,
  reviews,
}: ICms.CoachesPage) {
  return (
    <main>
      <DefaultHero {...cmsData.hero} />
      <BookAClass />
      <Classes
        data={classes}
        subTitle="We offer classes for 4 different age groups with a focus on
          progression across both Epsom and Cobham."
        heading="our classes"
      />
      <Reviews data={reviews} reverse />
    </main>
  )
}
