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
    id: number
    text: string
    address: string
  }

  interface CarouselData {
    data: {
      id: number
      attributes: {
        createdAt: string
        updatedAt: string
        publishedAt: string
        heading?: string
        title?: string
        subTitle?: string
        reverseColours?: boolean
        cards: {
          id: number
          dataType: string | null
          cards: ICard.WithImage[]
          [key: string]: boolean
        }
      }
    }
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
    number: number
    id: number
    question: string
    answer: string
    link?: Link
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

  interface InstagramTokenResponse {
    data: InstagramToken[]
  }
  interface InstagramToken {
      id: number
      attributes: {
        accessToken: string
        userId: string
        lastRefreshed: Date | null
        expiresIn: number
        createdAt: Date
        updatedAt: Date
        publishedAt: Date
      }
    
  }

  interface DynamicComponents {
    id: number
    __component: string
    [key: string]: any | any[]
  }

  interface Body {
    text: TextSegment[]
    images: Image[]
  }

  interface Paragraph {
    type: string
    children: { text: string; type: string }[]
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
    data:
      | {
          id: number
          attributes: {
            createdAt: string
            updatedAt: string
            publishedAt: string
            hero: Hero
            body: Body | null
            dynamicComponents: DynamicComponents[] | []
          }
        }[]
      | null
  }

  interface Social extends Image, Link {}

  interface HomePage {
    pricing: ICard.CallToAction[]
    reviews: ICard.WithImage[]
    classes: ICard.WithImage[]
  }
}
