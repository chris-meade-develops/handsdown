'use server'
import { headers } from './cacheHeaders'
import CMS_URL from './isLocal'
const qs = require('qs')

export default async function getFooterData(): Promise<IFooter.ApiResponse | null> {
  const query = {
    populate: 'deep',
  }
  try {
    const convertedQuery = qs.stringify(query, { encodeValuesOnly: true })
    const footerData = await fetch(
      `${CMS_URL}website-footer?${convertedQuery}`,
      headers
    )

    if (!footerData) throw new Error('Footer data not found')

    const footer: IFooter.ApiResponse = await footerData.json()

    return footer
  } catch (error) {
    console.log('getFooterData error: ', error)

    return null
  }
}
