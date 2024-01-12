import getDataType from '@/helpers/getDataType'
import ClientComposer from './ClientComposer'

export default async function Schedule(data: ICms.DynamicComponents) {
  const cmsData = await getDataType(data.dataType)

  return (
    <section className="relative text-base font-medium leading-7 text-white border-t-2 border-white bg-primary-text pb-43 font-montserrat">
      <ClientComposer cmsData={cmsData} />
    </section>
  )
}
