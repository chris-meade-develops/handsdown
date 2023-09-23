import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'
import Image from 'next/image'

export default function MeetTheFounders() {
  return (
    <section className="pb-48 pt-26 bg-secondary">
      <div className=" mb-43">
        <Heading
          text="Meet the founders"
          fill="fill-black"
          textColour="text-white"
        />
      </div>
      <div className="flex flex-col  max-w-[992px] mx-auto text-primary-text text-lg">
        <div className="flex mb-46">
          <div
            className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat mr-44"
            style={{
              backgroundImage: `url("/images/coaches/michael.png")`,
            }}
          />
          <div className="w-full max-w-[625px] pt-7 ">
            <h3 className="font-bold leading-6 text-primary-text mb-13">
              Michael Page
            </h3>
            <p className="font-light mb-14">
              Michael Page is the older of the two brothers. He has coached
              Kalon throughout his international competitive career. Michael
              Page won 10 world kickboxing titles before turning pro and
              competing in mixed martial arts. He is now 20/2 and has taken the
              MMA world by storm with his unique Hands down fighting style which
              is proving to be extremely successful. His First UK bout in the 02
              Arena went Viral when he finished the fight in the second round
              with Spectacular Fashion.
            </p>
            <div className="h-25 w-53">
              <PrimaryLink href="/coaches/michael">
                <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                  view profile
                </span>
              </PrimaryLink>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full max-w-[625px] pt-7 ">
            <h3 className="font-bold leading-6 text-primary-text mb-13">
              Kalon Page
            </h3>
            <p className="font-light mb-14">
              Kalon Page is one of the most successful freestyle kick-boxers in
              the world. With 6 World titles in 4 different organisations.
              Winning his first national event aged 5 and his first world title
              aged 10. Kalon has fought and beat some of the best athletes in
              the sport and is well known on the kickboxing circuit for his
              acheivments. He has won every event he has attended at least once.
            </p>
            <div className="h-25 w-53">
              <PrimaryLink href="/coaches/kalon">
                <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                  view profile
                </span>
              </PrimaryLink>
            </div>
          </div>
          <div
            className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat ml-44"
            style={{
              backgroundImage: `url("/images/coaches/kalon.png")`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
