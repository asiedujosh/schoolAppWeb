import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import { addStaff, deleteStaff, editStaff, getAllStaff } from "./staff"

export const StaffApiData = createContext()

const StaffApiDataProvider = (props) => {
  const [staffList, setStaffList] = useState([])
  const [searchStaffRecord, setSearchStaffRecord] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processGetAllStaff = async (data) => {
    let response = await getAllStaff(data || 1)
    if (response) {
      setStaffList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddStaff = async (data) => {
    let response = await addStaff(data)
    if (response) {
      processGetAllStaff()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateStaff = async (data) => {
    let response = await editStaff(data)
    if (response) {
      processGetAllStaff()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteStaff = async (data) => {
    // console.log(data)
    let response = await deleteStaff(data)
    if (response) {
      processGetAllStaff()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <StaffApiData.Provider
      value={{
        processGetAllStaff,
        processAddStaff,
        processUpdateStaff,
        processDeleteStaff,
        staffList,
        searchStaffRecord,
        paginationData,
      }}
    >
      {props.children}
    </StaffApiData.Provider>
  )
}

export default StaffApiDataProvider
