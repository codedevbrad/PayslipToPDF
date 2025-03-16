"use client"
import React, { useState } from "react"
import PayslipCreation from "../slip/pdfcreation"
import { format } from "date-fns"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select , SelectTrigger , SelectValue , SelectContent , SelectItem } from "@/components/ui/select"


export default function PayslipSwitcher() {
  const now = new Date()
  // Default to the current month/year
  const [selectedYear, setSelectedYear] = useState(now.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(now.getMonth()) // 0-based

  // For the month dropdown: 0 = January, 1 = February, ...
  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="p-4">
      {/* Year/Month controls */}
      <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex flex-row dark:bg-blue-950 p-4 rounded-md">
          <Label htmlFor="year" className="mr-3">Year</Label>
          <Input
            id="year"
            type="number"
            value={selectedYear}
            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            className="w-24 border-none cursor-pointer bg-none dark:bg-blue-950"
          />
        </div>

        {/* Month select */}
        <div className="flex flex-row dark:bg-blue-950 p-4 rounded-md">
          <Label htmlFor="month" className="mr-3">Month</Label>
          <Select
            value={String(selectedMonth)}
            onValueChange={(val) => setSelectedMonth(parseInt(val))}
          >
            <SelectTrigger id="month" className="w-44 border-none cursor-pointer dark:bg-blue-950 p-4 rounded-md">
              <SelectValue placeholder="Select a month" className="bg-blue-900" />
            </SelectTrigger>
            <SelectContent className="bg-gray-950 p-3 outline-none border-1-px-white shadow-lg">
              {months.map((m) => (
                <SelectItem key={m} value={String(m)} className="cursor-pointer p-3 data-[highlighted]:bg-blue-900 data-[highlighted]:text-white">
                  {format(new Date(2000, m, 1), "MMMM")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Render the Payslip */}
      <PayslipCreation year={selectedYear} month={selectedMonth} />
    </div>
  )
}
