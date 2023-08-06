//this will need to query the instagram api and return the images
import ImageLink from "@/components/social/ImageLink"

const images: iImageLinks[] = [
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
  {
    image: "/images/michael-grading.jpg",
    link: "https://www.instagram.com/p/CPQ4ZJ5nZ3I/",
  },
]


export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 gap-5 mb-18 md:grid-cols-3 md:gap-10">
      {images.map((image, index) => (
        <ImageLink key={index} image={image.image} link={image.link} />
      ))}
    </div>
  )
}

