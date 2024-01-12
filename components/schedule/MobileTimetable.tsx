import Carousel from '../carousel/Carousel'
import Day from './Day'

export default function MobileTimetable({
  days,
  academyData,
}: {
  days: string[]
  academyData: TimeTableClass[]
}) {
  const options = {
    dragFree: false,
    watchResize: false,
    align: 'start',
    loop: false,
    startIndex: 0,
    gap: 24,
  }
  return (
    <div className="flex">
      <div className="flex-1" />
      <div className="overflow-hidden max-w-[158px]">
        <Carousel
          options={options}
          selectableChildren={true}
          displayButtons={false}
        >
          {days.map((day: string, index: number) => (
            <Day
              day={day}
              academyData={academyData}
              key={index * Math.random()}
            />
          ))}
        </Carousel>
      </div>
      <div className="flex-1" />
    </div>
  )
}
