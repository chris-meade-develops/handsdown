import PrimaryLink from '@/components/links/PrimaryLink'
import NavigationComposer from '@/components/navigation'
import getNavigationData from '@/helpers/getNavigationData'
import { notFound } from 'next/navigation'

export default async function Page() {
  const navigation = await getNavigationData()

  if (!navigation || !navigation.data || !navigation.data[0]) {
    return notFound()
  }

  return (
    <>
      <header>
        <NavigationComposer scrollable={false} navData={navigation?.data[0]} />
      </header>

      <div className="pt-55">
        <h1>
          Click the link below to connect your Instagram account to our app.
        </h1>

        <div className="w-55 h-25">
          <PrimaryLink
            href={`https://api.instagram.com/oauth/authorize?client_id=${process.env.INSTAGRAM_APP_ID}&redirect_uri=https://5c85-90-254-96-172.ngrok-free.app/auth/instagram-callback&scope=user_profile,user_media&response_type=code
          `}
          >
            Authorise
          </PrimaryLink>
        </div>
      </div>
    </>
  )
}
