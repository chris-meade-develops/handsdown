type Classes = {
  id: number
  name: string
  startTime: number
  endTime: number
}

type TimeTableClass = {
  id: number
  dayName: string
  classes: Classes[]
}