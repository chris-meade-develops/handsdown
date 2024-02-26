import NavigationComposer from '@/components/navigation'
import DynamicPage from '@/components/pages/DynamicPage'
import getCustomPageData from '@/helpers/getCustomPageData'
import getNavigationData from '@/helpers/getNavigationData'
import NotFound from './not-found'
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    title: 'Hands Down Martial Arts, Boxing, Kickboxing in Cobham & Epsom',
    description:
      'Hands Down martial arts, boxing and kickboxing in Cobham and Epsom, Surrey. Classes suitable for all ages. Great way to get fit & learn',
    type: 'website',
    images: [
      {
        url: 'https://handsdownacademies.co.uk/images/nav_logo.png',
        width: 116,
        height: 71,
        alt: 'Hands Down',
      },
    ],
  },
  keywords:
    'martial arts classes Surrey, boxing training Epsom, kickboxing lessons Cobham, self-defense classes for all ages, improve fitness with martial arts',
}

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
    return <NotFound />
  }

  if (
    !page.value.data ||
    !page.value.data[0] ||
    !page.value.data[0].attributes
  ) {
    return <NotFound />
  }

  if (!navigation.value.data || !navigation.value.data[0]) {
    //send to 404
    return <NotFound />
  }
  const navData = navigation.value.data[0]
  const cmsData = page.value.data?.[0]?.attributes

  return (
    <div className="relative">
      <header>
        <NavigationComposer scrollable={true} navData={navData} />
      </header>
      <DynamicPage cmsData={cmsData} />
    </div>
  )
}
