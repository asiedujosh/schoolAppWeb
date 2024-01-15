import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addExams = async (data) => {
  try {
    let responseOnAddExams = await axios.post("/api/addExam", data)
    if (responseOnAddExams.status === SUCCESS_STATUS) {
      return responseOnAddExams.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllExams = async () => {
  try {
    let responseOnGetAllExams = await axios.get("/api/getAllExam")
    if (responseOnGetAllExams.status === SUCCESS_STATUS) {
      return responseOnGetAllExams.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
