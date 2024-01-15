import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { addYear, getAllYear } from "./year"

export const YearApiData = createContext()

const YearApiDataProvider = (props) => {
  const [yearList, setYearList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])

  const processGetAllYear = async (data) => {
    let response = await getAllYear()
    if (response) {
      setYearList(response.data.data)
    }
  }

  const processAddYear = async (data) => {
    let response = await addYear(data)
    if (response) {
      processGetAllYear()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateYear = async () => {}

  const processDeleteYear = async () => {}

  return (
    <YearApiData.Provider
      value={{
        processGetAllYear,
        processAddYear,
        processUpdateYear,
        processDeleteYear,
        searchRecord,
        yearList,
      }}
    >
      {props.children}
    </YearApiData.Provider>
  )
}

export default YearApiDataProvider
