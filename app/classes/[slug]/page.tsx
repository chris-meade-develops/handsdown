import { headers } from 'next/headers'
import ClassesHero from '@/modules/classes/sections/ClassesHero'
import ClassesBody from '@/modules/classes/ClassesBody'

async function getClassesData(pageName: string): Promise<ICms.Page> {
  'use server'
  const data = (await import(`../../../temporary_data/pages/${pageName}`))
    .default
  return data
}

async function getCarouselData(): Promise<{
  reviews: ICard.WithImage[]
  classes: ICard.WithImage[]
  graduates: ICard.WithImage[]
}> {
  'use server'
  const reviews = (await import('@/temporary_data/carousels/reviews')).default
  const classes = (await import('@/temporary_data/carousels/classes')).default
  const graduates = (await import('@/temporary_data/carousels/graduates')).default

  return { reviews, classes, graduates }
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.split('/')[2]

  const cmsData: ICms.Page = await getClassesData(page!)
  const pageData = await getCarouselData()

  return <ClassesBody cmsData={cmsData} pageData={pageData} />
}
