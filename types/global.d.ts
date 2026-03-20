interface IApiResponse<T> {
  success: boolean
  errorMessage?: string
  data?: T
  status: number
}

type ClassObject = {
  label: string
  value: string
}

type Class = {
  id: number
  endTime: number
  startTime: number
  name: string
  comingSoon?: boolean
}

type Classes = {
  id: number
  dayName: string
  classes: Class[]
  coming_soon?: boolean
}

type TimetableData = {
  data: {
    attributes: {
      Cobham: Classes[]
      Epsom: Classes[]
      createdAt: string
      updatedAt: string
      publishedAt: string
    }
    id: number
  }
}
