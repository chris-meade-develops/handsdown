import Image from 'next/image'

export default function Michael() {
  return (
    <div className="absolute -right-[200px] top-54">
      <Image
        src="/images/Michael-cut-out.png"
        width={600}
        height={523}
      />

      <span className="uppercase font-dead-island font-normal text-[25px] tracking-[.75px] leading-[29px] text-white rotate-6 absolute -translate-x-1/2 left-1/2 bottom-50">
        michael page
      </span>
    </div>
  )
}
