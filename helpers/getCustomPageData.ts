'use server'
const qs = require('qs')
import { headers } from './cacheHeaders'
import CMS_URL from './isLocal'

export default async function getCustomPageData(
  slug: string
): Promise<ICms.PageData | null> {
  const query = {
    filters: {
      slug: slug,
    },
    populate: 'deep',
  }

  try {
    const convertedQuery = qs.stringify(query, { encodeValuesOnly: true })
    const pageData = await fetch(
      `${CMS_URL}custom-pages?${convertedQuery}`,
      headers
    )
    const page: ICms.PageData = await pageData.json()

    if (!page) throw new Error('Page data not found')

    return page
  } catch (error) {
    console.log('getPageData error: ', error)

    return null
  }
}
