'use server'
import CMS_URL from './isLocal'

export default async function getCarouselData(type: string): Promise<ICms.CarouselData | null> {
  try {
    if (!type) throw new Error('Carousel type not found')

    const queryString = `${CMS_URL}${type}-list?populate=deep`
    const data = await fetch(queryString)
    const carouselData = await data.json()
    if (!carouselData) throw new Error('carousel data not found')

    return carouselData
  } catch (error) {
    console.log('getcarouselData error: ', error)

    return null
  }
}


