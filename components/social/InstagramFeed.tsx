// import { checkTokenExpiry, getInstagramPosts } from '@/helpers/instagramHelpers'
// import ImageLink from './ImageLink'
import Section from '../section/Section'
import Heading from '../ui/Heading'
import Icons from './Icons'

export default async function InstagramFeed(data: ICms.DynamicComponents) {
  // const instagramAccessData = await checkTokenExpiry()

  // if (!instagramAccessData.success || !instagramAccessData.data) {
  //   console.error('InstagramFeed error: ', instagramAccessData.errorMessage)
  //   return <Error {...data} />
  // }

  // const { accessToken, userId } = instagramAccessData.data.attributes
  // const parsedUserId = parseInt(userId)

  // const instagramPosts = await getInstagramPosts({
  //   userId: parsedUserId,
  //   accessToken,
  // })

  // if (!instagramPosts.success || !instagramPosts.data) {
  return <Error {...data} />
  // }

  // const filteredPosts = instagramPosts.data.filter(
  //   (post) => post.media_type === 'IMAGE'
  // )

  // return (
  //   <Section
  //     bgColor="bg-secondary"
  //     className="relative text-base font-medium leading-7 bg-primary py-23 font-montserrat text-tertiary-text"
  //   >
  //     <Heading fill="fill-primary" text={data.Title} textColour="text-white" />
  //     <Icons platforms={data.Platforms} />
  //     <div className="grid grid-cols-2 gap-5 mb-18 md:grid-cols-3 md:gap-10 md:px-53">
  //       {filteredPosts.map((image, index) => (
  //         <ImageLink key={image.id} {...image} />
  //       ))}
  //     </div>
  //   </Section>
  // )
}

const Error = (data: ICms.DynamicComponents) => (
  <Section
    bgColor="bg-secondary"
    className="relative text-base font-medium leading-7 text-center bg-primary py-23 font-montserrat text-tertiary-text"
  >
    <Heading fill="fill-primary" text="Follow us" textColour="text-white" />

    <h1 className="mb-20 text-white">
      There has been an error grabbing our latest social media posts, click one
      of the links below to find us:{' '}
    </h1>
    <Icons platforms={data.Platforms} />
  </Section>
)
