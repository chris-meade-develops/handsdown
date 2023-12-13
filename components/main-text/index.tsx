import Section from '@/components/section/Section'
import { Quote } from '@/icons'

export default function MainText(cmsProps: ICms.DynamicComponents) {
  const {
    intro_quote: introQuote,
    quote_attribution: attribution,
    question: firstQuestion,
    paragraphs: paragraphsOne,
    second_question: secondQuestion,
    answer_paragraph: paragraphsTwo,
    images,
  } = cmsProps

  const imageOneSrc = images.data[0].attributes.url
  const imageTwoSrc = images.data[1].attributes.url

  return (
    <Section
      bgColor="bg-secondary"
      className="relative text-base font-medium leading-7 pl-49 bg-secondary py-35 font-montserrat text-tertiary-text"
    >
      <div className="md:flex md:justify-between md:gap-[234px] font-montserrat text-lg leading-[26px] font-regular ">
        <div>
          <div className="mb-30">
            <Quote className="h-24 -translate-x-full fill-accent " />
            <p className="text-[22px] font-semibold leading-9 t opacity-85 mb-12">
              {introQuote}
            </p>
            <p className="uppercase font-dead-island font-light text-[20px] tracking-[.75px] leading-[29px] text-primary-text ">
              {attribution}
            </p>
            <span className="text-lg font-light ">Co-founder</span>
          </div>
          <div className="my-30">
            <h2 className="font-bold leading-6 text-primary-text mb-13">
              {firstQuestion}
            </h2>
            <div>
              {paragraphsOne.map((paragraph: ICms.Paragraph, index: number) => {
                if (paragraph.children[0].text.trim() === '')
                  return (
                    <>
                      <br />
                      <br />
                    </>
                  )

                return <p key={index}>{paragraph.children[0].text}</p>
              })}
            </div>
            <div className="my-30">
              <h2 className="font-bold leading-6 text-primary-text mb-13">
                {secondQuestion}
              </h2>
              {paragraphsTwo.map((paragraph: ICms.Paragraph, index: number) => {
                if (paragraph.children[0].text.trim() === '')
                  return (
                    <>
                      <br />
                      <br />
                    </>
                  )

                return <p key={index}>{paragraph.children[0].text}</p>
              })}
            </div>
          </div>
        </div>
        <div className="pt-24">
          <div
            style={{
              backgroundImage: `url(${imageOneSrc})`,
            }}
            className="w-[440px] h-[472px] bg-cover bg-no-repeat bg-center overflow-hidden ml-auto mb-47"
          />

          <div
            style={{
              backgroundImage: `url(${imageTwoSrc})`,
            }}
            className="w-[387px] h-[472px] bg-cover bg-no-repeat bg-center overflow-hidden ml-auto"
          />
        </div>
      </div>
    </Section>
  )
}
