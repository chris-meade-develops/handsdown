import NavigationComposer from '@/components/navigation'
import DefaultPage from '@/components/pages/DynamicPage'
import getCustomPageData from '@/helpers/getCustomPageData'
import getNavigationData from '@/helpers/getNavigationData'

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
    console.log('404')
    return null
  }

  const cmsData = page.value.data?.[0]?.attributes

  if (!cmsData) {
    //send to 404
    console.log('404')
    return null
  }

  return (
    <>
      <header>
        <NavigationComposer
          scrollable={false}
          navData={navigation.value.data[0]}
        />
        <DefaultPage cmsData={cmsData} />
      </header>
    </>
  )
}
