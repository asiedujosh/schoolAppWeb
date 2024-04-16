import { useContext, useEffect, useState } from "react"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import SearchContainer from "./searchContainer"
import ExamTable from "./examTable"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const ExamTableContainer = () => {
  const { processSearchExams } = useContext(ExamApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    // console.log(searchTerm)
    processSearchExams(searchTerm)
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
        <ExamTable />
      </div>
      {/* <PaginationContainer />
      <PrintButton /> */}
    </div>
  )
}

export default ExamTableContainer
