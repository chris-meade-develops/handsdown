'use server'
const qs = require('qs')

const IS_LOCAL = process.env.NODE_ENV === 'development'
const CMS_URL = IS_LOCAL
  ? `${process.env.STRAPI_DEV_URL}/api/`
  : `${process.env.STRAPI_URL}/api/}`

export default async function getCustomPageData(
  slug: string
): Promise<ICms.PageData | null> {
  'use server'
  const query = {
    filters: {
      slug: slug,
    },
    populate: "deep"
  }

  try {
    const convertedQuery = qs.stringify(query, { encodeValuesOnly: true })
    const pageData = await fetch(`${CMS_URL}custom-pages?${convertedQuery}`)
    const page: ICms.PageData = await pageData.json()

    if (!page) throw new Error('Page data not found')

    return page
  } catch (error) {
    console.log('getPageData error: ', error)

    return null
  }
}
