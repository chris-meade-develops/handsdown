import { Form, FormSchema } from '@/components/form/Form'
import {
  defaultEmailContent,
  parentEmailContent,
  confirmationEmailContent,
} from '@/helpers/emailTemplates'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const { MJ_API, MJ_SECRET } = process.env

const fromAddress = 'no-reply@handsdownacademies.co.uk'
const leadRecipients = [
  'info@handsdownacademies.co.uk',
  'vicky.frisby@handsdownacademies.co.uk',
]

export async function POST(request: NextRequest) {
  try {
    if (!MJ_API || !MJ_SECRET) throw new Error('Email credentials not found')

    const data: Form = await request.json()
    // const result = FormSchema.safeParse(data)

    if (!data) throw new Error('No data received')

    const {
      customer,
      location,
      name,
      parentName,
      telephone,
      email,
      course,
      class: studentClass,
      students,
      pot,
    } = data

    if (pot) throw new Error('Invalid request')

    const transporter = nodemailer.createTransport({
      host: 'in-v3.mailjet.com',
      port: 587,
      secure: false,
      auth: {
        user: MJ_API,
        pass: MJ_SECRET,
      },
    })

    let leadEmailContent: string
    let confirmationContent: string

    if (customer === 'parent') {
      if (!parentName) throw new Error('Parent name not found')
      if (!students) throw new Error('Students not found')

      leadEmailContent = parentEmailContent({
        telephone,
        email,
        parentName,
        students,
        location,
      })

      confirmationContent = confirmationEmailContent({
        telephone,
        email,
        parentName,
        students,
        location,
      })
    } else {
      if (!name) throw new Error('Name not found')
      if (!studentClass) throw new Error('Class not found')
      if (!course) throw new Error('Course not found')

      leadEmailContent = defaultEmailContent({
        name,
        telephone,
        email,
        location,
        course,
        studentClass,
      })

      confirmationContent = confirmationEmailContent({
        name,
        telephone,
        email,
        location,
        course,
        studentClass,
      })
    }

    const leadMailOptions = {
      from: fromAddress,
      to: leadRecipients.join(', '),
      subject: 'New Form Submission',
      html: leadEmailContent,
    }

    const confirmationMailOptions = {
      from: fromAddress,
      to: email,
      subject: 'Your Class Confirmation',
      html: confirmationContent,
    }

    const [leadInfo, confirmationInfo] = await Promise.all([
      transporter.sendMail(leadMailOptions),
      transporter.sendMail(confirmationMailOptions),
    ])

    return NextResponse.json({
      success: true,
      leadInfo,
      confirmationInfo,
    })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred'
    return NextResponse.json({ status: 500, success: false, errorMessage })
  }
}
