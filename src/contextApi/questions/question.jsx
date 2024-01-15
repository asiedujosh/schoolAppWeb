import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addQuestion = async (data) => {
  try {
    let responseOnAddQuestion = await axios.post("/api/addQuestion", data)
    if (responseOnAddQuestion.status === SUCCESS_STATUS) {
      return responseOnAddQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllQuestion = async () => {
  try {
    let responseOnGetAllQuestion = await axios.get("/api/getAllQuestion")
    if (responseOnGetAllQuestion.status === SUCCESS_STATUS) {
      return responseOnGetAllQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
