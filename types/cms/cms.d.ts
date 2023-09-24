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

  interface Faq {
    number: string
    question: string
    answer: string
    link?: Link
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
    body: Body
  }

  interface Social extends Image, Link {}

  interface HomePage {
    pricing: ICard.CallToAction[]
    reviews: ICard.WithImage[]
    classes: ICard.WithImage[]
  }

  interface ClassPage extends Omit<HomePage, 'pricing'> {
    graduates: ICard.WithImage[]
    coaches: ICard.WithImage[]
  }

  interface AboutPage {
    cmsData: Page
    reviews: ICard.WithImage[]
  }

  interface FaqPage {
    cmsData: Page
    classes: ICard.WithImage[]
    reviews: ICard.WithImage[]
    questions: Faq[]
  }
}
