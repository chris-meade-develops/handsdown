'use client'
import Primary from '../buttons/Primary'
import { useFieldArray, useForm } from 'react-hook-form'
import { useCallback, useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadForm,
} from '../ui/form'
import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'
import Select from '../inputs/CustomSelect'
import { type IInputs } from '@/types/ui/inputs/inputs'
import { Input } from '../ui/input'
import StudentSelector from './StudentSelector'
import { Plus } from 'lucide-react'
import { Minus } from '@/icons'
import { getTimetableApiReq, submitFormData } from '@/helpers/fetchCalls'
import { handleNoClassOptionsOrLoading } from '@/helpers/formHelpers'
import LoadingOverlay from '../ui/LoadingOverlay'
import SuccessOverlay from './SuccessOverlay'

export const StudentSchema = z.object({
  studentName: z.string().optional(),
  course: z.string().optional(),
  class: z.string().optional(),
})

export const FormSchema = z
  .object({
    customer: z.string(),
    location: z.string().min(1, 'Location is required'),
    name: z.string().optional(),
    parentName: z.string().optional(),
    telephone: z.string().min(11, 'Invalid phone number'),
    email: z.string().email('Invalid email'),
    course: z.string().optional(),
    class: z.string().optional(),
    students: z.array(StudentSchema).optional(),
    pot: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.customer === 'student') {
      if (!data.name) {
        ctx.addIssue({
          path: ['name'],
          message: 'Name is required',
          code: 'custom',
        })
      }
      if (!data.course) {
        ctx.addIssue({
          path: ['course'],
          message: 'Course is required',
          code: 'custom',
        })
      }

      if (!data.class) {
        ctx.addIssue({
          path: ['class'],
          message: 'Class is required',
          code: 'custom',
        })
      }
    }

    if (data.customer === 'parent') {
      if (!data.parentName) {
        ctx.addIssue({
          path: ['parentName'],
          message: 'Parent name is required',
          code: 'custom',
        })
      }
      if (!data.students?.length) {
        ctx.addIssue({
          path: ['students'],
          message: 'At least one student is required',
          code: 'custom',
        })
      }

      data?.students?.forEach((student, index) => {
        if (!student.studentName) {
          ctx.addIssue({
            path: ['students', index, 'studentName'],
            message: 'Student name is required',
            code: 'custom',
          })
        }

        if (!student.course) {
          ctx.addIssue({
            path: ['students', index, 'course'],
            message: 'Course is required for the student',
            code: 'custom',
          })
        }

        if (!student.class) {
          ctx.addIssue({
            path: ['students', index, 'class'],
            message: 'Class is required for the student',
            code: 'custom',
          })
        }
      })
    }
  })

export type Form = z.infer<typeof FormSchema>

const classFetchUrl = '/api/form?type=class'

const radioClassNames =
  'relative rounded-full text-tertiary-text h-9 w-9 form-radio border-tertiary-text focus:ring-transparent data-[state=checked]:bg-primary data-[state=checked]:after:absolute data-[state=checked]:after:-translate-x-1/2 data-[state=checked]:after:-translate-y-1/2 data-[state=checked]:after:top-1/2 data-[state=checked]:after:left-1/2 data-[state=checked]:after:w-[7px] data-[state=checked]:after:h-[7px] data-[state=checked]:after:rounded-full data-[state=checked]:after:bg-white'

const textInputLabelClassNames = 'text-base font-normal leading-5 mb-[3px]'

const createDropdownOptions = (data: ICms.CarouselData) =>
  data.data.attributes.cards.cards.map((card) => {
    return { value: card.title, label: card.title }
  })

enum LoadingOptions {
  options = 'options',
  form = 'form',
}

export default function Form({ description }: { description?: string }) {
  const [loading, setLoading] = useState<LoadingOptions[]>([])
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [courseOptions, setCourseOptions] = useState<IInputs.SelectOption[]>([])
  const [classOptions, setClassOptions] = useState<IInputs.SelectOption[]>([])

  const form = useForm<Form>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      customer: 'parent',
      location: 'epsom',
      name: undefined,
      parentName: undefined,
      telephone: undefined,
      email: undefined,
      course: undefined,
      class: undefined,
      students: [
        { studentName: undefined, course: undefined, class: undefined },
      ],
    },
  })

  const {
    control,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = form

  const watchedFields = watch(['customer', 'location', 'course', 'students'])
  const isParent = watchedFields[0] === 'parent'
  const locationValue = watchedFields[1]
  const courseSelected = watchedFields[2]
  const studentValues = watchedFields[3]

  const fetchTimetable = useCallback(async () => {
    try {
      setLoading((prev) =>
        prev.includes(LoadingOptions.options)
          ? [...prev, LoadingOptions.options]
          : prev
      )
      if (!courseSelected) throw new Error('Course is required')

      const data = await getTimetableApiReq({
        courseSelected,
        locationSelected: locationValue,
      })

      setClassOptions(data)
    } catch (error) {
      console.error('fetchClasses error: ', error)
    } finally {
      setLoading((prev) => prev.filter((i) => i !== LoadingOptions.options))
    }
  }, [courseSelected, locationValue, setLoading, setClassOptions])

  const wrappedHandleSubmit = useCallback(async (form: Form) => {
    try {
      if (form.pot) return

      setLoading((prev) =>
        prev.includes(LoadingOptions.form)
          ? [...prev, LoadingOptions.form]
          : prev
      )
      const data: IApiResponse<any> = await submitFormData(form)

      if (!data.success) {
        throw new Error(data.errorMessage)
      }

      setSuccess(true)
    } catch (error) {
      console.error('error: ', error)
      setError(true)
    } finally {
      setLoading((prev) => prev.filter((i) => i !== LoadingOptions.form))
    }
  }, [])

  useEffect(() => {
    if (courseSelected) {
      fetchTimetable()
    }
  }, [courseSelected, fetchTimetable, locationValue])

  // reset to default values when switching between parent and student
  useEffect(() => {
    if (isParent) {
      reset({
        customer: 'parent',
      })
    } else {
      reset({
        customer: 'student',
      })
    }
  }, [isParent, reset])

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'students',
  })

  const fetchCourseOptions = useCallback(async () => {
    try {
      setLoading((prev) =>
        prev.includes(LoadingOptions.options)
          ? [...prev, LoadingOptions.options]
          : prev
      )
      const res: Response = await fetch(classFetchUrl)

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`)
      }

      const { data, errorMessage, success }: IApiResponse<ICms.CarouselData> =
        await res.json()

      if (!success || !data) throw new Error(errorMessage)

      setCourseOptions(createDropdownOptions(data))
    } catch (error) {
      setError(true)
      console.error('fetchClasses error: ', error)
    } finally {
      setLoading((prev) => prev.filter((i) => i !== LoadingOptions.options))
    }
  }, [])

  const handleAddStudent = useCallback(() => {
    append({ studentName: undefined, course: undefined, class: undefined })
  }, [append])

  const handleRemoveStudent = useCallback(() => {
    remove(fields.length - 1)
  }, [fields, remove])

  useEffect(() => {
    fetchCourseOptions()
  }, [fetchCourseOptions])

  const renderStudentFields = useCallback(() => {
    return fields.map((_, index) => (
      <div className="mb-10" key={_.id}>
        <h2 className="font-bold mb-7 opacity-[0.85]">
          Student&apos;s details
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <FormField
            control={control}
            name={`students.${index}.studentName`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className={textInputLabelClassNames}>
                  Student name
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                {errors && errors.students && errors.students[index] && (
                  <FormMessage>
                    {errors?.students?.[index]?.message}
                  </FormMessage>
                )}
              </FormItem>
            )}
          />
          {courseOptions.length ? (
            <StudentSelector
              control={control}
              index={index}
              courseOptions={courseOptions}
              errors={errors}
            />
          ) : (
            <span className="flex items-center h-full">Loading...</span>
          )}
        </div>
      </div>
    ))
  }, [fields, courseOptions, control, errors])

  return (
    <>
      <div className="text-center mb-13">
        {loading.includes(LoadingOptions.form) &&
          !error &&
          !success &&
          'Loading...'}
        {success &&
          'Success! A member of our team will be in touch to confirm your booking.'}
        {error && (
          <span className="text-accent">
            Something went wrong. Please try again later or give us a call on
            03300589474.
          </span>
        )}
        {!loading && !error && !success && description}
      </div>
      <ShadForm {...form}>
        <form
          className="relative flex flex-col w-full text-base font-medium font-montserrat"
          onSubmit={handleSubmit(wrappedHandleSubmit)}
        >
          {loading.includes(LoadingOptions.form) ? <LoadingOverlay /> : null}
          {success ? <SuccessOverlay message="" /> : null}
          <FormField
            control={control}
            name="customer"
            render={({ field }) => (
              <>
                <h2 className="font-bold mb-7 opacity-[0.85]">I am the</h2>
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex gap-10 mb-20 md:gap-20">
                        <FormItem className="flex items-center h-9 w-fit">
                          <FormControl>
                            <RadioGroupItem
                              value="parent"
                              id="parent"
                              className={radioClassNames}
                            />
                          </FormControl>
                          <FormLabel
                            className={textInputLabelClassNames + ' ml-4'}
                          >
                            Parent
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center h-9 w-fit">
                          <FormControl>
                            <RadioGroupItem
                              value="student"
                              id="student"
                              className={radioClassNames}
                            />
                          </FormControl>
                          <FormLabel
                            className={textInputLabelClassNames + ' ml-4'}
                          >
                            Student
                          </FormLabel>
                        </FormItem>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          <FormField
            control={control}
            name="location"
            render={({ field }) => (
              <>
                <h2 className="font-bold mb-7 opacity-[0.85]">
                  Preferred location
                </h2>
                <FormItem>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <div className="flex gap-10 mb-20 md:gap-20">
                        <FormItem className="flex items-center h-9 w-fit">
                          <FormControl>
                            <RadioGroupItem
                              value="epsom"
                              id="epsom"
                              className={radioClassNames}
                            />
                          </FormControl>
                          <FormLabel
                            className={textInputLabelClassNames + ' ml-4'}
                          >
                            Epsom
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center h-9 w-fit">
                          <FormControl>
                            <RadioGroupItem
                              value="cobham"
                              id="cobham"
                              className={radioClassNames}
                            />
                          </FormControl>
                          <FormLabel
                            className={textInputLabelClassNames + ' ml-4'}
                          >
                            Cobham
                          </FormLabel>
                        </FormItem>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          <div className="mb-10">
            <h2 className="font-bold mb-7 opacity-[0.85]">
              {isParent ? "Parent's details" : "Student's details"}
            </h2>
            <div className="md:grid md:grid-cols-2 md:gap-10">
              <FormField
                control={control}
                name={isParent ? 'parentName' : 'name'}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={textInputLabelClassNames}>
                      Your name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="telephone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={textInputLabelClassNames}>
                      Phone number
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={textInputLabelClassNames}>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <FormField
            control={control}
            name="pot"
            render={({ field }) => (
              <FormItem className="hidden">
                <FormControl>
                  <Input tabIndex={-1} autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isParent ? (
            <>
              {renderStudentFields()}
              <div className="flex justify-between border-y border-tertiary-text py-9">
                {studentValues && studentValues?.length > 1 ? (
                  <button
                    type="button"
                    onClick={handleRemoveStudent}
                    className={`flex items-center w-1/2`}
                  >
                    <Minus
                      className={`cursor-pointer transition-all duration-200 w-10 h-10 mr-6 fill-offBlack`}
                    />
                    Remove student
                  </button>
                ) : (
                  <div className="w-1/2" />
                )}
                <button
                  type="button"
                  onClick={handleAddStudent}
                  className={`flex items-center w-1/2`}
                >
                  <Plus
                    className={`cursor-pointer transition-all duration-200 w-10 h-10 mr-6 fill-offBlack`}
                  />
                  Add another student
                </button>
              </div>
            </>
          ) : (
            <>
              <FormField
                control={control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select<{ label: string; value: string }>
                        label="Select your course"
                        placeholder="Select a course..."
                        options={courseOptions}
                        onChange={(selectedOption) =>
                          field.onChange(selectedOption?.value)
                        }
                        selectValue={
                          courseOptions.find(
                            (options) => options.value === field.value
                          ) || { value: '', label: '' }
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="class"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select<{ label: string; value: string }>
                        label="Select your class"
                        options={classOptions}
                        onChange={(selectedOption) =>
                          field.onChange(selectedOption?.value)
                        }
                        selectValue={handleNoClassOptionsOrLoading({
                          fieldValue: field.value,
                          loading: loading.includes(LoadingOptions.options),
                          error,
                          classOptions,
                        })}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </>
          )}

          <div className="w-9/12 mx-auto h-26 mt-14 mb-41 md:w-[302px] md:h-[55px] ">
            <Primary type="submit">Submit</Primary>
          </div>
        </form>
      </ShadForm>
    </>
  )
}
