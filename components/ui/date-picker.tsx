'use client'

import * as React from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

interface DatePickerProps {
  value?: string
  onChange?: (date: string) => void
  placeholder?: string
  min?: string
  disabled?: boolean
  className?: string
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Pick a date',
  min,
  disabled,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined
  )
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (value) {
      setSelectedDate(new Date(value))
    } else {
      setSelectedDate(undefined)
    }
  }, [value])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isOpen])

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      const dateString = date.toISOString().split('T')[0]
      onChange?.(dateString)
      setIsOpen(false)
    }
  }

  const minDate = min ? new Date(min) : undefined

  // Calculate a reasonable default year for the calendar (e.g., 18 years ago)
  const defaultYear = new Date().getFullYear() - 18
  const defaultMonth = selectedDate || new Date(defaultYear, 0, 1)

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative">
        <Button
          variant="outline"
          type="button"
          disabled={disabled}
          className={cn(
            'w-full justify-start text-left font-medium font-montserrat h-27 py-9 px-11 pr-20 borde text-base  border-primary-text bg-white hover:bg-white  focus:border-accent focus:border-2 focus:outline-none focus:ring-transparent rounded-md ',
            !selectedDate && 'text-muted-foreground',
            disabled &&
              'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50',
            className
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <CalendarIcon className="w-10 h-10 mr-2" />
          {selectedDate ? (
            format(selectedDate, 'PPP')
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute left-0 z-10 p-3 mt-1 bg-white border border-gray-200 rounded-md shadow-lg top-full">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            defaultMonth={defaultMonth}
            captionLayout="dropdown"
            className="border-0 rounded-md"
            endMonth={minDate}
            showOutsideDays
            fixedWeeks
          />
        </div>
      )}
    </div>
  )
}
