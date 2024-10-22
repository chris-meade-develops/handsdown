const timetableFetchUrl = '/api/timetable'

interface FetchArgs {
  courseSelected: string
  locationSelected: string
}

export const getTimetableApiReq = async ({
  courseSelected,
  locationSelected,
}: FetchArgs): Promise<ClassObject[]> => {
  const url = `${timetableFetchUrl}?class=${courseSelected}&location=${locationSelected}`
  const res: Response = await fetch(url)

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`)
  }

  const { data, errorMessage, success }: any = await res.json()

  if (!success || !data) throw new Error(errorMessage)

  return data
}
