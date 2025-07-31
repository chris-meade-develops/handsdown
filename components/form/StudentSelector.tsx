'use client'

import { useCallback, useEffect, useState } from 'react'
import Select from '../inputs/CustomSelect'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Control, FieldErrors, useWatch } from 'react-hook-form'
import { IInputs } from '@/types/ui/inputs/inputs'
import { handleNoClassOptionsOrLoading } from '@/helpers/formHelpers'

const timetableFetchUrl = '/api/timetable'

export default function StudentSelector({
  control,
  index,
  courseOptions,
  errors,
}: {
  control: Control<any>
  index: number
  courseOptions: IInputs.SelectOption[]
  errors: FieldErrors<{
    location: string
    customer: string
    telephone: string
    email: string
    name?: string | undefined
    students?:
      | {
          course?: string | undefined
          class?: string | undefined
          studentName?: string | undefined
        }[]
      | undefined
    course?: string | undefined
    class?: string | undefined
    parentName?: string | undefined
  }>
}) {
  const locationSelected = useWatch({ control, name: 'location' })
  const courseSelected = useWatch({ control, name: `students.${index}.course` })
  const [classOptions, setClassOptions] = useState<IInputs.SelectOption[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchTimetable = useCallback(async () => {
    try {
      setLoading(true)
      const url = `${timetableFetchUrl}?class=${courseSelected}&location=${locationSelected}`
      const res: Response = await fetch(url)

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`)
      }

      const { data, errorMessage, success }: any = await res.json()

      if (!success || !data) throw new Error(errorMessage)

      setClassOptions(data)
    } catch (error) {
      setError(true)
      console.error('fetchClasses error: ', error)
    } finally {
      setLoading(false)
    }
  }, [courseSelected, locationSelected, setLoading])

  useEffect(() => {
    if (courseSelected && locationSelected) {
      fetchTimetable()
    }
  }, [courseSelected, fetchTimetable, locationSelected])

  return (
    <>
      <FormField
        control={control}
        name={`students.${index}.course`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select<{ label: string; value: string }>
                options={courseOptions}
                selectValue={
                  courseOptions.find(
                    (option) => option.value === field.value
                  ) || { value: '', label: '' }
                }
                onChange={(selectedOption) =>
                  field.onChange(selectedOption?.value)
                }
                label="Select course"
                error={!!(errors.students && errors.students[index])}
              />
            </FormControl>
            {errors.students && errors.students[index] && (
              <FormMessage>{errors?.students?.[index]?.message}</FormMessage>
            )}
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`students.${index}.class`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select<{ label: string; value: string }>
                options={classOptions}
                selectValue={handleNoClassOptionsOrLoading({
                  fieldValue: field.value,
                  loading,
                  error,
                  classOptions,
                })}
                onChange={(selectedOption) =>
                  field.onChange(selectedOption?.value)
                }
                label="Select class"
                error={!!(errors.students && errors.students[index])}
              />
            </FormControl>
            {errors.students && errors.students[index] && (
              <FormMessage>{errors?.students?.[index]?.message}</FormMessage>
            )}
          </FormItem>
        )}
      />
    </>
  )
}
