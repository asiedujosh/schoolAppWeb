import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addPackage,
  getAllPackage,
  editPackage,
  deletePackage,
} from "./package"

export const PackageApiData = createContext()

const PackageApiDataProvider = (props) => {
  const [packageList, setPackageList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])

  const processGetAllPackage = async () => {
    let response = await getAllPackage()
    if (response) {
      console.log(response)
      setPackageList(response.data.data)
    }
  }

  const processAddPackage = async (data) => {
    let response = await addPackage(data)
    if (response) {
      processGetAllPackage()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdatePackage = async (data) => {
    let response = await editPackage(data)
    if (response) {
      processGetAllPackage()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeletePackage = async (data) => {
    let response = await deletePackage(data)
    if (response) {
      processGetAllPackage()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <PackageApiData.Provider
      value={{
        processGetAllPackage,
        processAddPackage,
        processUpdatePackage,
        processDeletePackage,
        searchRecord,
        packageList,
      }}
    >
      {props.children}
    </PackageApiData.Provider>
  )
}

export default PackageApiDataProvider
