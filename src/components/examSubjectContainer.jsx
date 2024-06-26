import { useContext, useEffect, useState } from "react"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examRelationContextApi"
import SearchContainer from "./searchContainer"
import ExamSubjectTable from "./examSubjectTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const ExamSubjectTableContainer = () => {
  const {
    processSearchExamsSubjectLink,
    paginationData,
    processGetExamSubjectLink,
  } = useContext(ExamSubjectApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    processGetExamSubjectLink(1)
  }, [])

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    // console.log(searchTerm)
    processSearchExamsSubjectLink(searchTerm)
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
        <ExamSubjectTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetExamSubjectLink}
      />
    </div>
  )
}

export default ExamSubjectTableContainer
