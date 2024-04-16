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

export const searchSubjectRecords = async (data) => {
  try {
    let responseOnSearchSubject = await axios.get(
      `/api/searchSubject?keyword=${data}`
    )
    if (responseOnSearchSubject.status === SUCCESS_STATUS) {
      return responseOnSearchSubject.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
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

export const editSubject = async (data) => {
  try {
    let responseOnEditSubject = await axios.put(
      `/api/subjectUpdate/${data.id}`,
      data
    )
    if (responseOnEditSubject.status === SUCCESS_STATUS) {
      return responseOnEditSubject.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteSubject = async (data) => {
  //console.log(data);

  try {
    let responseOnDeleteSubject = await axios.delete("/api/deleteSubject", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteSubject.status === SUCCESS_STATUS) {
      return responseOnDeleteSubject.data
    }
  } catch (err) {
    console.error(err)
  }
}
