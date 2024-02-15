namespace IInstagram {
  interface GetTokenResponse {
    access_token: string
    token_type: string
    expires_in: number
  }

  interface Media {
    id: string
    media_type: 'IMAGE' | 'VIDEO'
    media_url: string
    thumbnail_url?: string
    permalink: string
    timestamp: string
    username: string
    caption: string
  }

  interface GetMediaResponse {
    data: Media[]
  }
}
