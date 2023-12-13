namespace ICard {
  interface BasicProps {
    id: string
    title: string
    subTitle?: string
    description?: string
    link?: { id: string, text: string, address: string }
  }

  interface WithImage extends BasicProps {
    image: ICms.Image
    imgPosition?: string
    reverse?: boolean
  }


  interface CallToAction extends BasicProps {
    highlight: boolean
    action: string
    footer: string
  }
}
