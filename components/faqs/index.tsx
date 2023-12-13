'use client'
import Section from '@/components/section/Section'
import FaqCard from '@/components/cards/FaqCard'

export default function Faqs(cmsData: ICms.DynamicComponents) {
  const { questions, image } = cmsData

  return (
    <Section
      bgColor="bg-offBlack"
      className="relative pl-49 pt-49 pb-52 bg-offBlack"
    >
      <div className="flex justify-between">
        <div>
          {questions.map((question: ICms.Faq, index: number) => (
            <FaqCard key={index} {...{ ...question, number: index }} />
          ))}
        </div>

        <div>
          {image && (
            <div
              className="h-[472px] w-[440px] bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${image.src.data.attributes.url})`,
              }}
            />
          )}
        </div>
      </div>
    </Section>
  )
}
