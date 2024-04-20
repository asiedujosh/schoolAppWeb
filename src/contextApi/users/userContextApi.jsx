import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { deleteUser, getAllUser, searchUserRecords } from "./user"

export const UserApiData = createContext()

const UserApiDataProvider = (props) => {
  const [userList, setUserList] = useState([])
  const [searchUserRecord, setSearchUserRecord] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processSearchUser = async (data) => {
    let responseOnSearch = await searchUserRecords(data)
    if (responseOnSearch) {
      setSearchUserRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllUser = async (data) => {
    let response = await getAllUser(data || 1)
    if (response) {
      setUserList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processDeleteUser = async (data) => {
    // console.log(data)
    let response = await deleteUser(data)
    if (response) {
      pprocessGetAllUser()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <UserApiData.Provider
      value={{
        processGetAllUser,
        processDeleteUser,
        userList,
        searchUserRecord,
        processSearchUser,
        paginationData,
      }}
    >
      {props.children}
    </UserApiData.Provider>
  )
}

export default UserApiDataProvider
