import { useState, useEffect, useContext } from "react"
import { PriceApiData } from "../contextApi/price/priceContextApi"
import SearchContainer from "./searchContainer"
import PriceTable from "./priceTable"
import PaginationContainer from "./paginationContainer"

const PriceTableContainer = () => {
  const { processSearchPricing, paginationData, processGetPrice } =
    useContext(PriceApiData)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    processGetPrice(1)
  }, [])

  const handleSearchChange = (data) => {
    console.log(data)
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    console.log(searchTerm)
    processSearchPricing(searchTerm)
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
        <PriceTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetPrice}
      />
    </div>
  )
}

export default PriceTableContainer
