import Classes from './Classes'
import Coaches from './Coaches'
import Graduates from './Graduates'
import Reviews from './Reviews'

export default function CarouselComposer(cmsData: ICms.DynamicComponents) {
  const { dataType: type, displayButtons, displayDots, selectableChildren, reverseColours } = cmsData
  switch (type) {
    case 'reviews':
      return <Reviews key="reviews-carousel" reverse={reverseColours} />
    case 'graduates':
      return <Graduates key="graduates-carousel" />
    case 'coaches':
      return <Coaches key="coaches-carousel" reverse={reverseColours} />
    case 'classes':
       {/* @ts-expect-error Server Component */}
      return <Classes key="classes-carousel" reverse={reverseColours} />
    default:
      return null
  }
}
