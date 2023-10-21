import BookAClass from '../global/BookAClass'
import Classes from '../global/Classes'
import DefaultHero from '../global/DefaultHero'
import MeetTheCoaches from '../global/MeetTheCoaches'

export default function TimetableBody({
  cmsData,
  classes,
  coaches,
}: ICms.TimetablePage) {
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
      <MeetTheCoaches coaches={coaches} reverse />
    </main>
  )
}
