import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import { addStaff, deleteStaff, editStaff, getAllStaff } from "./staff"

export const StaffApiData = createContext()

const StaffApiDataProvider = (props) => {
  const [staffList, setStaffList] = useState([])
  const [searchStaffRecord, setSearchStaffRecord] = useState([])

  const processGetAllStaff = async () => {
    let response = await getAllStaff()
    if (response) {
      setStaffList(response.data.data)
    }
  }

  const processAddStaff = async (data) => {
    let response = await addStaff(data)
    if (response) {
      processGetAllStaff()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateStaff = async (data) => {
    let response = await editStaff(data)
    if (response) {
      processGetAllStaff()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteStaff = async () => {
    // console.log(data)
    let response = await deleteStaff(data)
    if (response) {
      pprocessGetAllStaff()
      notify(SUCCESS_STATUS)
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
      }}
    >
      {props.children}
    </StaffApiData.Provider>
  )
}

export default StaffApiDataProvider
