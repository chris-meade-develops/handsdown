import { Form } from '@/components/form/Form'
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
    } = data

    const transporter = nodemailer.createTransport({
      host: 'in-v3.mailjet.com',
      port: 587,
      secure: false,
      auth: {
        user: MJ_API,
        pass: MJ_SECRET,
      },
    })

    let emailContent: string

    if (customer === 'parent') {
      emailContent = `
        <h1>Parent Information</h1>
        <p>Name: ${parentName}</p>
        <p>Telephone: ${telephone}</p>
        <p>Email: ${email}</p>
        <p>Selected academy: ${location}</p>
        <br />
        <br />
        <h1>Student Information</h1>
        <br />
        ${students?.map((student) => {
          if (!student) return ''
          if (!student.studentName || !student.course || !student.class)
            return ''
          return `
            <p>Student Name: ${student.studentName}</p>
            <p>Course: ${student.course}</p>
            ${formatClass(student.class)}
            <br />
            <br />
          `
        })}
      `
    } else {
      emailContent = `
        <h1>Student Information</h1>
        <p>Name: ${name}</p>
        <p>Telephone: ${telephone}</p>
        <p>Email: ${email}</p>
        <p>Selected academy: ${location}</p>
        <p>Course: ${course}</p>
        ${formatClass(studentClass)}
      `
    }

    const mailOptions = {
      from: fromAddress,
      to: leadRecipients.join(', '),
      bcc: 'meagle89@outlook.com',
      subject: 'New Form Submission',
      html: emailContent,
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      data: info,
    })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred'

    return NextResponse.json({ status: 500, success: false, errorMessage })
  }
}

function formatClass(classTime?: string): string {
  if (!classTime) return ''
  return `<p>Class: ${new Date(classTime).toLocaleDateString('en-GB', {
    weekday: 'long', // Full weekday (e.g., Monday)
    year: 'numeric', // Full year (e.g., 2024)
    month: 'long', // Full month (e.g., October)
    day: 'numeric', // Day of the month (e.g., 26)
  })} at ${new Date(classTime).toLocaleTimeString('en-GB', {
    hour: '2-digit', // 2-digit hour (e.g., 11)
    minute: '2-digit', // 2-digit minute (e.g., 15)
    hour12: true, // 12-hour format with AM/PM
  })}</p>`
}
