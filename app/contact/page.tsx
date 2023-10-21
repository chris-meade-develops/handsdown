import NavigationComposer from '@/components/navigation'
import ContactBody from '@/modules/contact/ContactBody'
import { headers } from 'next/headers'

async function getContactData(pageName: string): Promise<ICms.Page> {
  'use server'
  const data = (await import(`@/temporary_data/pages/${pageName}`)).default
  return data
}

async function getCarouselData(): Promise<{
  reviews: ICard.WithImage[]
  classes: ICard.WithImage[]
}> {
  'use server'
  const reviews = (await import('@/temporary_data/carousels/reviews')).default
  const classes = (await import('@/temporary_data/carousels/classes')).default

  return { reviews, classes }
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.replace('/', '')

  const cmsData: ICms.Page = await getContactData(page!)
  const { reviews, classes } = await getCarouselData()
  return (
    <>
      <header>
        <NavigationComposer scrollable={false} />
      </header>
      <ContactBody cmsData={cmsData} reviews={reviews} classes={classes} />
    </>
  )
}
