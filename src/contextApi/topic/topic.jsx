import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addTopic = async (data) => {
  console.log(data)
  try {
    let responseOnAddTopic = await axios.post("/api/addTopic", data)
    if (responseOnAddTopic.status === SUCCESS_STATUS) {
      return responseOnAddTopic.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllTopic = async () => {
  try {
    let responseOnGetAllTopic = await axios.get("/api/getAllTopic")
    if (responseOnGetAllTopic.status === SUCCESS_STATUS) {
      return responseOnGetAllTopic.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
