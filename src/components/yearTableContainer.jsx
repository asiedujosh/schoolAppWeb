import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { YearApiData } from "../contextApi/year/yearContextApi"
import SearchContainer from "./searchContainer"
import YearTable from "./yearTable"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const YearTableContainer = () => {
  const { processAllPaginatedYear, paginationData, processSearchYear } =
    useContext(YearApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  // let handleSearchTerm = (e) => {
  //   //processSearchRecord()
  // }
  useEffect(() => {
    processAllPaginatedYear()
  }, [])

  const handleSearchChange = (data) => {
    console.log(data)
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchYear(searchTerm)
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
        <YearTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processAllPaginatedYear}
      />
    </div>
  )
}

export default YearTableContainer
