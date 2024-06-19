import axios from "../../utils/axios.config"
import { SUCCESS_STATUS, LISTONPAGES } from "../../constants/constant"

export const addPriviledge = async (data) => {
  try {
    let responseOnAddPriviledge = await axios.post("/api/storePriviledge", data)
    if (responseOnAddPriviledge) {
      if (responseOnAddPriviledge.status === SUCCESS_STATUS) {
        return responseOnAddPriviledge.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editPriviledge = async (data) => {
  try {
    let responseOnEditPriviledge = await axios.put(
      `/api/priviledgeUpdate/${data.id}`,
      data
    )
    // console.log(data)
    if (responseOnEditPriviledge) {
      if (responseOnEditPriviledge.status === SUCCESS_STATUS) {
        return responseOnEditPriviledge.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchPriviledge = async (data) => {
  try {
    let responseOnSearchPriviledge = await axios.get(
      `/api/searchPriviledge?keyword=${data}`
    )
    if (responseOnSearchPriviledge) {
      if (responseOnSearchPriviledge.status === SUCCESS_STATUS) {
        return responseOnSearchPriviledge.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllPriviledge = async () => {
  try {
    let responseOnGetAllPriviledge = await axios.get(`/api/getAllPriviledge`)
    if (responseOnGetAllPriviledge) {
      if (responseOnGetAllPriviledge.status === SUCCESS_STATUS) {
        return responseOnGetAllPriviledge.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const deletePriviledge = async (data) => {
  try {
    let responseOnDeletePriviledge = await axios.delete(
      `/api/deletePriviledge/${data.id}`
    )
    if (responseOnDeletePriviledge) {
      if (responseOnDeletePriviledge.status === SUCCESS_STATUS) {
        return responseOnDeletePriviledge.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}
