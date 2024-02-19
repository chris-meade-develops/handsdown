'use client'
import Section from '@/components/section/Section'
import IframeResizer from 'iframe-resizer-react'
import Heading from '../ui/Heading'
import { useState } from 'react'
import Primary from '../buttons/Primary'
import ArrowButton from '../carousel/ArrowButton'

export default function BookAClass(cmsData: ICms.DynamicComponents) {
  const { title, description, url, academyUrls } = cmsData
  const [formUrl, setFormUrl] = useState<string | null>(null)

  const handleAcademySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    const url = academyUrls[name]
    setFormUrl(url)
  }

  return (
    <div id="#book-class">
      <Section
        bgColor="bg-secondary"
        className="relative pl-8 pr-10 text-base font-medium leading-7 bg-secondary py-23 font-montserrat text-tertiary-text md:px-[25%]"
      >
        <Heading fill="fill-primary" text={title} textColour="text-white" />

        {formUrl === null ? (
          <div className="mx-auto mb-40 w-fit">
            <h3 className="text-center mb-13">Select your academy</h3>
            <div className="flex gap-10">
              <div className="w-50 h-25">
                <Primary
                  type="button"
                  name="epsom"
                  onClick={handleAcademySelect}
                >
                  <span className="flex items-center justify-center text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text sm:text-base sm:tracking-widest">
                    Epsom
                  </span>
                </Primary>
              </div>

              <div className="w-50 h-25">
                <Primary
                  type="button"
                  name="cobham"
                  onClick={handleAcademySelect}
                >
                  <span className="flex items-center justify-center text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text sm:text-base sm:tracking-widest">
                    {' '}
                    Cobham
                  </span>
                </Primary>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-13">
              <ArrowButton type="prev" onClick={() => setFormUrl(null)} />
              <p className="mx-auto text-center">{description}</p>
            </div>
            <IframeResizer
              checkOrigin={false}
              tolerance={10}
              sizeHeight={true}
              heightCalculationMethod="lowestElement"
              minHeight={300}
              src={formUrl}
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
          </>
        )}
      </Section>
    </div>
  )
}
