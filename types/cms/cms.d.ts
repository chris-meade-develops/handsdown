namespace ICms {
  interface Image {
    src: string
    alt: string
  }

  interface Link {
    text: string
    href: string
  }

  interface Footer { 
    location: string
    address: string
    telephone: string
  }

  interface TextSegment {
    title: string
    description: string
  }

  interface Hero {
    title: string
    'sub-title': string
    description: string
    link: Link
    image: Image
  }

  interface Body {
    text: TextSegment[]
    images: Image[]
  }

  interface Page {
    hero: Hero
    body : Body
  }

  interface Social extends Image, Link {}

  interface HomePage {
    pricing: ICard.CallToAction[]
    reviews: ICard.WithImage[]
    classes: ICard.WithImage[]
  }
}