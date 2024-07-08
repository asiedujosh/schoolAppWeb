import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { addSlider, getAllSlider, editSlider, deleteSlider } from "./slider"

export const SliderApiData = createContext()

const SliderApiDataProvider = (props) => {
  const [sliderList, setSliderList] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processGetAllSlider = async (data) => {
    let response = await getAllSlider(data || 1)
    if (response) {
      setSliderList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddSlider = async (data) => {
    let response = await addSlider(data)
    if (response) {
      processGetAllSlider()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateSlider = async (data) => {
    let response = await editSlider(data)
    if (response) {
      processGetAllSlider()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteSlider = async (data) => {
    // console.log(data)
    let response = await deleteSlider(data)
    if (response) {
      processGetAllSlider()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <SliderApiData.Provider
      value={{
        processGetAllSlider,
        processAddSlider,
        processUpdateSlider,
        processDeleteSlider,
        sliderList,
      }}
    >
      {props.children}
    </SliderApiData.Provider>
  )
}

export default SliderApiDataProvider
