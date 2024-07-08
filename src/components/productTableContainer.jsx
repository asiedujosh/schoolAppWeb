import { useContext, useEffect, useState } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import ProductTable from "./productTable"
import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const ProductTableContainer = () => {
  const { processGetProduct } = useContext(SystemInfoApiData)

  useEffect(() => {
    processGetProduct(1)
  }, [])

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <ProductTable />
      </div>
      {/* <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetProduct}
      /> */}
    </div>
  )
}

export default ProductTableContainer
