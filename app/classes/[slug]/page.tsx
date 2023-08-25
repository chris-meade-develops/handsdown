import { headers } from 'next/headers'
import ClassesHero from '@/components/hero/ClassesHero'

async function getClassesData(pageName: string): Promise<ICms.Page> {
  'use server'
  const data = (await import(`../../../temporary_data/pages/${pageName}`)).default
  return data
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.split('/')[2]

  const classesData: ICms.Page = await getClassesData(page!)

  return <ClassesHero {...classesData.hero} />
}
