import NavigationComposer from '@/components/navigation'
import CoachesBody from '@/modules/about/CoachesBody'
import { headers } from 'next/headers'

async function getCoachesData(page: string) {
  'use server'
  const data = (await import(`@/temporary_data/pages/${page}`)).default

  return data
}

async function getCarouselData(): Promise<{
  reviews: ICard.WithImage[]
  classes: ICard.WithImage[]
  coaches: ICard.WithImage[]
}> {
  'use server'
  const reviews = (await import('@/temporary_data/carousels/reviews')).default
  const classes = (await import('@/temporary_data/carousels/classes')).default
  const coaches = (await import('@/temporary_data/carousels/coaches')).default

  return { reviews, classes, coaches }
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.replace('/', '')

  const cmsData: ICms.Page = await getCoachesData(page!)

  const { reviews, classes, coaches } = await getCarouselData()

  return (
    <>
      <header>
        <NavigationComposer scrollable={false} />
      </header>
      <CoachesBody
        cmsData={cmsData}
        reviews={reviews}
        classes={classes}
        coaches={coaches}
      />
    </>
  )
}
