import getDataType from '@/helpers/getDataType'
import Section from '../section/Section'
import Heading from '../ui/Heading'
import Link from 'next/link'
import { Phone } from '@/icons'
import PrimaryLink from '../links/PrimaryLink'

export default async function Locations(data: ICms.DynamicComponents) {
  const dataType = data.dataType
  const locationData = await getDataType(dataType)
  const locationInfo = locationData.data.attributes.locationInfo

  return (
    <Section
      bgColor="bg-primary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 md:px-40 bg-primary py-23 font-montserrat"
    >
      {locationInfo.map((item: any, index: number) => (
        <div className="flex flex-col items-center px-12 mb-12">
          <Heading
            text={item.location}
            fill="fill-white"
            textColour="text-primary-text"
          />

          <p className="mb-12">{item.description}</p>

          <div className="h-[251px] w-[334px] mx-auto mb-12">
            <iframe
              width="334"
              height="251"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API}&q=${item.coords.lat},${item.coords.lng}`}
            />
          </div>

          <div className="max-w-[233px] text-center mb-3">
            <p>{item.address}</p>
          </div>

          <Link
            href={`tel:${item.telephone}`}
            className="flex items-baseline justify-center md:justify-normal tracking-[0.8px] leading-5 font-bold mb-6"
          >
            <Phone className="h-auto mr-2 w-7 fill-white" />
            {item.telephone}
          </Link>

          <div className="h-25 w-[270px] mx-auto mt-15 mb-40">
            <PrimaryLink href="/timetable">
              <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                View Timetable
              </span>
            </PrimaryLink>
          </div>
        </div>
      ))}
    </Section>
  )
}
