import NavigationComposer from '@/components/navigation'
import AboutBody from '@/modules/about/AboutBody'
import { headers } from 'next/headers'
const qs = require('qs')

const IS_LOCAL = process.env.NODE_ENV === 'development'
const CMS_URL = IS_LOCAL
  ? `${process.env.STRAPI_DEV_URL}/api/`
  : `${process.env.STRAPI_URL}/api/}`

async function getPageData(slug: string): Promise<ICms.PageData | null> {
  'use server'
  const query = {
    filters: {
      slug: slug,
    },
    populate: {
      hero: {
        populate: {
          link: {
            populate: '*',
          },
          image: {
            populate: '*',
          },
        },
      },
      body: {
        populate: {
          text: {
            populate: '*',
          },
          images: {
            populate: {
              src: {
                populate: {
                  image: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
      },
      reviews_carousel: {
        populate: {
          reviews: {
            populate: {
              '*': '*',
              image: {
                populate: '*',
              },
            },
          },
        },
      },
      class_carousel: {
        populate: {
          Classes: {
            populate: {
              '*': '*',
              cards: {
                populate: {
                  '*': '*',
                  image: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
      },
      graduates_carousel: {
        populate: {
          Graduates: {
            populate: {
              '*': '*',
              cards: {
                populate: {
                  '*': '*',
                  image: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
      },
      coaches_carousel: {
        populate: {
          Coaches: {
            populate: {
              '*': '*',
              cards: {
                populate: {
                  '*': '*',
                  image: {
                    populate: '*',
                  },
                },
              },
            },
          },
        },
      },
      dynamicComponents: {
        populate: {
          questions: {
            populate: '*',
          },
          cards: {
            populate: {
              image: {
                populate: {
                  image: '*',
                },
              },
            },
          },
        },
      },
    },
  }

  try {
    const convertedQuery = qs.stringify(query, { encodeValuesOnly: true })

    const pageData = await fetch(`${CMS_URL}pages?${convertedQuery}`)

    const page: ICms.PageData = await pageData.json()

    if (!page || !page.data?.length) throw new Error('Page data not found')

    return page
  } catch (error) {
    console.log('getPageData error: ', error)

    return null
  }
}

export default async function Page() {
  const headersList = headers()
  const activePath = headersList.get('x-invoke-path')
  const page = activePath?.replace('/', '')

  // const cmsData: ICms.Page = await getAboutData(page!)
  // const { reviews } = await getCarouselData()
  const data = await getPageData(page!)

  if (!data) {
    //send to 404
    console.log('404')
    return null
  }

  // const { hero, reviews_carousel, classes_carousel, graduates_carousel, coaches_carousel, dynamicComponents  } = data.data?.[0]?.attributes ?? {};

  const cmsData = data.data?.[0]?.attributes

  console.log('data', cmsData)

  if (!cmsData) {
    //send to 404
    console.log('404')
    return null
  }

  return (
    <>
      <header>
        <NavigationComposer scrollable={false} />
      </header>
      <AboutBody cmsData={cmsData} />
    </>
  )
}
