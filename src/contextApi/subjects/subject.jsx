import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addSubject = async (data) => {
  try {
    let responseOnAddSubject = await axios.post("/api/addSubject", data)
    if (responseOnAddSubject.status === SUCCESS_STATUS) {
      return responseOnAddSubject.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllSubject = async () => {
  try {
    let responseOnGetAllSubject = await axios.get("/api/getAllSubject")
    if (responseOnGetAllSubject.status === SUCCESS_STATUS) {
      return responseOnGetAllSubject.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
