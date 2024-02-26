import NavigationComposer from '@/components/navigation'
import DefaultPage from '@/components/pages/DynamicPage'
import getCustomPageData from '@/helpers/getCustomPageData'
import getNavigationData from '@/helpers/getNavigationData'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const pageDescriptions: { [key: string]: string } = {
  coaches: 'Meet our team of expert coaches',
  about: 'Learn more about Hands Down martial art and our mission',
  contact: 'Get in touch with Hands Down martial art and start your journey',
  dragons:
    'Hands Down Dragons - martial arts for children aged five to six years old',
  children:
    'Hands Down Children - martial arts for children aged seven to eight years old',
  juniors:
    'Hands Down Juniors - martial arts for children aged ten years and older',
  adults: 'Hands Down Adults - martial arts for adults',
  default:
    'Hands Down martial arts, boxing and kickboxing in Cobham and Epsom, Surrey. Classes suitable for all ages. Great way to get fit & learn',
    faqs: 'Frequently asked questions about Hands Down martial arts',
}

const keywordMap: { [key: string]: string } = {
  coaches: 'expert martial arts coaches Surrey, top kickboxing trainers Epsom, professional kickboxing instructors Cobham, martial arts coaching team',
  about: 'our mission martial arts, history of boxing in Surrey, about kickboxing classes Cobham, learn martial arts Epsom, our martial arts philosophy',
  contact: 'contact Hands Down Academies, sign up for martial arts Surrey, boxing class enrollment Epsom, kickboxing training inquiries Cobham',
  dragons: 'Dragons martial arts for kids, children martial arts classes Surrey, starting martial arts young, kids self-defense courses Cobham, martial arts for children Epsom',
  children: 'Children martial arts training, kids boxing classes Epsom, young kickboxing courses Surrey, best martial arts for kids Cobham, children self-defense lessons',
  juniors: 'Juniors martial arts program, teenage boxing training Surrey, youth kickboxing classes Cobham, martial arts for teens Epsom, adolescent self-defense skills',
  adults: 'Adults martial arts classes, boxing for beginners and advanced Epsom, adult kickboxing training Surrey, self-defense courses for men and women Cobham',
  default: 'martial arts classes Surrey, boxing training Epsom, kickboxing lessons Cobham, self-defense classes for all ages, improve fitness with martial arts',
  faq: 'martial arts FAQs, boxing and kickboxing questions answered, choosing the right martial arts class Surrey, what to expect from your first martial arts class Epsom, martial arts training benefits Cobham',
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Hands Down | ${params.slug} `,
    description: pageDescriptions[params.slug] || pageDescriptions.default,
    alternates: {
      canonical: `/${params.slug}`,
    },
    openGraph: {
      title: `Hands Down | ${params.slug}`,
      description: pageDescriptions[params.slug] || pageDescriptions.default,
      type: 'website',
      url: `https://handsdownacademies.co.uk/${params.slug}`,
      images: [
        {
          url: 'https://handsdownacademies.co.uk/images/nav_logo.png',
          width: 116,
          height: 71,
          alt: 'Hands Down',
        },
      ],
    },
    keywords: keywordMap[params.slug] || keywordMap.default,
    }
  }

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
