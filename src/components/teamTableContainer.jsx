import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import TeamTable from "./teamTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const TeamTableContainer = () => {
  const { processGetTeam } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetTeam(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <TeamTable />
      </div>
      {/* <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetTeam}
      /> */}
    </div>
  )
}

export default TeamTableContainer
