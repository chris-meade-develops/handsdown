import NavigationComposer from '@/components/navigation'
import DynamicPage from '@/components/pages/DynamicPage'
import getCustomPageData from '@/helpers/getCustomPageData'
import getNavigationData from '@/helpers/getNavigationData'

export default async function Home() {
  const [page, navigation] = await Promise.allSettled([
    getCustomPageData('home'),
    getNavigationData(),
  ])

  if (
    page.status === 'rejected' ||
    page.value === null ||
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
    <div className="relative">
      <header>
        <NavigationComposer
          scrollable={true}
          navData={navigation.value.data[0]}
        />
      </header>
      <DynamicPage cmsData={cmsData} />
    </div>
  )
}
