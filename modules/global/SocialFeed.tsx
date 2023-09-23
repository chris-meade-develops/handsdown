import Section from '@/components/section/Section'
import Icons from '@/components/social/Icons'
import InstagramFeed from '@/components/social/InstagramFeed'
import Heading from '@/components/ui/Heading'

export default function SocialFeed() {
  return (
    <Section
      bgColor="bg-offBlack"
      className="relative pl-8 pr-10 text-base font-medium leading-7 bg-offBlack py-23 md:px-53 md:pt-26 md:pb-49 font-montserrat text-tertiary-text"
    >
      <Heading
        text="Follow us"
        fill="fill-white"
        textColour="text-primary-text"
      />
      <Icons />
      <InstagramFeed />
    </Section>
  )
}
