import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import TestimonialTable from "./testimonialTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const TestimonialTableContainer = () => {
  const { processGetTestimonial, paginationData } =
    useContext(SystemInfoApiData)

  useEffect(() => {
    processGetTestimonial(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <TestimonialTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetTestimonial}
      />
    </div>
  )
}

export default TestimonialTableContainer
