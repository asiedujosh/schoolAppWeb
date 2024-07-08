import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import ContactTable from "./contactTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const ContactTableContainer = () => {
  const { processGetContact } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetContact(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <ContactTable />
      </div>
      {/* <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetContact}
      /> */}
    </div>
  )
}

export default ContactTableContainer
