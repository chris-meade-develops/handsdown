import NavigationComposer from '@/components/navigation'
import TimetableBody from '@/modules/timetable/TimetableBody'
import { headers } from 'next/headers'

async function getTimetableData(pageName: string): Promise<ICms.Page> {
  'use server'
  const data = (await import(`@/temporary_data/pages/${pageName}`)).default
  return data
}

async function getCarouselData(): Promise<{
  classes: ICard.WithImage[]
  coaches: ICard.WithImage[]
}> {
  'use server'
  const classes = (await import('@/temporary_data/carousels/classes')).default
  const coaches = (await import('@/temporary_data/carousels/coaches')).default

  return { classes, coaches }
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.replace('/', '')

  const { classes, coaches } = await getCarouselData()

  const cmsData: ICms.Page = await getTimetableData(page!)
  return (
    <>
      <header>
        <NavigationComposer scrollable={false} />
      </header>
      <TimetableBody cmsData={cmsData} classes={classes} coaches={coaches} />
    </>
  )
}
