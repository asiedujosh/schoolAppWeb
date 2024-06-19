import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import {
  addPrice,
  searchPricing,
  deletePrice,
  editPrice,
  getAllPrice,
  getPrice,
} from "./price"

export const PriceApiData = createContext()

const PriceApiDataProvider = (props) => {
  const [priceList, setPriceList] = useState([])
  const [searchPriceRecord, setSearchPriceRecord] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processSearchPricing = async (data) => {
    let responseOnSearch = await searchPricing(data)
    if (responseOnSearch) {
      setSearchPriceRecord(responseOnSearch.data.data)
    }
  }

  const processGetPrice = async (data) => {
    let response = await getPrice(data || 1)
    if (response) {
      setPriceList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddPrice = async (data) => {
    let response = await addPrice(data)
    if (response) {
      processGetPrice()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdatePrice = async (data) => {
    let response = await editPrice(data)
    if (response) {
      processGetPrice()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeletePrice = async (data) => {
    // console.log(data)
    let response = await deletePrice(data)
    if (response) {
      processGetPrice()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <PriceApiData.Provider
      value={{
        processGetPrice,
        processAddPrice,
        processUpdatePrice,
        processDeletePrice,
        priceList,
        processSearchPricing,
        searchPriceRecord,
        paginationData,
      }}
    >
      {props.children}
    </PriceApiData.Provider>
  )
}

export default PriceApiDataProvider
