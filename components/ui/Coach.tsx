export default function Coach({
  index,
  name,
  description,
  imgSrc,
  lastCoach,
}: ICoach) {
  if (index % 2 === 0)
    return (
      <div
        className={`flex ${lastCoach ? '' : ' mb-46'}`}
        id={`#${name.replaceAll(' ', '')}`}
      >
        <div
          className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat mr-44"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        />
        <div className="w-full max-w-[625px] pt-7 ">
          <h3 className="font-bold leading-6 text-primary-text mb-13">
            {name}
          </h3>
          <p className="font-light mb-14">{description}</p>
        </div>
      </div>
    )

  return (
    <div
      className={`flex ${lastCoach ? '' : ' mb-46'}`}
      id={`#${name.replaceAll(' ', '')}`}
    >
      <div className="w-full max-w-[625px] pt-7 ">
        <h3 className="font-bold leading-6 text-primary-text mb-13">{name}</h3>
        <p className="font-light mb-14">{description}</p>
      </div>
      <div
        className="w-[271px] h-[330px] bg-center bg-cover bg-no-repeat ml-44"
        style={{
          backgroundImage: `url(${imgSrc})`,
        }}
      />
    </div>
  )
}
