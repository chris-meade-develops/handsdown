namespace IHero {
  interface Brush {
    svgOne: string
    svgTwo: string
    svgThree: string
    svgFour: string
    image?: boolean
    text?: Pick<ICms.Hero, 'title' | 'sub-title' | 'description'>
  }
}
