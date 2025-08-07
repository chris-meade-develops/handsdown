import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Heading,
  Text,
  Row,
  Column,
  Preview,
} from '@react-email/components'

import {
  main,
  logo,
  content,
  boxInfos,
  paragraph,
  containerImageFooter,
  image,
  formatClass,
} from '@/helpers/emailStyling'
import { z } from 'zod'
import { StudentSchema } from '@/components/form/Form'

interface NewLeadEmailProps {
  parentName?: string
  name?: string
  telephone: string
  email: string
  location: string
  course?: string
  studentClass?: string
  students?: z.infer<typeof StudentSchema>[]
  message?: string
}

const URL = 'https://handsdownacademies.co.uk/images'

export const NewLeadEmail = ({
  parentName,
  name,
  telephone,
  email,
  location,
  course,
  studentClass,
  students,
  message,
}: NewLeadEmailProps) => {
  const uppercaseName =
    parentName ?? name ?? ''.replace(/\b\w/g, (char) => char.toUpperCase())

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Booking Request</Preview>
        <Container>
          <Section style={logo}>
            <Img
              src={`${URL}/HDEmailLogoWhite.png`}
              alt="Handsdown Logo"
              style={{ margin: '0 0 auto' }}
            />
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  New Class Booking Request Recieved,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  A new booking request for {location} has been submitted via
                  the Handsdown website. Please see the details below:
                </Heading>

                <Text style={paragraph}>
                  <b>{parentName ? 'Parent ' : 'Student '} Name: </b>
                  {uppercaseName}
                </Text>

                {students && students.length && (
                  <Section>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>For: </b>
                    </Text>
                    {students?.map((s) => (
                      <Section key={s.studentName}>
                        <Text>{s.studentName}</Text>
                        <Text>{s.course}</Text>
                        <Text>{formatClass(s.class, true)}</Text>
                      </Section>
                    ))}
                  </Section>
                )}

                {course && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Selected course: </b>
                    {course}
                  </Text>
                )}

                {studentClass && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Selected class: </b>
                    {formatClass(studentClass, true)}
                  </Text>
                )}

                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Contact number: </b>
                  {telephone}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>email: </b>
                  {email}
                </Text>

                {message && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Additional Message: </b>
                    {message}
                  </Text>
                )}
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src={`${URL}/TakeYourselfToTheNextLevel.png`}
              alt="Take yourself to the next level"
            />
          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            {new Date().getFullYear()} | Handsdown Academies. |
            www.handsdownacademies.co.uk
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export default NewLeadEmail
