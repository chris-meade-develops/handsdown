import NavigationComposer from '@/components/navigation'
import AboutBody from '@/modules/about/AboutBody'
import { headers } from 'next/headers'

async function getAboutData(pageName: string): Promise<ICms.Page> {
  'use server'
  const data = (await import(`@/temporary_data/pages/${pageName}`)).default
  return data
}

async function getCarouselData(): Promise<{
  reviews: ICard.WithImage[]
}> {
  'use server'
  const reviews = (await import('@/temporary_data/carousels/reviews')).default

  return { reviews }
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.replace('/', '')

  const cmsData: ICms.Page = await getAboutData(page!)
  const { reviews } = await getCarouselData()

  return (
    <>
      <header>
        <NavigationComposer scrollable={false} />
      </header>
      <AboutBody cmsData={cmsData} reviews={reviews} />
      
    </>
  )
}
