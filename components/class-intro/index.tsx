import PrimaryLink from '@/components/links/PrimaryLink'
import Section from '@/components/section/Section'
import isCommaSeparatedWords from '@/helpers/stringHelper'

const learningPoints = [
  'Balance',
  'Coordination',
  'Discipline',
  'Fitness',
  'Focus',
  'Co-operation',
  'Listening',
  'Respect',
  'Independence',
  'Confidence',
  'Memory',
  'Teamwork',
  'Safety',
]

export default function MainText(cmsData: ICms.DynamicComponents) {
  if (!cmsData) return null

  return (
    <Section
      bgColor="bg-secondary"
      className="relative text-base font-medium leading-7 pl-49 bg-secondary py-35 font-montserrat text-tertiary-text"
    >
      <div className="md:flex md:justify-between md:gap-[234px] font-montserrat text-lg leading-[26px] font-regular ">
        <div>
          {cmsData.questions.map(
            (
              question: { id: number; title: string; description: string },
              index: number
            ) => {
              const { title, description } = question
              if (isCommaSeparatedWords(question.description)) {
                const wordArray = question.description
                  .split(',')
                  .map((word) => word.trim())

                return (
                  <div className="my-30" key={title}>
                    <h2 className="font-bold leading-6 text-primary-text mb-13">
                      {title}
                    </h2>

                    <ul className="grid grid-cols-3">
                      {wordArray.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )
              }
              return (
                <div className="my-30" key={title}>
                  <h2 className="font-bold leading-6 text-primary-text mb-13">
                    {title}
                  </h2>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              )
            }
          )}

          <div className="w-[305px] h-27">
            <PrimaryLink href="/timetable">
              <span className="text-white uppercase font-montserrat font-extrabold leading-[19px] text-base tracking-widest">
                view timetable
              </span>
            </PrimaryLink>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundImage: 'url("/images/dragons.jpg")' }}
            className="w-[440px] h-[472px] bg-cover bg-no-repeat bg-center overflow-hidden ml-auto mb-47"
          />

          <div
            style={{ backgroundImage: 'url("/images/dragon-certificate.jpg")' }}
            className="w-[387px] h-[472px] bg-cover bg-no-repeat bg-center overflow-hidden ml-auto"
          />
        </div>
      </div>
    </Section>
  )
}
