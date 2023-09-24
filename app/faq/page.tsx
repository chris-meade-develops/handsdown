import NavigationComposer from '@/components/navigation'
import FaqBody from '@/modules/faq/FaqBody'
import { headers } from 'next/headers'

async function getFaqData(pageName: string): Promise<ICms.Page> {
  'use server'
  const data = (await import(`@/temporary_data/pages/${pageName}`)).default
  return data
}

async function getCarouselData(): Promise<{
  classes: ICard.WithImage[]
  reviews: ICard.WithImage[]
}> {
  'use server'
  const classes = (await import('@/temporary_data/carousels/classes')).default
  const reviews = (await import('@/temporary_data/carousels/reviews')).default

  return { classes, reviews }
}

async function getFaq(): Promise<ICms.Faq[]> {
  'use server'
  const data = (await import('@/temporary_data/components/faq')).default
  return data
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.replace('/', '')

  const cmsData: ICms.Page = await getFaqData(page!)
  const { classes, reviews } = await getCarouselData()
  const questions = await getFaq()

  return (
    <>
      <header>
        <NavigationComposer scrollable={false} />
      </header>
      <FaqBody
        cmsData={cmsData}
        classes={classes}
        reviews={reviews}
        questions={questions}
      />
    </>
  )
}
