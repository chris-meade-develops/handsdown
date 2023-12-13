import PrimaryLink from '@/components/links/PrimaryLink'
import Heading from '@/components/ui/Heading'

export default function MeetTheFounders(cmsData: ICms.DynamicComponents) {
  const {
    Title: title,
    Founders: founders
  } = cmsData

  if(!founders) return null
  
  return (
    <section className="pb-48 pt-26 bg-secondary">
      <div className=" mb-43">
        <Heading
          text={title}
          fill="fill-black"
          textColour="text-white"
        />
      </div>
      <div className="flex flex-col  max-w-[992px] mx-auto text-primary-text text-lg">
        <div className="flex mb-46">
          <div
            className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat mr-44"
            style={{
              backgroundImage: `url(${founders[0].image.data.attributes.url})`,
            }}
          />
          <div className="w-full max-w-[625px] pt-7 ">
            <h3 className="font-bold leading-6 text-primary-text mb-13">
             {founders[0].title}
            </h3>
            <p className="font-light mb-14">
              {founders[0].description}
            </p>
            <div className="h-25 w-53">
              <PrimaryLink href={founders[0].link.address}>
                <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                  {founders[0].link.text}
                </span>
              </PrimaryLink>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full max-w-[625px] pt-7 ">
            <h3 className="font-bold leading-6 text-primary-text mb-13">
            {founders[1].title}
            </h3>
            <p className="font-light mb-14">
            {founders[1].description}
            </p>
            <div className="h-25 w-53">
              <PrimaryLink href={founders[1].link.address}>
                <span className="text-sm font-extrabold tracking-wide text-center uppercase text-secondary-text">
                {founders[1].link.text}
                </span>
              </PrimaryLink>
            </div>
          </div>
          <div
            className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat ml-44"
            style={{
              backgroundImage: `url(${founders[1].image.data.attributes.url})`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
