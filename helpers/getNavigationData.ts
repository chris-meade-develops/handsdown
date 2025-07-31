'use server'
const qs = require('qs')
import { headers } from './cacheHeaders'
import CMS_URL from './isLocal'

export default async function getNavigationData(): Promise<INavigation.ApiResponse | null> {
  'use server'
  const query = {
    populate: '*',
  }

  try {
    const convertedQuery = qs.stringify(query, { encodeValuesOnly: true })
    const navRes = await fetch(
      `${CMS_URL}menus?nested&${convertedQuery}`,
      headers
    )
    const navData: INavigation.ApiResponse = await navRes.json()

    if (!navData || !navData.data) throw new Error('Nav data not found')

    return navData
  } catch (error) {
    console.error('getNavDataError: ', error)

    return null
  }
}
