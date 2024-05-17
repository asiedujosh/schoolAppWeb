import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addYear = async (data) => {
  try {
    let responseOnAddYear = await axios.post("/api/addYear", data)
    if (responseOnAddYear) {
      if (responseOnAddYear.status === SUCCESS_STATUS) {
        return responseOnAddYear.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchYearRecords = async (data) => {
  try {
    let responseOnSearchYear = await axios.get(
      `/api/searchYear?keyword=${data}`
    )
    if (responseOnSearchYear) {
      if (responseOnSearchYear.status === SUCCESS_STATUS) {
        return responseOnSearchYear.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const checkYearAvailability = async (data) => {
  try {
    let responseOnCheckYearAvailability = await axios.get(
      `/api/checkYearAvailability?year=${data.examsYear}`
    )
    if (responseOnCheckYearAvailability) {
      if (responseOnCheckYearAvailability.status === SUCCESS_STATUS) {
        return responseOnCheckYearAvailability.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllYear = async (data) => {
  try {
    let responseOnGetAllYear = await axios.get(
      `/api/getAllYear?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllYear) {
      if (responseOnGetAllYear.status === SUCCESS_STATUS) {
        return responseOnGetAllYear.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editYear = async (data) => {
  try {
    let responseOnEditYear = await axios.put(`/api/yearUpdate/${data.id}`, data)
    if (responseOnEditYear) {
      if (responseOnEditYear.status === SUCCESS_STATUS) {
        return responseOnEditYear.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteYear = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteYear = await axios.delete(`/api/deleteYear/${data.id}`)
    if (responseOnDeleteYear) {
      if (responseOnDeleteYear.status === SUCCESS_STATUS) {
        return responseOnDeleteYear.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
