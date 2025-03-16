import React, { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import Payslip from "./index"

export default function PayslipCreation({ year, month }: { year: number; month: number }) {
  // Create a ref for the portion of the UI we want to print:
  const payslipRef = useRef<HTMLDivElement>(null);

  // v3 uses `contentRef` instead of `content: () => ref.current`.
  const handlePrint = useReactToPrint({
    contentRef: payslipRef,
  });

  return (
    <div className="mt-10"> 
        <div className="flex justify-end">
            <button onClick={handlePrint} className="cursor-pointer shadow-blue-700 shadow-2xl mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Download Payslip as PDF
            </button> 
        </div>

        <div ref={payslipRef}> 
            <div className="flex justify-center">
                <h1 className="text-3xl"> Payslip </h1>
            </div>
            <Payslip year={year} month={month} />
        </div>
    </div>
  );
}
