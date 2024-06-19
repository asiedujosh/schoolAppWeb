import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addDuration,
  getAllDuration,
  editDuration,
  deleteDuration,
  searchDuration,
} from "./duration"

export const DurationApiData = createContext()

const DurationApiDataProvider = (props) => {
  const [durationList, setDurationList] = useState([])
  const [searchDurationRecord, setSearchDurationRecord] = useState([])
  //   const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [durationOptions, setDurationOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processSearchDuration = async (data) => {
    let responseOnSearch = await searchDuration(data)
    if (responseOnSearch) {
      setSearchDurationRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllDuration = async (data) => {
    let response = await getAllDuration(data || 1)
    if (response) {
      setDurationList(response.data.data.data)
      processDurationOptions(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processDurationOptions = async (data) => {
    let durations = []
    data &&
      data.map((item) => {
        durations.push(item.name)
      })
    setDurationOptions(durations)
  }

  const processAddDuration = async (data) => {
    let response = await addDuration(data)
    if (response) {
      processGetAllDuration()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateDuration = async (data) => {
    let response = await editDuration(data)
    if (response) {
      processGetAllDuration()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteDuration = async (data) => {
    // console.log(data)
    let response = await deleteDuration(data)
    if (response) {
      processGetAllDuration()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <DurationApiData.Provider
      value={{
        processAddDuration,
        processGetAllDuration,
        processUpdateDuration,
        processDeleteDuration,
        durationList,
        processSearchDuration,
        paginationData,
        searchDurationRecord,
        durationOptions,
      }}
    >
      {props.children}
    </DurationApiData.Provider>
  )
}

export default DurationApiDataProvider
