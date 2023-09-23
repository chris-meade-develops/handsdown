import Section from '@/components/section/Section'
import Form from '@/components/form'
import Heading from '@/components/ui/Heading'

export default function BookAClass() {
  return (
    <Section
      bgColor="bg-secondary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text md:px-[25%]"
    >
      <Heading
        text="book a trial class"
        fill="fill-primary"
        textColour="text-white"
      >
        <h2
          className={`relative z-1 max-w-[155px] uppercase font-montserrat font-extrabold text-xl leading-6 text-center text-white -translate-x-1/2 -translate-y-1/2 left-[38%] top-1/4 whitespace-nowrap`}
        >
          book a trial class
        </h2>
      </Heading>
      <div className="text-center mb-13">
        Fill in the form below and we’ll be in touch to book you in to try one
        of our classes
      </div>
      <Form />
    </Section>
  )
}
