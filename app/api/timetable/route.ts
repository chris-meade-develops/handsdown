import getDataType from '@/helpers/getDataType'
import { NextRequest, NextResponse } from 'next/server'



export async function GET(
  request: NextRequest
): Promise<NextResponse<IApiResponse<ClassObject[]>>> {
  try {
    const { searchParams } = request.nextUrl
    const classSelected = searchParams.get('class')
    const locationSelected = searchParams.get('location')

    if (!classSelected || !locationSelected)
      throw new Error('Missing required parameters')

    if (!isTypeOfIncomingLocation(locationSelected))
      throw new Error('Invalid location')

    const timetable = await getDataType('timetable')

    if (!timetable) throw new Error('Data not found')

    const classes = getClassSchedules(
      timetable as TimetableData,
      locationSelected,
      classSelected,
      2
    )

    const data = classes.sort((a, b) => {
      return new Date(a.value).getTime() - new Date(b.value).getTime()
    })

    return NextResponse.json({ status: 200, success: true, data })
  } catch (error: unknown) {
    console.log('getDataType error: ', error)
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred'

    return NextResponse.json({ status: 500, success: false, errorMessage })
  }
}

function isTypeOfIncomingLocation(
  location: string
): location is 'epsom' | 'cobham' {
  return ['epsom', 'cobham'].includes(location)
}

function isTypeOfLocation(location: string): location is 'Epsom' | 'Cobham' {
  return ['Epsom', 'Cobham'].includes(location)
}

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return `${day}th` // Catch special cases like 11th, 12th, etc.
  switch (day % 10) {
    case 1:
      return `${day}st`
    case 2:
      return `${day}nd`
    case 3:
      return `${day}rd`
    default:
      return `${day}th`
  }
}

function convertTimeToAmPm(time: number): string {
  const hour = Math.floor(time) // Get the hour part (e.g., 11 from 11.15)
  const decimalMinutes = Math.round((time % 1) * 100) / 100
  let minutes = 0

  if (decimalMinutes === 0.15) {
    minutes = 15
  } else if (decimalMinutes === 0.3) {
    minutes = 30
  } else if (decimalMinutes === 0.45) {
    minutes = 45
  } else {
    minutes = 0 // If it's a whole number like 11.0 or 12.0
  }

  const period = hour >= 12 ? 'PM' : 'AM'
  const adjustedHour = hour % 12 === 0 ? 12 : hour % 12 // Convert to 12-hour format

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes // Ensure two digits for minutes

  return `${adjustedHour}:${formattedMinutes} ${period}`
}

function getClassSchedules(
  data: TimetableData,
  locationSelected: 'epsom' | 'cobham',
  classSelected: string,
  numWeeks: number = 2
): ClassObject[] {
  const results: ClassObject[] = []

  const normalizedLocation =
    locationSelected.charAt(0).toUpperCase() + locationSelected.slice(1)

  if (!isTypeOfLocation(normalizedLocation)) {
    console.error(`Location "${locationSelected}" not found in the data.`)
    return results
  }

  const locationData = data?.data?.attributes?.[normalizedLocation]

  if (!locationData) {
    console.error(`Location "${locationSelected}" not found in the data.`)
    return results
  }

  // Iterate over each day in the location
  locationData.forEach((classesOnDay: Classes) => {
    const dayName = classesOnDay.dayName

    // Filter classes that match the selected class name
    const matchingClasses = classesOnDay.classes.filter((cls: Class) =>
      cls.name.toLowerCase().includes(classSelected.toLowerCase())
    )

    // For each matching class, create dates for the next 'numWeeks' worth of occurrences
    matchingClasses.forEach((cls: Class) => {
      for (let i = 0; i < numWeeks; i++) {
        const classDate = getNextClassDate(dayName, i) // Get date for the class
        // Format the day as 26th, 27th, etc. and month as Oct, Nov, etc.

        const { startTime } = cls

        const hours = Math.floor(startTime)
        const minutes = Math.round((startTime - hours) * 100)
        // Set the class time using the calculated hour and minutes
        classDate.setHours(hours, minutes, 0, 0)

        const dayWithOrdinal = getOrdinalSuffix(classDate.getDate())
        const day = classDate.toLocaleString('en-GB', { weekday: 'long' })
        const monthAbbreviation = classDate.toLocaleString('en-GB', {
          month: 'short',
        })

        const formattedTime = convertTimeToAmPm(cls.startTime)

        results.push({
          label: `${day} ${dayWithOrdinal} ${monthAbbreviation} at ${formattedTime}`,
          value: classDate.toISOString(), // Store as ISO string for easy parsing
        })
      }
    })
  })

  return results
}

function getNextClassDate(dayName: string, weekOffset: number): Date {
  const dayOfWeekMap: Record<string, number> = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  }

  const today = new Date()
  const targetDayOfWeek = dayOfWeekMap[dayName]
  const currentDayOfWeek = today.getDay()

  // Calculate the difference in days to the target day of the week
  const daysUntilClass = (targetDayOfWeek + 7 - currentDayOfWeek) % 7

  // Add the offset for the upcoming weeks
  const classDate = new Date()
  classDate.setDate(today.getDate() + daysUntilClass + weekOffset * 7)

  return classDate
}
