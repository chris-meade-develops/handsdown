import Primary from '../links/PrimaryLink'
import Heading from '../ui/Heading'

export default function Intro() {
  return (
    <div className="md:bg-[url('/images/Grunge_texture.png')]">
      <Heading text="who we are" fill="fill-primary" textColour="text-white" />
      <div className="md:max-w-[802px] mx-auto md:mt-15">
        <p className="mb-10 text-lg font-normal leading-9 text-center font-montserrat text-primary-text md:text-[21px] md:leading-[40px] ">
          Hands Down is a family run martial arts club in Surrey set up by
          brothers Michael and Kalon Page, two high achieving martial arts
          pedigrees.
        </p>

        <p className="text-lg font-normal leading-9 text-center font-montserrat text-primary-text md:text-[21px] md:leading-[40px]">
          We offer elite training classes at our academies in Epsom and Cobham
          led by highly accredited and world champion coaches for students of
          all ages, abilities and training goals.
        </p>
      </div>

      <div className="h-25 w-[270px] mx-auto mt-15 mb-40">
        <Primary href="/about">
          <span className="font-montserrat font-extrabold text-white text-lg leading-[1.4px] uppercase">
            Read our story
          </span>
        </Primary>
      </div>
    </div>
  )
}
