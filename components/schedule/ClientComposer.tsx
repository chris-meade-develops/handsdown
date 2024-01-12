'use client'
import { createInitialState, useMultiClick } from '@/hooks/useMultiClick'
import AcademyButtons from './AcademyButtons'
import TimeTable from './TimeTable'

export default function ClientComposer({
  cmsData,
}: {
  cmsData: ICms.DynamicComponents
}) {
  const academies = Object.keys(cmsData.data.attributes).filter(
    (key) =>
      !key.includes('createdAt') &&
      !key.includes('updatedAt') &&
      !key.includes('publishedAt')
  )
  const [state, handleClick] = useMultiClick(createInitialState(academies))


  return (
    <>
      <div className="absolute top-0 flex justify-center w-full gap-4 -translate-y-full">
        <AcademyButtons
          academies={academies}
          buttonState={state}
          handleClick={handleClick}
        />
      </div>
      <TimeTable data={cmsData} state={state} />
    </>
  )
}
