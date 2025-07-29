'use server'
import { headers } from './cacheHeaders'
import CMS_URL from './isLocal'

export default async function getDataType<T>(type: string): Promise<T | null> {
  try {
    if (!type) throw new Error('Data type not found')

    const res = await fetch(`${CMS_URL}${type}?populate=deep`, headers)

    const data = await res.json()
    if (!data) throw new Error('Data not found')

    return data
  } catch (error) {
    console.log('getDataType error: ', error)

    return null
  }
}
