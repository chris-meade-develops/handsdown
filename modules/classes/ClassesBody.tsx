import BookAClass from '../global/BookAClass'
import Classes from '../global/Classes'
import Reviews from '../global/Reviews'
import ClassesHero from './sections/ClassesHero'
import LatestGraduates from './sections/LatestGraduates'

export default function ClassesBody({
  cmsData,
  pageData,
}: {
  cmsData: ICms.Page
  pageData: ICms.ClassPage
}) {
  const filteredClasses = pageData.classes.filter(
    (card) => !card.title.includes('Dragons')
  )

  return (
    <main>
      <ClassesHero {...cmsData.hero} />
      <LatestGraduates
        heading="Latest Graduates"
        graduates={pageData.graduates}
      />
      <Reviews data={pageData.reviews} />
      <BookAClass />
      <Classes data={filteredClasses} heading="other classes" />
    </main>
  )
}
