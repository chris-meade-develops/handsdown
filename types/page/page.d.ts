namespace IPage {
  interface IncomingData {
    hero: ICms.Hero
    reviews_carousel: ICms.CMSCarousel<'reviews'> | null
    classes_carousel: ICms.CMSCarousel<'Classes'> | null
    graduates_carousel: ICms.CMSCarousel<'Graduates'> | null
    coaches_carousel: ICms.CMSCarousel<'Coaches'> | null
    dynamicComponents: ICms.DynamicComponents[] | []
  }

  interface Props {
    cmsData: IncomingData
  }
}
