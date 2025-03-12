import { StudentSchema } from '@/components/form/Form'
import { z } from 'zod'

type Student = z.infer<typeof StudentSchema>

type EmailContent = {
  telephone: string
  email: string
  location: string
}

interface DefaultEmailContent extends EmailContent {
  name: string
  course: string
  studentClass: string
}

interface ParentContent extends EmailContent {
  parentName: string
  students: Student[]
}

type ConfirmationEmailProps = Partial<ParentContent & DefaultEmailContent>

export const parentEmailContent = ({
  parentName,
  telephone,
  email,
  location,
  students,
}: ParentContent) => `
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
export const defaultEmailContent = ({
  name,
  telephone,
  email,
  location,
  course,
  studentClass,
}: DefaultEmailContent) =>
  `<h1>Student Information</h1>
  <p>Name: ${name}</p>
  <p>Telephone: ${telephone}</p>
  <p>Email: ${email}</p>
  <p>Selected academy: ${location}</p>
  <p>Course: ${course}</p>
  ${formatClass(studentClass)}`

export const confirmationEmailContent = ({
  name,
  parentName,
  telephone,
  email,
  location,
  students,
  course,
  studentClass,
}: ConfirmationEmailProps) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Handsdown Martial Arts Class Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #000;">
      <table role="presentation" width="100%" style="border-collapse: collapse;">
        <tr>
          <td align="center" style="padding: 20px 0;">
            <!-- Inline SVG Logo -->
            <img
              src="https://handsdownacademies.co.uk/images/HDLogoWhite.png"
              alt="Handsdown Academies"
              width="200"
              height="200"
              style="height: 150px; width: auto;"
            />
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table role="presentation" width="600" style="border-collapse: collapse; background-color: #f5f5f5; border-radius: 8px; padding: 20px; font-family: 'Montserrat', sans-serif;">
              <tr>
                <td style="color: #000000; font-size: 16px; padding: 0 20px;">
                  <p>Hi ${parentName || name},</p>
                  <br />
                  <p>Your martial arts class has been confirmed at <strong>${location}</strong>.</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px;">
                  <table role="presentation" width="100%" style="border-collapse: collapse; color: #231F20; font-size: 16px;">
                    ${
                      parentName
                        ? `
                    <tr>
                      <td colspan="2" style="padding: 0;">
                        <table role="presentation" width="100%" style="border-collapse: collapse;">
                          <thead>
                            <tr>
                              <th style="padding: 5px; border-bottom: 1px solid #ddd; text-align: left;">Student Name</th>
                              <th style="padding: 5px; border-bottom: 1px solid #ddd; text-align: left;">Course</th>
                              <th style="padding: 5px; border-bottom: 1px solid #ddd; text-align: left;">Class</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${students
                              ?.map(
                                (student: Student) => `
                              <tr>
                                <td style="padding: 5px;">${
                                  student.studentName
                                }</td>
                                <td style="padding: 5px;">${student.course}</td>
                                <td style="padding: 5px;">${formatClass(
                                  student.class,
                                  false
                                )}</td>
                              </tr>
                            `
                              )
                              .join('')}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    `
                        : `
                    <tr>
                      <td style="padding: 5px 0; width: 30%;">Telephone:</td>
                      <td style="padding: 5px 0;">${telephone}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0;">Email:</td>
                      <td style="padding: 5px 0;">${email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0;">Location:</td>
                      <td style="padding: 5px 0;">${location}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0;">Name:</td>
                      <td style="padding: 5px 0;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0;">Course:</td>
                      <td style="padding: 5px 0;">${course}</td>
                    </tr>
                    <tr>
                      <td style="padding: 5px 0;">Class:</td>
                      <td style="padding: 5px 0;">${formatClass(
                        studentClass
                      )}</td>
                    </tr>
                    `
                    }
                  </table>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; padding: 20px; color: #231F20; font-size: 16px;">
                  <p style="margin-top: 20px;">We're excited to see you in class!</p>
                  <p style="margin: 5px 0 0;">The Handsdown Team</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `

function formatClass(classTime?: string, removeClass?: boolean): string {
  if (!classTime) return ''
  return `<p>${removeClass ? '' : 'Class'}: ${new Date(
    classTime
  ).toLocaleDateString('en-GB', {
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
