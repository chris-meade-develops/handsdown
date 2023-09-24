'use client'
import Section from '@/components/section/Section'
import FaqCard from '../components/FaqCard'
import Image from 'next/image'

export default function Questions({ questions }: { questions: ICms.Faq[] }) {
  return (
    <Section
      bgColor="bg-offBlack"
      className="relative pl-49 pt-49 pb-52 bg-offBlack"
    >
      <div className="flex justify-between">
        <div>
          {questions.map((question, index) => (
            <FaqCard key={index} {...question} />
          ))}
        </div>

        <div>
          <div
            className="h-[472px] w-[440px] bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url("/images/dragons.jpg")`,
            }}
          />
          {/* <Image
            src="/images/dragons.jpg"
            height={472}
            width={440}
            alt="martial arts instruction"
          /> */}
        </div>
      </div>
    </Section>
  )
}
