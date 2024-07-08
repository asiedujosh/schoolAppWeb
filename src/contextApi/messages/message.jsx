import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addMessage = async (data) => {
  try {
    let responseOnAddMessage = await axios.post("/api/addMessage", data)
    if (responseOnAddMessage) {
      if (responseOnAddMessage.status === SUCCESS_STATUS) {
        return responseOnAddMessage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchMessage = async (data) => {
  try {
    let responseOnSearchMessage = await axios.get(
      `/api/searchMessage?keyword=${data}`
    )
    if (responseOnSearchMessage) {
      if (responseOnSearchMessage.status === SUCCESS_STATUS) {
        return responseOnSearchMessage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllMessage = async (data) => {
  try {
    let responseOnGetAllMessage = await axios.get(
      `/api/getAllMessage?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllMessage) {
      if (responseOnGetAllMessage.status === SUCCESS_STATUS) {
        return responseOnGetAllMessage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const deleteMessage = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteMessage = await axios.delete(
      `/api/deleteMessage/${data.id}`
    )

    if (responseOnDeleteMessage) {
      if (responseOnDeleteMessage.status === SUCCESS_STATUS) {
        return responseOnDeleteMessage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
