'use client'
import Class from './Class'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Day({
  day,
  academyData,
  selected,
}: {
  day: string
  academyData: Classes[]
  selected?: boolean
}) {
  const mediaQuery = useMediaQuery('(max-width: 1024px)')

  return (
    <div
      className={`mx-6 mb-auto ${
        mediaQuery && !selected ? 'grayscale opacity-15' : ''
      }`}
    >
      <div className="min-w-[158px] md:min-w-[181px] mb-11 md:mb-22">
        <h2
          className={`font-semibold text-center uppercase font-montserrat mb-auto md:mb-0 `}
        >
          {day}
        </h2>
      </div>
      {academyData.map((data: Classes) => {
        if (data.dayName.trim() === day.trim()) {
          return (
            <div className="flex flex-col w-full gap-9" key={data.id}>
              {data.classes.map((dayClass: Class) => {
                const key = dayClass.id + ' ' + dayClass.name
                return <Class classItem={dayClass} key={key} />
              })}
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}
