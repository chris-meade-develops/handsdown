'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from '../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import {
  Control,
  FieldErrors,
  useWatch,
  UseFormSetValue,
} from 'react-hook-form'
import { IInputs } from '@/types/ui/inputs/inputs'
import { handleNoClassOptionsOrLoading } from '@/helpers/formHelpers'
import { Form } from './Form'

const timetableFetchUrl = '/api/timetable'

type Course = {
  name: string
  minAge: number
  maxAge: number | null
}

const courses: Course[] = [
  { name: 'HD Dragons', minAge: 4, maxAge: 6 },
  { name: 'Children', minAge: 7, maxAge: 9 },
  { name: 'Juniors', minAge: 10, maxAge: 17 },
  { name: 'Adults', minAge: 18, maxAge: null },
]

function getCourseForAge(age: number): string | null {
  const course = courses.find(
    (c) => age >= c.minAge && (c.maxAge === null || age <= c.maxAge)
  )

  return course ? course.name : null // null if no match
}

const getAgeAppropriateCourses = (
  courseOptions: IInputs.SelectOption[],
  studentAge?: number
) => {
  if (!studentAge) return courseOptions

  const age = studentAge

  let allowedCourse = getCourseForAge(age)

  const filteredCourse = courseOptions.filter((course) => {
    if (!allowedCourse) throw new Error('innappropriate age')
    return course.label === allowedCourse
  })

  return filteredCourse
}

export default function StudentSelector({
  control,
  index,
  courseOptions,
  errors,
  studentAge,
  setValue,
}: {
  control: Control<any>
  index: number
  courseOptions: IInputs.SelectOption[]
  studentAge?: number
  setValue: UseFormSetValue<Form>
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
          studentDateOfBirth?: string | undefined
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

  useEffect(() => {
    if (studentAge) {
      const filteredOptions = getAgeAppropriateCourses(
        courseOptions,
        studentAge
      )
      const currentCourseStillValid = filteredOptions.some(
        (option) => option.value === courseSelected
      )

      if (courseSelected && !currentCourseStillValid) {
        setValue(`students.${index}.course`, undefined)
        setValue(`students.${index}.class`, undefined)
      }
    }
  }, [studentAge, courseOptions, courseSelected, control, index, setValue])

  const filteredCourseOptions = getAgeAppropriateCourses(
    courseOptions,
    studentAge
  )

  const isAgeSelected = studentAge !== undefined && studentAge > 0

  const availableCourseOptions =
    filteredCourseOptions.length > 0 ? filteredCourseOptions : courseOptions

  return (
    <>
      <FormField
        control={control}
        name={`students.${index}.course`}
        render={({ field }) => (
          <FormItem>
            <FormLabel
              className={`text-base font-normal leading-5 mb-[3px] ${
                !!(errors.students && errors.students[index])
                  ? '!text-red-500'
                  : ''
              } ${!isAgeSelected ? 'opacity-50' : ''}`}
            >
              Select course
            </FormLabel>
            <FormControl>
              <Select
                disabled={!isAgeSelected}
                value={field.value || ''}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  className={
                    !!(errors.students && errors.students[index])
                      ? 'border-2 border-red-500'
                      : ''
                  }
                >
                  <SelectValue
                    placeholder={
                      isAgeSelected
                        ? 'Select a course...'
                        : 'Please select student age first'
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {isAgeSelected &&
                    availableCourseOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormControl>
            {!isAgeSelected && (
              <p className="mt-1 text-sm text-gray-500">
                Please select the student&apos;s age to see available courses
              </p>
            )}
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
            <FormLabel
              className={`text-base font-normal leading-5 mb-[3px] ${
                !!(errors.students && errors.students[index])
                  ? '!text-red-500'
                  : ''
              } ${!isAgeSelected || !courseSelected ? 'opacity-50' : ''}`}
            >
              Select class
            </FormLabel>
            <FormControl>
              <Select
                disabled={!isAgeSelected || !courseSelected || loading}
                value={field.value || ''}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  className={
                    !!(errors.students && errors.students[index])
                      ? 'border-2 border-red-500'
                      : ''
                  }
                >
                  <SelectValue
                    placeholder={
                      loading && isAgeSelected && courseSelected
                        ? 'Loading classes...'
                        : !isAgeSelected
                          ? 'Please select student age first'
                          : !courseSelected
                            ? 'Please select a course first'
                            : 'Select a class...'
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {loading && isAgeSelected && courseSelected ? (
                    <>
                      <SelectItem value="loading-1" disabled>
                        ● ● ● Loading...
                      </SelectItem>
                      <SelectItem value="loading-2" disabled>
                        ● ● ● Loading...
                      </SelectItem>
                      <SelectItem value="loading-3" disabled>
                        ● ● ● Loading...
                      </SelectItem>
                    </>
                  ) : (
                    isAgeSelected &&
                    courseSelected &&
                    classOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </FormControl>
            {!isAgeSelected && (
              <p className="mt-1 text-sm text-gray-500">
                Please select the student&apos;s age and course to see available
                classes
              </p>
            )}
            {isAgeSelected && !courseSelected && (
              <p className="mt-1 text-sm text-gray-500">
                Please select a course to see available classes
              </p>
            )}
            {loading && isAgeSelected && courseSelected && (
              <p className="mt-1 text-sm text-gray-500">
                Loading available classes...
              </p>
            )}
            {errors.students && errors.students[index] && (
              <FormMessage>{errors?.students?.[index]?.message}</FormMessage>
            )}
          </FormItem>
        )}
      />
    </>
  )
}
