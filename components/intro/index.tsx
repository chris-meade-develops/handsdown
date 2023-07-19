import Primary from '../links/primary'
import Heading from '../ui/heading'

export default function Intro() {
  return (
    <div>
      <Heading text="who we are" fill="fill-primary" textColour="text-white" />
      <p className="mb-10 text-lg font-normal leading-9 text-center font-montserrat text-primary-text">
        Hands Down is a family run martial arts club in Surrey set up by
        brothers Michael and Kalon Page, two high achieving martial arts
        pedigrees.
      </p>
      
      <p className="text-lg font-normal leading-9 text-center font-montserrat text-primary-text">
        We offer elite training classes at our academies in Epsom and Cobham led
        by highly accredited and world champion coaches for students of all
        ages, abilities and training goals.
      </p>

      <div className="h-25 w-[270px] mx-auto mt-15 mb-43">
        <Primary href="/about">
          <span className="font-montserrat font-extrabold text-white text-lg leading-[1.4px] uppercase">
            Read our story
          </span>
        </Primary>
      </div>
    </div>
  )
}
