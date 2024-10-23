'use client'

import Section from '@/components/section/Section'
import Heading from '../ui/Heading'
import Form from './Form'
import { useState } from 'react'

declare global {
  interface Window {
    BsportWidget: any
  }
}

export default function BookAClass(cmsData: ICms.DynamicComponents) {
  const { title, description } = cmsData
  const [formState, setFormState] = useState({
    loading: false,
    error: false,
    success: false,
  })

  const { success, loading, error } = formState

  return (
    <div id="#booking-form">
      <Section
        bgColor="bg-secondary"
        className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text md:px-[25%]"
      >
        <Heading text={title} fill="fill-primary" textColour="text-white" />
        <div className="text-center mb-13">
          {loading && !error && !success && 'Loading...'}
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

        <Form formState={formState} setFormState={setFormState} />
      </Section>
    </div>
  )
}
