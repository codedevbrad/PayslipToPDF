"use client"

import * as React from "react"
import {
  format,
  isSameDay,
  getISOWeek,
} from "date-fns"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function PayslipTable( {month} ) {
  // Our custom date range
  const datesInInterval = month;

  // Store hours worked for each date in a dictionary keyed by date.toISOString()
  const [hoursWorked, setHoursWorked] = React.useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {}
    datesInInterval.forEach((day) => {
      initial[day.toISOString()] = 0
    })
    return initial
  })

  function handleHoursChange(day: Date, newValue: string) {
    setHoursWorked((prev) => ({
      ...prev,
      [day.toISOString()]: parseFloat(newValue) || 0,
    }))
  }

  // Compute total hours
  const totalHours = React.useMemo(() => {
    return Object.values(hoursWorked).reduce((sum, hours) => sum + hours, 0)
  }, [hoursWorked] );

  return (
    <div className="">
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Day of Week</TableHead>
                <TableHead>Hours Worked</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {datesInInterval.map((day, index) => {
                // Check if this date's week differs from the *next* date's week
                const nextDay = datesInInterval[index + 1]
                const currentWeek = getISOWeek(day)
                const nextWeek = nextDay ? getISOWeek(nextDay) : null

                // Highlight if it's today
                const isToday = isSameDay(day, new Date())
                const rowClass = isToday ? "dark:bg-gray-900 bg-gray-100" : ""

                return (
                    <React.Fragment key={day.toISOString()}>
                    {/* The row for the current day */}
                    <TableRow className={rowClass}>
                        <TableCell>{format(day, "dd")}</TableCell>
                        <TableCell>{format(day, "EEEE")}</TableCell>
                        <TableCell>
                        <input
                            type="number"
                            value={hoursWorked[day.toISOString()]}
                            onChange={(e) => handleHoursChange(day, e.target.value)}
                            className="rounded p-1 px-3"
                        />
                        </TableCell>
                    </TableRow>

                    {/* Insert a blank row if the next date is in a different week or doesn’t exist (end of list) */}
                    {(!nextDay || currentWeek !== nextWeek) && (
                        <TableRow>
                          <TableCell colSpan={3} className="h-4 p-5 text-center dark:text-gray-600 text-gray-500" > end of week </TableCell>
                        </TableRow>
                    )}
                    </React.Fragment>
                )
                })}

                {/* Final row for total hours */}
                <TableRow className="dark:bg-blue-900">
                {/* Span the first two columns to place total on the right */}
                <TableCell colSpan={2} className="font-semibold">
                    Total Hours
                </TableCell>
                <TableCell>{totalHours}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}