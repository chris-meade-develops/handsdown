'use server'
const qs = require('qs')

const IS_LOCAL = process.env.NODE_ENV === 'development'
const CMS_URL = IS_LOCAL
  ? `${process.env.STRAPI_DEV_URL}/api/`
  : `${process.env.STRAPI_URL}/api/}`

export default async function getNavigationData(): Promise<INavigation.ApiResponse | null> {
  'use server'
  const query = {
    populate: '*',
  }

  try {
    const convertedQuery = qs.stringify(query, { encodeValuesOnly: true })
    const navRes = await fetch(`${CMS_URL}menus?nested&${convertedQuery}`)
    const navData: INavigation.ApiResponse = await navRes.json()

    if (!navData || !navData.data)
      throw new Error('Nav data not found')

    return navData
  } catch (error) {
    console.log('getNavDataError: ', error)

    return null
  }
}
