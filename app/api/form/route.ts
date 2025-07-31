import { NextRequest, NextResponse } from 'next/server'
import getCarouselData from '@/helpers/getCarouselData'

export async function GET(
  request: NextRequest
): Promise<NextResponse<IApiResponse<ICms.CarouselData>>> {
  const { searchParams } = request.nextUrl
  const type = searchParams.get('type')
  try {
    if (!type) throw new Error('Data type not found')

    const data = await getCarouselData(type)

    if (!data) throw new Error('Data not found')

    return NextResponse.json({ status: 200, success: true, data })
  } catch (error: unknown) {
    console.error('getDataType error: ', error)
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred'

    return NextResponse.json({ status: 500, success: false, errorMessage })
  }
}
