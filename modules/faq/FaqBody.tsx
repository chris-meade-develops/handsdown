import BookAClass from '../global/BookAClass'
import Classes from '../global/Classes'
import DefaultHero from '../global/DefaultHero'
import Reviews from '../global/Reviews'
import Questions from './sections/Questions'

export default function FaqBody({
  cmsData,
  classes,
  reviews,
  questions,
}: ICms.FaqPage) {
  return (
    <main>
      <DefaultHero {...cmsData.hero} />
      <Questions questions={questions} />
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
