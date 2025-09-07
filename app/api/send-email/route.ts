import { Form } from '@/components/form/Form'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import NewLeadEmail from '@/emails/LeadEmail'
import CustomerConfirmationEmail from '@/emails/CustomerConfirmation'

const { MJ_API, MJ_SECRET } = process.env

const fromAddress = 'no-reply@handsdownacademies.co.uk'
const leadRecipients = [
  // 'info@handsdownacademies.co.uk',
  // 'vicky.frisby@handsdownacademies.co.uk',
  'chris.meade1989@gmail.com'
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

    const [leadEmailContent, confirmationContent] = await Promise.all([
      render(
        NewLeadEmail({
          parentName,
          name,
          telephone,
          email,
          location,
          students,
          course,
          studentClass,
        })
      ),
      render(
        CustomerConfirmationEmail({
          parentName,
          name,
          location,
          students,
          course,
          studentClass,
          email,
          telephone,
        })
      ),
    ])

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
