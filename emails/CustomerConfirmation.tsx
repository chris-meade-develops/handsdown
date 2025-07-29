import { StudentSchema } from '@/components/form/Form'
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
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { z } from 'zod'

interface ConfirmationEmailProps {
  name?: string
  parentName?: string
  email: string
  location?: string
  students?: z.infer<typeof StudentSchema>[]
  telephone: string
  course?: string
  studentClass?: string
}

const URL = 'https://handsdownacademies.co.uk/images'

const CustomerConfirmationEmail = ({
  name,
  parentName,
  location,
  students,
  course,
  studentClass,
}: ConfirmationEmailProps) => {
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
              src={`${URL}/nav_logo.png`}
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
                  Hi {uppercaseName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Thank you for booking with{' '}
                  <strong>Handsdown Academies</strong>! Your booking request has
                  been confirmed. Here’s what we got:
                </Heading>

                {students && students.length ? (
                  <Section>
                    <Text style={paragraph}>
                      <b>You have booked: </b>
                    </Text>
                    {students.map((s) => (
                      <Text
                        key={s.studentName}
                        style={{ ...paragraph, marginTop: -5 }}
                      >
                        {s.studentName} into {s.course} on{' '}
                        {formatClass(s.class, true)}
                      </Text>
                    ))}
                  </Section>
                ) : (
                  <Section>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>You have booked with: </b>
                      Handsdown {location}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>For: </b>
                      {course}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Date: </b>
                      {formatClass(studentClass, true)}
                    </Text>
                  </Section>
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

export default CustomerConfirmationEmail
