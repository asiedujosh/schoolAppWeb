import { useContext, useEffect, useState } from "react"
import { MessageApiData } from "../contextApi/messages/messageContextApi"
import SearchContainer from "./searchContainer"
import MessageTable from "./messageTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const MessageTableContainer = () => {
  const { processSearchMessage, paginationData, processGetAllMessage } =
    useContext(MessageApiData)
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
    processSearchMessage(searchTerm)
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
        <MessageTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllMessage}
      />
    </div>
  )
}

export default MessageTableContainer
