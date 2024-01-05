'use client'
import AcademyButtons from './AcademyButtons'
import { createInitialState, useMultiClick } from '@/hooks/useMultiClick'

export default function Composer({ academies }: { academies: string[] }) {
  const [state, handleClick] = useMultiClick(createInitialState(academies))
  return (
    <>
      <AcademyButtons
        academies={academies}
        buttonState={state}
        handleClick={handleClick}
      />
    </>
  )
}
