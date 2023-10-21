export default function AboutHero(heroData: ICms.Hero) {
  return (
    <section
      style={{
        backgroundImage: `url("${heroData.image.src}")`,
      }}
      className="relative w-full h-[595px] bg-no-repeat bg-center bg-cover pt-[185px] pb-50 z-0
    "
    ></section>
  )
}
