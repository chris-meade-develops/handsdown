import { Phone } from '@/icons'
import Link from 'next/link'
import { default as NextImage } from 'next/image'

const locations: ICms.Footer[] = [
  {
    location: 'Epsom',
    address: 'East St, Epsom, Surrey KT17 1BN (Rainbow Leisure Centre)',
    telephone: '01372 231 426',
  },
  {
    location: 'Cobham',
    address: '10a Highstreet , Cobham , Surrey KT11 3DY',
    telephone: '01372 231 426',
  },
]

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center w-full pb-10 text-center text-white border-t-2 border-white md:justify-normal md:flex-row bg-primary px-35 pt-26 md:pl-45 font-montserrat md:text-lg ">
      <div className="md:mr-55 md:w-1/3">
        <h4 className="text-[22px] md:text-2xl leading-7 font-extrabold mb-10 md:text-left">
          Visit us
        </h4>
        <div className="md:flex md:text-left gap-30">
          {locations.map((location, index) => (
            <Address key={index} {...location} />
          ))}
        </div>
      </div>
    
        <div className="mr-33">
          <h4 className="text-[22px] leading-7 font-extrabold mb-10 mt-21">
            Quick Links
          </h4>
          <div className="flex flex-col justify-center mb-22 md:justify-normal md:text-left">
            <Link href="/about">Our Story</Link>
            <Link href="/classes">Classes</Link>
            <Link href="/timetables">Timetables</Link>
            <Link href="/coaches">Coaches</Link>
          </div>
        </div>

        <div>
          <NextImage
            src="/images/HDLogoWhite.png"
            alt="Hands Down logo"
            width={200}
            height={200}
          />

          <p className="font-medium text-base opacity-[.85] mt-6">
            Copyright Hands Down Academies 2023
          </p>
        </div>
    
    </footer>
  )
}

function Address({ location, address, telephone }: ICms.Footer) {
  return (
    <div className="flex flex-col w-full whitespace-normal mb-14 md:justify-between">
      <p className="mb-6 font-bold">{location}</p>
      <p className="mb-6 leading-[26px]">{address}</p>
      <Link
        href={`tel:${telephone}`}
        className="flex items-baseline justify-center md:justify-normal tracking-[0.8px] leading-5 font-bold"
      >
        <Phone className="h-auto mr-2 w-7 fill-white" />
        {telephone}
      </Link>
    </div>
  )
}
