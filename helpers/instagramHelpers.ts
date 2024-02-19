import CMS_URL from './isLocal'

const PROD = process.env.NODE_ENV === 'production'

export async function sendCodeToStrapi({
  code,
  user_id,
}: {
  code: string
  user_id: number
}): Promise<IApiResponse<ICms.InstagramToken>> {
  try {
    const url = CMS_URL + 'instagram-tokens'
    const now = new Date()
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.INSTAGRAM_UPDATE_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          accessToken: code,
          userId: user_id,
          lastRefreshed: now,
          expiresIn: 60 * 24 * 60 * 60 * 1000,
        },
      }),
    })

    const data: ICms.InstagramToken = await response.json()

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      errorMessage: `Failed to send code to Strapi: ${error}`,
    }
  }
}

export async function getLongLivedAccessToken({
  code,
}: {
  code: string
}): Promise<IApiResponse<IInstagram.GetTokenResponse & { user_id: string }>> {
  const client_id = process.env.INSTAGRAM_APP_ID as string
  const client_secret = process.env.INSTAGRAM_APP_SECRET as string
  const redirect_uri = PROD ? "https://handsdownacademies.com/auth/instagram-callback" :
    'https://5c85-90-254-96-172.ngrok-free.app/auth/instagram-callback'

  try {
    // Step 1: Exchange the code for a short-lived access token
    const response = await fetch(
      'https://api.instagram.com/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id,
          client_secret,
          grant_type: 'authorization_code',
          redirect_uri,
          code,
        }),
      }
    )

    const data = await response.json()

    console.log("data", data)

    if (!data.access_token) {
      throw new Error('Failed to obtain short-lived access token')
    }

    // Step 2: Exchange the short-lived token for a long-lived token
    const longLivedTokenResponse = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${client_secret}&access_token=${data.access_token}`
    )

    const longLivedTokenData: IInstagram.GetTokenResponse =
      await longLivedTokenResponse.json()

    if (!longLivedTokenData.access_token) {
      throw new Error('Failed to obtain long-lived access token')
    }

    return {
      success: true,
      data: {
        ...longLivedTokenData,
        user_id: data.user_id,
      },
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      errorMessage: `Failed to obtain long-lived access token: ${error}`,
    }
  }
}

export async function getInstagramToken(): Promise<
  IApiResponse<ICms.InstagramToken>
> {
  try {
    const url = CMS_URL + 'instagram-tokens'
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.INSTAGRAM_UPDATE_TOKEN}`,
      },
    })

    const data: ICms.InstagramTokenResponse = await response.json()

    const lastToken = data.data[data.data.length - 1]

    // return the last object in the data array
    return { data: lastToken, success: true }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      errorMessage: `Failed to obtain Instagram access token: ${error}`,
    }
  }
}

export async function getInstagramPosts({
  userId,
  accessToken,
}: {
  userId: number
  accessToken: string
}): Promise<IApiResponse<IInstagram.Media[]>> {
  try {
    const url = `https://graph.instagram.com/${userId}/media?fields=id,media_type,media_url,thumbnail_url,permalink,timestamp,username,caption&access_token=${accessToken}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data: IInstagram.GetMediaResponse = await response.json()

    return { data: data.data, success: true }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      errorMessage: `Failed to obtain Instagram posts: ${error}`,
    }
  }
}

export async function refreshLongLivedToken({
  token,
}: {
  token: string
}): Promise<IApiResponse<IInstagram.GetTokenResponse>> {
  try {
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`

    const response = await fetch(refreshUrl)

    const data: IInstagram.GetTokenResponse = await response.json()

    if (!data.access_token) {
      throw new Error('Failed to refresh long-lived access token')
    }

    return {
      data,
      success: true,
    }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      errorMessage: `Failed to refresh long-lived access token: ${error}`,
    }
  }
}

export async function checkTokenExpiry(): Promise<
  IApiResponse<ICms.InstagramToken>
> {
  try {
    const instagramToken = await getInstagramToken()
    if (!instagramToken.success || !instagramToken.data) {
      throw new Error(
        `Failed to obtain Instagram access token: ${instagramToken.errorMessage}`
      )
    }
    const {
      data: {
        attributes: { expiresIn, lastRefreshed, accessToken, userId },
      },
    } = instagramToken

    const now = new Date()
    const tenDaysInMilliseconds = 10 * 24 * 60 * 60 * 1000

    if (lastRefreshed) {
      if (
        now.getTime() -
          new Date(lastRefreshed).getTime() +
          tenDaysInMilliseconds >
        expiresIn * 1000
      ) {
        const longLifeAccessCode = await refreshLongLivedToken({
          token: accessToken,
        })

        if (!longLifeAccessCode.success || !longLifeAccessCode.data) {
          throw new Error('Failed to obtain long-lived access token')
        }

        const token = await sendCodeToStrapi({
          code: longLifeAccessCode.data.access_token,
          user_id: parseInt(userId),
        })
        if (!token.success)
          throw new Error(
            `Failed to update token in Strapi: ${token.errorMessage}`
          )

        return { success: true, data: token.data }
      }
    }
    return { success: true, data: instagramToken.data }
  } catch (error) {
    console.error(error)
    return {
      success: false,
      errorMessage: `Failed to check and update token expiry: ${error}`,
    }
  }
}
