namespace ICard {
  interface BasicProps {
    title: string
    subTitle?: string
    description?: string
    link?: string
  }

  interface WithImage extends BasicProps {
    image: ICms.Image
    imgPosition?: string
  }


  interface CallToAction extends BasicProps {
    highlight: boolean
    action: string
    footer: string
  }
}
