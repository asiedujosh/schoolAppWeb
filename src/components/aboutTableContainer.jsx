import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import AboutTable from "./aboutTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const AboutTableContainer = () => {
  const { processGetAbout } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetAbout(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <AboutTable />
      </div>
      {/* <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAbout}
      /> */}
    </div>
  )
}

export default AboutTableContainer
