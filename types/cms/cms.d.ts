namespace ICms {
  interface ImageFormats {
    name: string | null
    hash: string | null
    ext: string | null
    mime: string | null
    width: number | null
    height: number | null
    size: number | null
    path: string | null
    url: string | null
  }
  interface Src {
    data: {
      id: number
      alt: string
      attributes: {
        name: string | null
        alternativeText: string | null
        caption: string | null
        width: number | null
        height: number | null
        formats: {
          thumbnail: ImageFormats
          large: ImageFormats
          medium: ImageFormats
          small: ImageFormats
        }
        hash: string | null
        ext: string | null
        mime: string | null
        size: number | null
        url: string | null
        previewUrl: string | null
        provider: string | null
        provider_metadata: string | null
        created_at: string | null
        updated_at: string | null
      }
    }
  }
  interface Image {
    id?: number
    src: Src
    alt: string
  }

  interface Link {
    id: number; text: string; address: string 
  }

  interface Footer {
    location: string
    address: string
    telephone: string
  }

  interface TextSegment {
    data: {
      id: number
      attributes: { title: string; description: string }
    }
  }

  interface Faq {
    data: {
      id: number
      attributes: {
        number: string
        question: string
        answer: string
        link?: Link
      }
    }
  }

  interface Hero {
    data: {
      id: number
      attributes: {
        title: string
        'sub-title': string
        description: string
        link: Link
        image: Image
      }
    }
  }

  interface DynamicComponents {
    id: number
    __component: string
    [key: string]: any[]
  }

  interface Body {
    text: TextSegment[]
    images: Image[]
  }

  interface CMSCarousel<T> {
    data: {
      id: number
      attributes: {
        createdAt: string
        updatedAt: string
        publishedAt: string
      } & { [key in T]: ICard.WithImage[] }
    }
  }

  interface PageData {
    data: {
      id: number
      attributes: {
        createdAt: string
        updatedAt: string
        publishedAt: string
        hero: Hero
        body: Body | null
        dynamicComponents: DynamicComponents[] | []
        coaches_carousel: CMSCarousel<'Coaches'> | null
        reviews_carousel: CMSCarousel<'reviews'> | null
        classes_carousel: CMSCarousel<'Classes'> | null
        graduates_carousel: CMSCarousel<'Graduates'> | null
      }
    }[] | null
  }

  interface Social extends Image, Link {}

  interface HomePage {
    pricing: ICard.CallToAction[]
    reviews: ICard.WithImage[]
    classes: ICard.WithImage[]
  }

  // interface ClassPage extends Omit<HomePage, 'pricing'> {
  //   graduates: ICard.WithImage[]
  //   coaches: ICard.WithImage[]
  // }

  // interface AboutPage {
  //   cmsData: Page
  //   reviews: ICard.WithImage[]
  // }

  // interface FaqPage {
  //   cmsData: Page
  //   classes: ICard.WithImage[]
  //   reviews: ICard.WithImage[]
  //   questions: Faq[]
  // }

  // interface ContactPage {
  //   cmsData: Page
  //   classes: ICard.WithImage[]
  //   reviews: ICard.WithImage[]
  // }

  // interface TimetablePage {
  //   cmsData: Page
  //   classes: ICard.WithImage[]
  //   coaches: ICard.WithImage[]
  // }

  // interface CoachesPage {
  //   cmsData: Page
  //   coaches: ICard.WithImage[]
  //   reviews: ICard.WithImage[]
  //   classes: ICard.WithImage[]
  // }
}
