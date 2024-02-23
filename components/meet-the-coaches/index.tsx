import Heading from '@/components/ui/Heading'
import getCarouselData from '@/helpers/getCarouselData'
import Coach from '../ui/Coach'
import ClientHelperComponent from './ClientHelperComponent'

export default async function MeetTheCoaches(cmsData: ICms.DynamicComponents) {
  const { dataType } = cmsData

  if (!dataType) return null

  const coachesData = await getCarouselData(dataType)

  if (!coachesData) return null
  if (!coachesData.data.attributes.cards.cards.length) return null

  const { cards } = coachesData.data.attributes.cards

  const lastIndex = cards.length - 1

  return (
    <section className="pb-48 pt-26 bg-secondary">
      <ClientHelperComponent />
      <div className="mb-21 md:mb-43">
        <Heading
          text="meet the coaches"
          fill="fill-black"
          textColour="text-white"
        />
      </div>
      <div className="flex flex-col max-w-[992px] px-10 mx-auto text-primary-text text-lg">
        {cards.map((card, index) => {
          const coachProps: ICoach = {
            index,
            name: card.title,
            description: card.description ?? '',
            imgSrc: card.image.src.data?.attributes?.url ? card.image.src.data.attributes?.url : '',
            lastCoach: index === lastIndex,
          }
          return <Coach {...coachProps} key={card.id} />
        })}
      </div>
    </section>
  )
}
