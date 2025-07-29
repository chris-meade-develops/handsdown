'use client'

import { useState } from 'react'
import { X, Check } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Select from '../inputs/CustomSelect'
import { Textarea } from '../ui/textarea'
import { Skeleton } from '@/components/ui/skeleton'

const API_URL = '/api/announcement'

const announcementFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  telephone: z.string().regex(/^[\d+\s()\-]{7,20}$/, 'Invalid phone number'),
  session: z.string().min(1, 'Please select a session'),
  message: z.string().optional(),
  honeypot: z.string().max(0, 'Invalid form submission'),
})

export default function AnnouncementBar({
  promoBlock,
}: {
  promoBlock: ICms.Announcement
}) {
  const [isVisible, setIsVisible] = useState(true)

  //API state
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const form = useForm<z.infer<typeof announcementFormSchema>>({
    resolver: zodResolver(announcementFormSchema),
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      session: '',
      message: '',
      honeypot: '',
    },
  })
  const { register } = form
  const onSubmit = async (data: z.infer<typeof announcementFormSchema>) => {
    try {
      setLoading(true)

      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`)
      }

      setSuccess(true)
    } catch (error: unknown) {
      console.error(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const { message, image, session } = promoBlock.data.attributes.Announcement[0]

  const sessionOptions = session
    .map((s) => {
      if (!s.Date) return
      const now = new Date()
      const dateObj = new Date(s.Date)
      if (dateObj.setHours(0, 0, 0, 0) <= now.setHours(0, 0, 0, 0)) return
      const day = dateObj.getDate()
      const month = dateObj.toLocaleString('default', { month: 'long' })
      const suffix = ((d) => {
        if (d > 3 && d < 21) return 'th'
        switch (d % 10) {
          case 1:
            return 'st'
          case 2:
            return 'nd'
          case 3:
            return 'rd'
          default:
            return 'th'
        }
      })(day)

      return {
        label: `${day}${suffix} ${month}`,
        value: s.Date,
      }
    })
    .filter(Boolean) as { label: string; value: string }[]

  if (!isVisible) return null

  return (
    <AlertDialog
      onOpenChange={() => {
        form.reset()
        setLoading(false)
        setError(false)
        setSuccess(false)
      }}
    >
      {/* Announcement bar with trigger */}
      <div className="relative w-full px-4 py-2 text-sm font-medium text-center text-white bg-accent">
        <div className="flex items-center justify-center mx-auto max-w-7xl">
          <AlertDialogTrigger asChild>
            <button>
              🥋 {message}{' '}
              <span className="ml-1 font-bold underline">Book today!</span>
            </button>
          </AlertDialogTrigger>

          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="absolute z-50 p-1 transition-colors transform -translate-y-1/2 rounded right-4 top-1/2 hover:bg-red-700"
            aria-label="Close announcement"
          >
            <X className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Modal content */}
      <AlertDialogContent className="z-10 max-w-5xl p-10 overflow-scroll bg-secondary max-h-[75vh] sm:max-h-screen sm:overflow-visible">
        <AlertDialogHeader className="flex flex-row justify-between">
          <div>
            <AlertDialogTitle>Book Your Spot</AlertDialogTitle>
            <AlertDialogDescription>
              Please fill in your details below to book a spot.
            </AlertDialogDescription>
          </div>

          <AlertDialogCancel asChild>
            <Button
              size="icon"
              variant="ghost"
              className="p-8 bg-transparent border-none rounded-full"
            >
              <X className="w-10 h-10" />
            </Button>
          </AlertDialogCancel>
        </AlertDialogHeader>

        {/* Body content: loading, success, error or form */}
        {loading ? (
          <div className="mt-6">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {/* Form skeleton */}
              <div className="space-y-8 md:col-span-2">
                <div className="flex gap-4">
                  <Skeleton className="w-1/2 h-12" />
                  <Skeleton className="w-1/2 h-12" />
                </div>
                <div className="flex gap-4">
                  <Skeleton className="w-1/2 h-12" />
                  <Skeleton className="w-1/2 h-12" />
                </div>
                <Skeleton className="w-full h-32" />
                <div className="flex gap-4">
                  <Skeleton className="w-1/2 h-20" />
                  <Skeleton className="w-1/2 h-20" />
                </div>
              </div>
              {/* Image skeleton */}
              <div className="col-span-1">
                <Skeleton className="w-full h-full" />
              </div>
            </div>
          </div>
        ) : success ? (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center mt-6 space-y-8 sm:col-span-2">
              <Check className="w-32 h-32 text-green-500" />
              <p className="mt-8 text-lg font-medium text-center">
                Thank you! Your booking request has been received. We&#39;ll be
                in touch soon.
              </p>
              <AlertDialogCancel asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-20 rounded-lg w-30"
                >
                  Close
                </Button>
              </AlertDialogCancel>
            </div>
            {image?.data.attributes.formats && (
              <div className="w-full col-span-1 mb-4">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={
                      image.data.attributes.formats.small.url ?? undefined
                    }
                  />
                  <source
                    media="(max-width: 1024px)"
                    srcSet={
                      image.data.attributes.formats.medium.url ?? undefined
                    }
                  />
                  <img
                    src={image.data.attributes.formats.large.url ?? undefined}
                    alt={
                      image.data.attributes.alternativeText || 'Camp Leaflet'
                    }
                    className="w-full rounded"
                  />
                </picture>
              </div>
            )}
          </div>
        ) : error ? (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center mt-6 space-y-8 sm:col-span-2">
              <X className="w-16 h-16 text-red-500" />
              <p className="mt-4 text-lg font-medium text-center text-red-600">
                Oops! Something went wrong. Please try again later.
              </p>
              <AlertDialogCancel asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-20 rounded-lg w-30"
                >
                  Close
                </Button>
              </AlertDialogCancel>
            </div>
            {image?.data.attributes.formats && (
              <div className="w-full col-span-1 mb-4">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={
                      image.data.attributes.formats.small.url ?? undefined
                    }
                  />
                  <source
                    media="(max-width: 1024px)"
                    srcSet={
                      image.data.attributes.formats.medium.url ?? undefined
                    }
                  />
                  <img
                    src={image.data.attributes.formats.large.url ?? undefined}
                    alt={
                      image.data.attributes.alternativeText || 'Camp Leaflet'
                    }
                    className="w-full rounded"
                  />
                </picture>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {/* Lead capture form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 sm:col-span-2"
              >
                <input
                  type="text"
                  {...register('honeypot')}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />
                <div className="flex gap-4">
                  <FormField
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-4">
                  <FormField
                    name="telephone"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Your contact number"
                            pattern="[\d+\s()-]{7,20}"
                            className="flex-1"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="session"
                    render={({ field }) => (
                      <FormItem className="w-1/2">
                        <FormControl>
                          <Select<{ label: string; value: string }>
                            className="flex-1"
                            label="Select your session"
                            placeholder="Select a session..."
                            options={sessionOptions}
                            onChange={(selectedOption) =>
                              field.onChange(selectedOption?.value)
                            }
                            selectValue={
                              sessionOptions.find(
                                (options) => options.value === field.value
                              ) || { value: '', label: '' }
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional message (optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Any questions?" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <AlertDialogFooter className="flex flex-row items-center gap-2 ">
                  <AlertDialogCancel asChild className="mt-0">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-1/2 h-20 rounded-lg"
                    >
                      Cancel
                    </Button>
                  </AlertDialogCancel>

                  <Button
                    size="lg"
                    variant="default"
                    type="submit"
                    className="w-1/2 h-20 rounded-lg bg-accent hover:bg-accent/80"
                  >
                    Submit
                  </Button>
                </AlertDialogFooter>
              </form>
            </Form>
            {/* Camp leaflet image */}
            {image?.data.attributes.formats && (
              <div className="w-full max-w-xs col-span-1 mb-4">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet={
                      image.data.attributes.formats.small.url ?? undefined
                    }
                  />
                  <source
                    media="(max-width: 1024px)"
                    srcSet={
                      image.data.attributes.formats.medium.url ?? undefined
                    }
                  />
                  <img
                    src={image.data.attributes.formats.large.url ?? undefined}
                    alt={
                      image.data.attributes.alternativeText || 'Camp Leaflet'
                    }
                    className="w-full rounded"
                  />
                </picture>
              </div>
            )}
          </div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  )
}
