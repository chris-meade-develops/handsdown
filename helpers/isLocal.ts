const IS_LOCAL = process.env.NODE_ENV === 'development'
const CMS_URL = IS_LOCAL
  ? `${process.env.STRAPI_DEV_URL}/api/`
  : `${process.env.STRAPI_URL}/api/}`

  export default CMS_URL