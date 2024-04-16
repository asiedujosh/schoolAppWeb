import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addYear = async (data) => {
  try {
    let responseOnAddYear = await axios.post("/api/addYear", data)
    if (responseOnAddYear.status === SUCCESS_STATUS) {
      return responseOnAddYear.data
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
    if (responseOnSearchYear.status === SUCCESS_STATUS) {
      return responseOnSearchYear.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllYear = async () => {
  try {
    let responseOnGetAllYear = await axios.get("/api/getAllYear")
    if (responseOnGetAllYear.status === SUCCESS_STATUS) {
      return responseOnGetAllYear.data
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
    if (responseOnEditYear.status === SUCCESS_STATUS) {
      return responseOnEditYear.data
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
    let responseOnDeleteYear = await axios.delete("/api/deleteYear", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteYear.status === SUCCESS_STATUS) {
      return responseOnDeleteYear.data
    }
  } catch (err) {
    console.error(err)
  }
}
