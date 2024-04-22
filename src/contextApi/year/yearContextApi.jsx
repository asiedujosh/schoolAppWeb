import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addYear,
  getAllYear,
  editYear,
  deleteYear,
  searchYearRecords,
} from "./year"

export const YearApiData = createContext()

const YearApiDataProvider = (props) => {
  const [yearList, setYearList] = useState([])
  const [yearOptions, setYearOptions] = useState()
  const [searchYearRecord, setSearchYearRecord] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processSearchYear = async (data) => {
    let responseOnSearch = await searchYearRecords(data)
    if (responseOnSearch) {
      setSearchYearRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllYear = async (data) => {
    let response = await getAllYear(data || 1)
    if (response) {
      setYearList(response.data.data.data)
      processYearOptions(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processYearOptions = async (data) => {
    let years = []
    data &&
      data.map((item) => {
        years.push(item.year)
      })
    setYearOptions(years)
  }

  const processAddYear = async (data) => {
    let response = await addYear(data)
    if (response) {
      processGetAllYear()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateYear = async (data) => {
    let response = await editYear(data)
    if (response) {
      processGetAllYear()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteYear = async (data) => {
    let response = await deleteYear(data)
    if (response) {
      processGetAllYear()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <YearApiData.Provider
      value={{
        processGetAllYear,
        processAddYear,
        processUpdateYear,
        processDeleteYear,
        searchYearRecord,
        yearList,
        yearOptions,
        setYearOptions,
        processSearchYear,
      }}
    >
      {props.children}
    </YearApiData.Provider>
  )
}

export default YearApiDataProvider
