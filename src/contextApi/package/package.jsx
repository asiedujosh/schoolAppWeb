import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addPackage = async (data) => {
  try {
    let responseOnAddPackage = await axios.post("/api/addPricePackage", data)
    if (responseOnAddPackage) {
      if (responseOnAddPackage.status === SUCCESS_STATUS) {
        return responseOnAddPackage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllPackage = async () => {
  try {
    let responseOnGetAllPackage = await axios.get("/api/getAllPackage")
    if (responseOnGetAllPackage) {
      if (responseOnGetAllPackage.status === SUCCESS_STATUS) {
        return responseOnGetAllPackage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editPackage = async (data) => {
  try {
    let responseOnEditPackage = await axios.put(
      `/api/packageUpdate/${data.id}`,
      data
    )
    if (responseOnEditPackage) {
      if (responseOnEditPackage.status === SUCCESS_STATUS) {
        return responseOnEditPackage.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deletePackage = async (data) => {
  //console.log(data);
  try {
    let responseOnDeletePackage = await axios.delete("/api/deletePackage", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })
    if (responseOnDeletePackage) {
      if (responseOnDeletePackage.status === SUCCESS_STATUS) {
        return responseOnDeleteTopic.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
