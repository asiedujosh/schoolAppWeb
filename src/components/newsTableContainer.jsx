import { useContext, useEffect, useState } from "react"
import { NewsApiData } from "../contextApi/news/newsContextApi"
import SearchContainer from "./searchContainer"
import NewsTable from "./newsTable"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const NewsTableContainer = () => {
  const { processSearchNews } = useContext(NewsApiData)
  const [searchTerm, setSearchTerm] = useState("")
  //   const [currentPage, setCurrentPage] = useState(1)

  const handleSearchChange = (data) => {
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    // console.log(searchTerm)
    processSearchNewss(searchTerm)
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
        <NewsTable />
      </div>
      {/* <PaginationContainer />
      <PrintButton /> */}
    </div>
  )
}

export default NewsTableContainer
