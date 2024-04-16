import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { getAllSubscribers, countSubscribers } from "./subscribers"

export const SubscribersApiData = createContext()

const SubscribersApiDataProvider = (props) => {
  const [subscribersList, setSubscribersList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])
  const [noOfSubscribers, setNoOfSubscribers] = useState([])

  const processGetAllSubscribers = async () => {
    let response = await getAllSubscribers()
    if (response) {
      // console.log(response)
      setSubscribersList(response.data.data)
    }
  }

  const processCountSubscribers = async () => {
    let response = await countSubscribers()
    if (response) {
      // console.log(response)
      setNoOfSubscribers(response.data.data)
    }
  }

  //   const processAddPackage = async (data) => {
  //     let response = await addPackage(data)
  //     if (response) {
  //       processGetAllPackage()
  //       notify(SUCCESS_STATUS)
  //     }
  //   }

  //   const processUpdatePackage = async (data) => {
  //     let response = await editPackage(data)
  //     if (response) {
  //       processGetAllPackage()
  //       notify(SUCCESS_STATUS)
  //     }
  //   }

  //   const processDeletePackage = async (data) => {
  //     let response = await deletePackage(data)
  //     if (response) {
  //       processGetAllPackage()
  //       notify(SUCCESS_STATUS)
  //     }
  //   }

  return (
    <SubscribersApiData.Provider
      value={{
        processCountSubscribers,
        processGetAllSubscribers,
        searchRecord,
        subscribersList,
        noOfSubscribers,
      }}
    >
      {props.children}
    </SubscribersApiData.Provider>
  )
}

export default SubscribersApiDataProvider
