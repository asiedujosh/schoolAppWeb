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
