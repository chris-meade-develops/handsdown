import { Phone } from '@/icons'
import Link from 'next/link'
import { default as NextImage } from 'next/image'

const locations: iAddress[] = [
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
    <footer className="flex flex-col justify-center w-full pb-10 text-center text-white border-t-2 border-white bg-offBlack px-35 pt-26 font-montserrat ">
      <h4 className="text-[22px] leading-7 font-extrabold mb-10">Visit us</h4>
      {locations.map((location, index) => (
        <Address key={index} {...location} />
      ))}

      <h4 className="text-[22px] leading-7 font-extrabold mb-10 mt-21">
        Quick Links
      </h4>
      <div className="flex flex-col justify-center mb-22">
        <Link href="/about">Our Story</Link>
        <Link href="/classes">Classes</Link>
        <Link href="/timetables">Timetables</Link>
        <Link href="/coaches">Coaches</Link>
      </div>

      <NextImage
        src="/images/HDLogoWhite.png"
        alt="Hands Down logo"
        width={200}
        height={200}
      />

      <p className="font-medium text-base opacity-[.85] mt-6">
        Copyright Hands Down Academies 2023
      </p>
    </footer>
  )
}

function Address({ location, address, telephone }: iAddress) {
  return (
    <div className="flex flex-col w-full whitespace-normal mb-14">
      <p className="mb-6 font-bold">{location}</p>
      <p className="mb-6 leading-[26px]">{address}</p>
      <Link
        href={`tel:${telephone}`}
        className="flex items-baseline justify-center tracking-[0.8px] leading-5 font-bold"
      >
        <Phone className="h-auto mr-2 w-7 fill-white" />
        {telephone}
      </Link>
    </div>
  )
}
