import axios from "../../utils/axios.config"
import { SUCCESS_STATUS, LISTONPAGES } from "../../constants/constant"

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

export const getAllTopic = async (data) => {
  try {
    let responseOnGetAllTopic = await axios.get(
      `/api/getAllTopic?page=${data}&perPage=${LISTONPAGES}`
    )
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

export const editTopic = async (data) => {
  try {
    let responseOnEditTopic = await axios.put(
      `/api/topicUpdate/${data.id}`,
      data
    )
    if (responseOnEditTopic.status === SUCCESS_STATUS) {
      return responseOnEditTopic.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteTopic = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteTopic = await axios.delete(
      `/api/deleteTopic/${data.id}`
    )

    if (responseOnDeleteTopic.status === SUCCESS_STATUS) {
      return responseOnDeleteTopic.data
    }
  } catch (err) {
    console.error(err)
  }
}
