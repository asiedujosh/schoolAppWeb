import axios from "../../utils/axios.config"
import { SUCCESS_STATUS, LISTONPAGES } from "../../constants/constant"

export const addPrice = async (data) => {
  try {
    let responseOnAddPrice = await axios.post("/api/storePricing", data)
    if (responseOnAddPrice) {
      if (responseOnAddPrice.status === SUCCESS_STATUS) {
        return responseOnAddPrice.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editPrice = async (data) => {
  try {
    let responseOnEditPrice = await axios.put(
      `/api/pricingUpdate/${data.id}`,
      data
    )
    // console.log(data)
    if (responseOnEditPrice) {
      if (responseOnEditPrice.status === SUCCESS_STATUS) {
        return responseOnEditPrice.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getPrice = async (data) => {
  try {
    let responseOnGetPrice = await axios.get(
      `/api/getPricing?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetPrice) {
      if (responseOnGetPrice.status === SUCCESS_STATUS) {
        return responseOnGetPrice.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchPricing = async (data) => {
  try {
    let responseOnSearchPricing = await axios.get(
      `/api/searchPricing?keyword=${data}`
    )
    if (responseOnSearchPricing) {
      if (responseOnSearchPricing.status === SUCCESS_STATUS) {
        return responseOnSearchPricing.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllPrice = async () => {
  try {
    let responseOnGetAllPrice = await axios.get(`/api/getAllPricing`)
    if (responseOnGetAllPrice) {
      if (responseOnGetAllPrice.status === SUCCESS_STATUS) {
        return responseOnGetAllPrice.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const deletePrice = async (data) => {
  try {
    let responseOnDeletePrice = await axios.delete(
      `/api/deletePricing/${data.id}`
    )
    if (responseOnDeletePrice) {
      if (responseOnDeletePrice.status === SUCCESS_STATUS) {
        return responseOnDeletePrice.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}
