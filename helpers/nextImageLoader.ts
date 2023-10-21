'use client'

export const CMS_URL = "http://127.0.0.1:1337"
 
export default function myImageLoader({ src } : { src: string }) {

  return `${CMS_URL}${src}`
}

