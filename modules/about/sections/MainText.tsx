import PrimaryLink from '@/components/links/PrimaryLink'
import Section from '@/components/section/Section'
import { Quote } from '@/icons'

export default function MainText() {
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
              I think all children and adults should do martial arts its more
              than just about being fit. Its about being disciplined, focused
              and a role model in your community . you don’t have to be a
              competitive champion to be successful with the martial arts and
              there are few other sports that can say the same.
            </p>
            <p className="uppercase font-dead-island font-light text-[20px] tracking-[.75px] leading-[29px] text-primary-text ">
              kalon page
            </p>
            <span className="text-lg font-light ">Co-founder</span>
          </div>
          <div className="my-30">
            <h2 className="font-bold leading-6 text-primary-text mb-13">
              Why are we the best?
            </h2>
            <div>
              <p>
                HD Dragon class is an age specific programme for children aged 5
                – 6 years.
              </p>
              <br />
              <br />
              <p>
                The Hands Down Martial Arts Academy offers highly elite Martial
                Arts training. We have certified Martial Arts Instructors who
                focus on age appropriate Martial Arts teachings for adults and
                children aged 4 and up. Many of our Martial Arts students have
                gone on to become the most talented in the sport. Also, many of
                our instructors hold multiple World Champion and British
                Champion titles.
              </p>
              <br />
              <br />
              <p>
                With technique based work-outs and a professional, fun
                atmosphere, Hands Down Martial Arts Academy provides a wide
                array of Martial Arts programmes and services focusing on
                Kick-Boxing Training. Ranging from our simple, fitness focused
                Fundamental Training, to national and even international-level
                training.
              </p>
              <br />
              <br />
              <p>
                Hands Down Martial Arts Academy wants every student to feel
                comfortable in whichever level of Martial Arts training they
                participate in. Our professional service focuses on assisting
                every student in achieving their own personal target in Martial
                Arts.
              </p>
              <br />
              <br />
              <p>
                Training, especially in Martial Arts, reduces stress, improves
                self-confidence and clarifies mental focus. Thereby guiding
                students to become the best in what they do, whether that is
                education, or profession. Begin your Martial Arts journey by
                enrolling in a course at Hands Down Martial Arts Academy.
              </p>
            </div>
            <div className="my-30">
              <h2 className="font-bold leading-6 text-primary-text mb-13">
                Why are we called hands down?
              </h2>
              <p>
                Hands Down Represents a specific style of fighting. In most
                martial arts defending in combat is dependant on blocking, we
                are more dependant on our distance, timing and movement. This
                allows us to fight with our hands down as we are always two
                steps ahead of our opponents. We know how close our opponents
                need to be to make contact way before our opponents do.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-24">
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
