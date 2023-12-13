namespace IPage {
  interface IncomingData {
    hero: ICms.Hero
    dynamicComponents: ICms.DynamicComponents[] | []
  }

  interface Props {
    cmsData: IncomingData
  }
}
