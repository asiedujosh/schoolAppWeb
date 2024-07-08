import { useContext, useEffect, useState } from "react"
import { SliderApiData } from "../contextApi/slider/sliderContextApi"
import PaginationContainer from "./paginationContainer"
import SliderTable from "./sliderTable"

const SliderTableContainer = () => {
  const { processGetAllSlide, paginationData } = useContext(SliderApiData)

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="overflow-auto" style={{ height: "80%" }}>
        <SliderTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllSlide}
      />
    </div>
  )
}

export default SliderTableContainer
