//this will need to query the instagram api and return the images
// import ImageLink from '@/components/social/ImageLink'

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 gap-5 mb-18 md:grid-cols-3 md:gap-10">
      {/* {images.map((image, index) => (
        <ImageLink
          key={index}
          image={{ src: image.src, alt: image.alt }}
          link={image.href}
        />
      ))} */}
    </div>
  )
}
