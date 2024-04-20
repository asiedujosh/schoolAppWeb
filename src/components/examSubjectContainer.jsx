import { useContext, useEffect, useState } from "react"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examRelationContextApi"
import SearchContainer from "./searchContainer"
import ExamSubjectTable from "./examSubjectTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const ExamSubjectTableContainer = () => {
  const {
    processSearchExamsSubjectTable,
    paginationData,
    processGetAllExamSubjectLink,
  } = useContext(ExamSubjectApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    processGetAllExamSubjectLink(1)
  }, [])

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
        <ExamSubjectTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllExamSubjectLink}
      />
    </div>
  )
}

export default ExamSubjectTableContainer
