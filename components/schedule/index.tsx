import getDataType from '@/helpers/getDataType'
import Composer from './Composer'

export default async function Schedule(data: ICms.DynamicComponents) {
  console.log(data)
  const cmsData = await getDataType(data.dataType)
  const academies = Object.keys(cmsData.data.attributes).filter(
    (key) =>
      !key.includes('createdAt') &&
      !key.includes('updatedAt') &&
      !key.includes('publishedAt')
  )

  return (
    <section className="relative pl-8 pr-10 text-base font-medium leading-7 text-white bg-primary py-23 font-montserrat">
      <div className="absolute top-0 flex justify-center w-full gap-4 -translate-y-full">
        <Composer academies={academies} />
      </div>
    </section>
  )
}
