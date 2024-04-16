import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { deleteUser, getAllUser, searchUserRecords } from "./user"

export const UserApiData = createContext()

const UserApiDataProvider = (props) => {
  const [userList, setUserList] = useState([])
  const [searchUserRecord, setSearchUserRecord] = useState([])

  const processSearchUser = async (data) => {
    let responseOnSearch = await searchUserRecords(data)
    if (responseOnSearch) {
      setSearchUserRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllUser = async () => {
    let response = await getAllUser()
    console.log(response)
    if (response) {
      console.log(response)
      setUserList(response.data.data)
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
      }}
    >
      {props.children}
    </UserApiData.Provider>
  )
}

export default UserApiDataProvider
