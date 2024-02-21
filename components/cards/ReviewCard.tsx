import { Quote } from '@/icons'
import Image from 'next/image'

export default function ReviewCard({
  title,
  description,
  image,
  subTitle,
  reverse,
}: ICard.WithImage) {
  const bgColor = reverse ? 'bg-primary-text' : 'bg-white'
  const quoteColour = reverse ? 'fill-white' :'fill-primary-text'
  const firstHoleBorder = reverse ? 'border border-[#D0A96A]' : ''
  const holeBorder = reverse ? 'border border-[#707070]' : ''
  const textColor = reverse ? 'text-white' : 'text-primary-text'

  return (
    <div
      className={`${bgColor} ${textColor} min-w-0 w-full rounded-[15px] relative overflow-hidden flex flex-col pt-16 pb-25 px-15 font-montserrat text-base font-medium h-full items-center justify-between`}
    >
      <div
        className={`${firstHoleBorder} absolute w-6 h-6 rounded-full bg-primary-text top-6 left-6`}
      ></div>
      <div
        className={`absolute w-6 h-6 rounded-full bg-primary-text top-6 right-6 ${holeBorder}`}
      ></div>
      <div
        className={`absolute w-6 h-6 rounded-full bg-primary-text bottom-6 left-6 ${holeBorder}`}
      ></div>
      <div
        className={`absolute w-6 h-6 rounded-full bg-primary-text bottom-6 right-6 ${holeBorder}`}
      ></div>

      <Quote className={`w-auto mb-8 h-18 top-6 left-6 ${quoteColour}`} />

      <p className="block mb-8 overflow-hidden leading-6 text-center">{description}</p>

      <div className="flex justify-center w-full">
        <div className="relative mr-6 overflow-hidden rounded-full h-26 w-26">
          {image.src.data?.attributes?.url && (
            <Image src={image.src.data.attributes.url} alt={image.alt} fill />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-1 font-semibold leading-5">{title}</p>
          <p className=" leading-[18px]">{subTitle}</p>
        </div>
      </div>
    </div>
  )
}
