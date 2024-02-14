import PrimaryLink from '@/components/links/PrimaryLink'
import NavigationComposer from '@/components/navigation'
import getNavigationData from '@/helpers/getNavigationData'

export default async function NotFound() {
  const navigation = await getNavigationData()

  if (!navigation || !navigation.data || !navigation.data[0]) {
    //send to 404
    return (
      <div className="bg-primary pt-45">
        <div className="flex flex-col items-center justify-center gap-10 mx-auto w-fit">
          <h1 className="text-5xl">Whoops!</h1>
          <p>Looks like you've gotten lost</p>
          <div className="h-20 capitalize w-55">
            <PrimaryLink href="/">return home</PrimaryLink>
          </div>
        </div>
      </div>
    )
  }
  const navData = navigation.data[0]

  return (
    <>
      <NavigationComposer scrollable={true} navData={navData} />
      <div className="bg-primary py-55">
        <div className="flex flex-col items-center justify-center max-w-lg px-20 mx-auto md:px-0 w-fit">
          <h1 className="mb-10 text-5xl">404!</h1>
          <p className="mb-10 text-center">
          It seems you've stepped off of the mat. Let's guide you back to familiar territory. 
          </p>
          <div className="h-20 mb-20 capitalize w-fit">
            <PrimaryLink href="/">
              <span className="px-10">
              return home
              </span>
              </PrimaryLink>
          </div>
        </div>
      </div>
    </>
  )
}
