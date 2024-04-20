import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import SearchContainer from "./searchContainer"
import SubjectTable from "./subjectTable"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const SubjectTableContainer = () => {
  const { processGetAllSubject, paginationData, processSearchSubject } =
    useContext(SubjectApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    processSearchSubject(searchTerm)
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
        <SubjectTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllSubject}
      />
    </div>
  )
}

export default SubjectTableContainer
