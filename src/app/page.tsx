import Payslips from "./slips";

export default function Home() {
  return (
      <div className="grid p-5 items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
          <h1 className="text-3xl mb-5"> Payslip Creator </h1>
         <Payslips />
      </div>
  );
}
