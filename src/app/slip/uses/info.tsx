"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function InfoTable( { currentDate } ) {


  return (
    <div className="dark:bg-gray-900 p-3 py-5 mb-16 rounded-md">
      <Table>
        <TableCaption>AIS and Funding Details</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>AIS number: 595144</TableHead>
            </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Employer: Bradley Jordan Lumber</TableCell>
            <TableCell>Area: Somerset</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>PA Name: Kate Hudson</TableCell>
            {/* Dynamically insert the 11th-to-10th range */}
            <TableCell>Month: { currentDate }</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time Sheets Due in Payroll: 15th</TableCell>
            <TableCell>Pay date: Last working day of the month</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
