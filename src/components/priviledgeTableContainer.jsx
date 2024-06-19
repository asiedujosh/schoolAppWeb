import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { PriviledgeApiData } from "../contextApi/priviledge/priviledgeContextApi"
import SearchContainer from "./searchContainer"
import PriviledgeTable from "./priviledgeTable"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const PriviledgeTableContainer = () => {
  const { processSearchPriviledge, processGetAllPriviledge, paginationData } =
    useContext(PriviledgeApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    // console.log(searchTerm)
    processSearchPriviledge(searchTerm)
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
        <PriviledgeTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllPriviledge}
      />
    </div>
  )
}

export default PriviledgeTableContainer
