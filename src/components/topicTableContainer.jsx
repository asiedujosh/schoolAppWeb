import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import SearchContainer from "./searchContainer"
import TopicTable from "./topicTable"
import { TopicApiData } from "../contextApi/topic/topicContextApi"

const TopicTableContainer = () => {
  const { processGetAllTopic, paginationData, searchStaffRecord } =
    useContext(TopicApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  // let handleSearchTerm = (e) => {
  //   //processSearchRecord()
  // }
  const handleSearchChange = (data) => {
    console.log(data)
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    console.log(searchTerm)
    //processSearchRecord(searchTerm)
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
        <TopicTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllTopic}
      />
    </div>
  )
}

export default TopicTableContainer
