'use server'
const qs = require('qs')
import { headers } from "./cacheHeaders"
import CMS_URL from "./isLocal"

export default async function getPageData(slug: string): Promise<ICms.PageData | null> {
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
    const pageData = await fetch(`${CMS_URL}custompages?${convertedQuery}`, headers)
    const page: ICms.PageData = await pageData.json()

    if (!page || !page.data?.length) throw new Error('Page data not found')

    return page
  } catch (error) {
    console.error('getPageData error: ', error)

    return null
  }
}
