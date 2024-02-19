import PrimaryLink from '@/components/links/PrimaryLink'
import {
  getLongLivedAccessToken,
  sendCodeToStrapi,
} from '@/helpers/instagramHelpers'
import { redirect } from 'next/navigation'

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { code } = searchParams
  const longLifeAccessCode = await getLongLivedAccessToken({
    code: code as string,
  })

  if (!longLifeAccessCode.success || !longLifeAccessCode.data) {
    return (
      <>
        <div className="pt-55">
          <h1>
            There has been an error authenticating your instagram account.
          </h1>

          <div className="w-fit h-25">
            <PrimaryLink
              href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=https://handsdownacademies.co.uk/auth/instagram-callback&scope=user_profile,user_media&response_type=code
        `}
            >
              <span className="px-10">Click here to try again</span>
            </PrimaryLink>
          </div>
        </div>
      </>
    )
  }

  const strapiResponse = await sendCodeToStrapi({
    code: longLifeAccessCode.data.access_token,
    user_id: parseInt(longLifeAccessCode.data.user_id),
  })

  if (!strapiResponse.success) {
    return (
      <>
        <div className="pt-55">
          <h1>
            There has been an error authenticating your instagram account.
          </h1>

          <div className="w-fit h-25">
            <PrimaryLink
              href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=https://handsdownacademies.co.uk/auth/instagram-callback&scope=user_profile,user_media&response_type=code
          `}
            >
              <span className="px-10">Click here to try again</span>
            </PrimaryLink>
          </div>
        </div>
      </>
    )
  }

  return redirect('/')
}
