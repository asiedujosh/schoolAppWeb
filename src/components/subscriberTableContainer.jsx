import { useContext, useEffect, useState } from "react"
import { SubscribersApiData } from "../contextApi/subscribers/subscribersContextApi"
import SearchContainer from "./searchContainer"
import SubscriberTable from "./subscriberTable"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const SubscriberTableContainer = () => {
  //   const { processSearchSubscriber } = useContext(SubscribersApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    // processSearchSubject(searchTerm)
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
        <SubscriberTable />
      </div>
      {/* <PaginationContainer />
      <PrintButton /> */}
    </div>
  )
}

export default SubscriberTableContainer
