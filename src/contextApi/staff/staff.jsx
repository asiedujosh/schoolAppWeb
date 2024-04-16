import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addStaff = async (data) => {
  try {
    let responseOnAddStaff = await axios.post("/api/workerRegister", data)
    if (responseOnAddStaff.status === SUCCESS_STATUS) {
      return responseOnAddStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllStaff = async () => {
  try {
    let responseOnGetAllStaff = await axios.get("/api/getAllStaff")
    if (responseOnGetAllStaff.status === SUCCESS_STATUS) {
      return responseOnGetAllStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editStaff = async (data) => {
  try {
    let responseOnEditStaff = await axios.put(
      `/api/staffUpdate/${data.dataId}`,
      data
    )
    if (responseOnEditStaff.status === SUCCESS_STATUS) {
      return responseOnEditStaff.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteStaff = async (data) => {
  //console.log(data);

  try {
    let responseOnDeleteStaff = await axios.delete("/api/deleteStaff", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteStaff.status === SUCCESS_STATUS) {
      return responseOnDeleteStaff.data
    }
  } catch (err) {
    console.error(err)
  }
}
