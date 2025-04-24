import Section from '@/components/section/Section'
import Heading from '../ui/Heading'
import Form from './Form'

export default function BookAClass(cmsData: ICms.DynamicComponents) {
  const { title, description } = cmsData
  return (
    <div id="#booking-form">
      <Section
        bgColor="bg-secondary"
        className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text md:px-[25%]"
      >
        <Heading text={title} fill="fill-primary" textColour="text-white" />


        <Form description={description} />
      </Section>
    </div>
  )
}
