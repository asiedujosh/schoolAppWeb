import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import {
  addPriviledge,
  searchPriviledge,
  deletePriviledge,
  editPriviledge,
  getAllPriviledge,
} from "./priviledge"

export const PriviledgeApiData = createContext()

const PriviledgeApiDataProvider = (props) => {
  const [priviledgeList, setPriviledgeList] = useState([])
  const [searchPriviledgeRecord, setSearchPriviledgeRecord] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processSearchPriviledge = async (data) => {
    let responseOnSearch = await searchPriviledge(data)
    if (responseOnSearch) {
      setSearchPriviledgeRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllPriviledge = async (data) => {
    let response = await getAllPriviledge(data || 1)
    if (response) {
      setPriviledgeList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddPriviledge = async (data) => {
    let response = await addPriviledge(data)
    if (response) {
      processGetAllPriviledge()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdatePriviledge = async (data) => {
    let response = await editPriviledge(data)
    if (response) {
      processGetAllPriviledge()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeletePriviledge = async (data) => {
    // console.log(data)
    let response = await deletePriviledge(data)
    if (response) {
      processGetAllPriviledge()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <PriviledgeApiData.Provider
      value={{
        processGetAllPriviledge,
        processAddPriviledge,
        processUpdatePriviledge,
        processDeletePriviledge,
        priviledgeList,
        processSearchPriviledge,
        searchPriviledgeRecord,
        paginationData,
      }}
    >
      {props.children}
    </PriviledgeApiData.Provider>
  )
}

export default PriviledgeApiDataProvider
