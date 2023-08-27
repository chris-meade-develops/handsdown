import PrimaryLink from '@/components/links/PrimaryLink'
import Section from '@/components/section/Section'

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

export default function MainText() {
  return (
    <Section
      bgColor="bg-secondary"
      className="relative text-base font-medium leading-7 pl-49 bg-secondary py-35 font-montserrat text-tertiary-text"
    >
      <div className="md:flex md:justify-between md:gap-[234px] font-montserrat text-lg leading-[26px] font-regular ">
        <div>
          <div className="my-30">
            <h2 className="font-bold leading-6 text-primary-text mb-13">
              About the class
            </h2>
            <div>
              <p>
                HD Dragon class is an age specific programme for children aged 5
                – 6 years. <br /> <br /> Our programme teaches not only Martial
                Arts, it teaches children to be good citizens and prepares them
                for adult life. Therefore units in safety and life skills, will
                aid them in becoming well-rounded individuals, as a result of
                developing their social, emotional, physical and intellectual
                skills.
              </p>
            </div>
          </div>
          <div className="my-30">
            <h2 className="font-bold leading-6 text-primary-text mb-13">
              What we will learn
            </h2>

            <ul className="grid grid-cols-3">
              {learningPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="my-30">
            <h2 className="font-bold leading-6 text-primary-text mb-13">
              How it works
            </h2>
            <div>
              <p>
                The HD Dragon Programme runs on a 10 week cycle. In each cycle
                your child will learn a life skill and a safety skill. They will
                learn Martial Arts techniques relevant to their grade in the HD
                Dragon syllabus. At the end of each cycle they will be take part
                in a grading. As a result each student who enters the grading
                will earn their next grade and receive the appropriate belt and
                certificate.
              </p>
              <br />
              <br />
              <p>
                The first two lessons is an introduction to the course and after
                the second week, your child will have earned their first belt:
                The white belt.
              </p>
              <br />
              <br />
              <p>
                The total length of the course will be approximately 12 months.
                Their belts will all be white belts with a different colour
                stripe through each one. The colour order is as follows: white,
                red, green, yellow, brown, HD Dragon Black Belt.
              </p>
              <br />
              <br />
              <p>
                When your child completes the HD Dragon Programme they will then
                be promoted into Children’s Class. Children (ages 7-9)
              </p>
            </div>
          </div>

          <div className="w-[305px] h-27">
            <PrimaryLink href="/timetable">
              <span className="text-white uppercase font-montserrat font-extrabold leading-[19px] text-base tracking-widest">view timetable</span>
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
