import getDataType from '@/helpers/getDataType'
import Section from '../section/Section'
import Heading from '../ui/Heading'
import Link from 'next/link'
import { Phone } from '@/icons'
import PrimaryLink from '../links/PrimaryLink'
import { Fragment } from 'react'

export default async function Locations(data: ICms.DynamicComponents) {
  const dataType = data.dataType
  const locationData = await getDataType<any>(dataType)
  const locationInfo = locationData.data.attributes.locationInfo

  return (
    <Section
      bgColor="bg-primary"
      className="relative pl-8 pr-10 text-base font-medium leading-7 md:px-40 bg-primary py-23 font-montserrat lg:pt-46 lg:pb-51 lg:px-48"
    >
      {locationInfo.map((item: any, index: number) => (
        <Fragment key={index * item.coords.lat}>
          <DesktopLocation locationInfo={item} />
          <MobileLocation locationInfo={item} />
        </Fragment>
      ))}
    </Section>
  )
}

const DesktopLocation = ({ locationInfo }: any) => (
  <div className="hidden lg:block gap-51">
    <div className="flex items-center">
      <div className="w-1/2">
        <Heading
          text={locationInfo.location}
          fill="fill-white"
          textColour="text-primary-text"
        />

        <p className="mb-12 text-white">{locationInfo.description}</p>
        <div className="max-w-[233px] text-center mb-3 mx-auto">
          <p className="text-white">{locationInfo.address}</p>
        </div>

        <Link
          href={`tel:${locationInfo.telephone}`}
          className="flex items-baseline tracking-[0.8px] leading-5 font-bold mb-6 text-white justify-center"
        >
          <Phone className="h-auto mr-2 w-7 fill-white" />
          {locationInfo.telephone}
        </Link>
      </div>
      <div className="w-1/2">
        <div className="h-[270px] w-[411px] mx-auto mb-12">
          <iframe
            width="411"
            height="270"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API}&q=${locationInfo.coords.lat},${locationInfo.coords.lng}`}
          />
        </div>
      </div>
    </div>
    <div className="h-25 w-[270px] mx-auto mt-15 mb-40">
      <PrimaryLink href="/timetable">View Timetable</PrimaryLink>
    </div>
  </div>
)

const MobileLocation = ({ locationInfo }: any) => (
  <div
    className="flex flex-col items-center mb-12 lg:hidden"
    key={locationInfo.id}
  >
    <Heading
      text={locationInfo.location}
      fill="fill-white"
      textColour="text-primary-text"
    />

    <p className="mb-12 text-white">{locationInfo.description}</p>

    <div className="h-[251px] w-[334px] mx-auto mb-12">
      <iframe
        width="334"
        height="251"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_API}&q=${locationInfo.coords.lat},${locationInfo.coords.lng}`}
      />
    </div>

    <div className="max-w-[233px] text-center mb-3">
      <p className="text-white">{locationInfo.address}</p>
    </div>

    <Link
      href={`tel:${locationInfo.telephone}`}
      className="flex items-baseline justify-center md:justify-normal tracking-[0.8px] leading-5 font-bold mb-6 text-white"
    >
      <Phone className="h-auto mr-2 w-7 fill-white" />
      {locationInfo.telephone}
    </Link>

    <div className="h-25 w-[270px] mx-auto mt-15 mb-40">
      <PrimaryLink href="/timetable">View Timetable</PrimaryLink>
    </div>
  </div>
)
