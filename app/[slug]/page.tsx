import NavigationComposer from '@/components/navigation'
import DefaultPage from '@/components/pages/DynamicPage'
import getCustomPageData from '@/helpers/getCustomPageData'
import getNavigationData from '@/helpers/getNavigationData'
import { notFound } from 'next/navigation'

export default async function Page({ params }: { params: { slug: string } }) {
  const [page, navigation] = await Promise.allSettled([
    getCustomPageData(params.slug!),
    getNavigationData(),
  ])

  if (
    page.status === 'rejected' ||
    !page.value ||
    navigation.status === 'rejected' ||
    !navigation.value
  ) {
    //send to 404
    return notFound()
  }

  if (
    !page.value.data ||
    !page.value.data[0] ||
    !page.value.data[0].attributes
  ) {
    //send to 404
    return notFound()
  }

  if (!navigation.value.data || !navigation.value.data[0]) {
    //send to 404
    return notFound()
  }

  const cmsData = page.value.data?.[0]?.attributes

  return (
    <>
      <header>
        <NavigationComposer
          scrollable={false}
          navData={navigation.value.data[0]}
        />
      </header>
        <DefaultPage cmsData={cmsData} />
    </>
  )
}
