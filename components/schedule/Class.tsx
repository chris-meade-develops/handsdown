export default function Class({ classItem }: { classItem: Classes }) {
  return (
    <div className="text-[13px] md:text-base">
      <div className="md:pt-8 bg-accent md:pb-7 py-7">
        <p className="font-bold text-center text-white font-montserrat ">
          {classItem.startTime.toFixed(2)} - {classItem.endTime.toFixed(2)}
        </p>
      </div>
      <div className="pb-8 bg-white md:pt-21 md:pb-28 pt-11">
        <p className="font-bold text-center font-montserrat text-primary-text">
          {classItem.name}
        </p>
      </div>
    </div>
  )
}
