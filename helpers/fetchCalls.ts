import { Form } from '@/components/form/Form'
import { headers } from './cacheHeaders'

const timetableFetchUrl = '/api/timetable'
const submitFormUrl = '/api/send-email'

interface FetchArgs {
  courseSelected: string
  locationSelected: string
}

export const getTimetableApiReq = async ({
  courseSelected,
  locationSelected,
}: FetchArgs): Promise<ClassObject[]> => {
  const url = `${timetableFetchUrl}?class=${courseSelected}&location=${locationSelected}`
  const res: Response = await fetch(url, headers)

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`)
  }

  const { data, errorMessage, success }: any = await res.json()

  if (!success || !data) throw new Error(errorMessage)

  return data
}

export const submitFormData = async (
  form: Form
): Promise<IApiResponse<any>> => {
  const res: Response = await fetch(submitFormUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  })

  if (!res.ok) {
    throw new Error(`Error: ${res.status} ${res.statusText}`)
  }
  const data = await res.json()

  return data
}
