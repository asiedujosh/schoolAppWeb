import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import BannerTable from "./heroBannerTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const HeroBannerTableContainer = () => {
  const { processGetHeroBanner } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetHeroBanner(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <BannerTable />
      </div>
      {/* <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetHeroBanner}
      /> */}
    </div>
  )
}

export default HeroBannerTableContainer
