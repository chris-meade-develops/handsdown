import Image from "next/image";

export default function Kalon() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-[60%] left-50">
      <Image src="/images/Kalon-cut-out.png" width={321} height={400} alt="Headcoach Kalon Page"/>
      <span className="uppercase font-dead-island font-normal text-[25px] tracking-[.75px] leading-[29px] text-white -rotate-6 absolute -translate-x-1/2 left-1/2 bottom-50" >kalon page</span>
    </div>
  )
}