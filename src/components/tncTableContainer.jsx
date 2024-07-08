import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import TncTable from "./tncTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const TncTableContainer = () => {
  const { processGetTnc } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetTnc(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <TncTable />
      </div>
      {/* <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetTnc}
      /> */}
    </div>
  )
}

export default TncTableContainer
