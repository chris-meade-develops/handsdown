import useMediaQuery from '@/hooks/useMediaQuery'
import Class from './Class'
import Day from './Day'
import MobileTimetable from './MobileTimetable'

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default function TimeTable({
  data,
  state,
}: {
  data: any
  state: { [key: string]: boolean }
}) {
  const activeAcademy = Object.keys(state).filter((key) => state[key])[0]
  const academyData = data.data.attributes[activeAcademy]

  return (
    <div className="pt-23 md:pt-38 md:pl-47">
      <div className="hidden w-full grid-cols-6 md:grid ">
        {days.map((day: string, index: number) => (
          <Day
            day={day}
            academyData={academyData}
            key={index * Math.random()}
          />
        ))}
      </div>
      <div className="md:hidden">
        <MobileTimetable days={days} academyData={academyData} />
      </div>
    </div>
  )
}
