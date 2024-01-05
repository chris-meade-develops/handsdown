'use client'
import Section from '@/components/section/Section'
import IframeResizer from 'iframe-resizer-react'
import Heading from '../ui/Heading'

export default function BookAClass(cmsData: ICms.DynamicComponents) {
  const { title, description } = cmsData
  return (
    <div id="#booking-form">
      <Section
        bgColor="bg-secondary"
        className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text md:px-[25%]"
      >
        <Heading fill="fill-primary" text={title} textColour="text-white" />

        <div className="text-center mb-13">{description}</div>

        <IframeResizer
          log={false}
          checkOrigin={false}
          tolerance={10}
          sizeHeight={true}
          heightCalculationMethod="lowestElement"
          minHeight={300}
          src="https://app.glofox.com/portal/#/branch/6516e5ccc24b6fedbd0eb61a/classes-week-view"
          style={{ width: '1px', minWidth: '100%' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          powered by
          <a
            style={{
              textDecoration: 'none',
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
            href="https://www.glofox.com"
          >
            <strong>&nbsp;Glofox</strong>
          </a>
        </div>
      </Section>
    </div>
  )
}
