"use client"
import React from "react"
import InfoTable from "./uses/info"
import Signiture from "./uses/signiture"
import PayslipTable from "./uses/table"
import { eachDayOfInterval, format } from "date-fns"

/**
 * Given a specific year and month, returns the dates from
 * the 11th of that month to the 10th of the next month.
 */

function getDates11thTo10th(year: number, month: number) {
  // e.g. if year=2025, month=0 => Jan 11, 2025 to Feb 10, 2025
  const start = new Date(year, month, 11)
  const end = new Date(year, month + 1, 10)
  return eachDayOfInterval({ start, end })
}

/**
 * Returns a string like "January 11th, 2025 – February 10th, 2025"
 * based on the given year/month.
 */

function getRangeString(year: number, month: number) {
  const start = new Date(year, month, 11)
  const end = new Date(year, month + 1, 10)
  return `${format(start, "MMMM do, yyyy")} – ${format(end, "MMMM do, yyyy")}`
}

/**
 * Single Payslip that:
 *  - Calculates the correct date range (11th -> 10th)
 *  - Renders InfoTable (for AIS/funding details)
 *  - Renders PayslipTable (day-by-day listing)
 *  - Renders Signiture
 */

function Payslip({ year, month }: { year: number; month: number }) {
  const days = getDates11thTo10th(year, month)
  const rangeLabel = getRangeString(year, month)

  return (
    <>
      <div className="w-full justify-center mx-auto my-5 p-4 border rounded">
        <InfoTable currentDate={rangeLabel} />
        <PayslipTable month={days} />
        <Signiture />
      </div>
    </>
    
  )
}

export default Payslip