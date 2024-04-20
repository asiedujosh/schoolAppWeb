import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const getAllUser = async (data) => {
  try {
    let responseOnGetAllUser = await axios.get(
      `/api/getAllUsers?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllUser.status === SUCCESS_STATUS) {
      return responseOnGetAllUser.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchUserRecords = async (data) => {
  try {
    let responseOnSearchUser = await axios.get(
      `/api/searchUser?keyword=${data}`
    )
    if (responseOnSearchUser.status === SUCCESS_STATUS) {
      return responseOnSearchUser.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteUser = await axios.delete("/api/deleteUser", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })
    if (responseOnDeleteUser.status === SUCCESS_STATUS) {
      return responseOnDeleteUser.data
    }
  } catch (err) {
    console.error(err)
  }
}
