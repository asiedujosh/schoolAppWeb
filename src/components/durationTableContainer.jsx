import { useContext, useEffect, useState } from "react"
import { DurationApiData } from "../contextApi/duration/durationContextApi"
import SearchContainer from "./searchContainer"
import DurationTable from "./durationTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const DurationTableContainer = () => {
  const { processSearchDuration, paginationData, processGetAllDuration } =
    useContext(DurationApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  // useEffect(() => {
  //   processGetAllDuration(1)
  // }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    // console.log(searchTerm)
    processSearchDuration(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="overflow-auto" style={{ height: "80%" }}>
        <DurationTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllDuration}
      />
    </div>
  )
}

export default DurationTableContainer
