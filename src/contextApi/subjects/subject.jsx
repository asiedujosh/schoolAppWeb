import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addSubject = async (data) => {
  try {
    let responseOnAddSubject = await axios.post("/api/addSubject", data)
    if (responseOnAddSubject) {
      if (responseOnAddSubject.status === SUCCESS_STATUS) {
        return responseOnAddSubject.data
      }
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
    if (responseOnSearchSubject) {
      if (responseOnSearchSubject.status === SUCCESS_STATUS) {
        return responseOnSearchSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const checkSubjectAvailability = async (data) => {
  try {
    let responseOnCheckSubjectAvailability = await axios.get(
      `/api/checkSubjectAvailability?subject=${data.subject}`
    )
    if (responseOnCheckSubjectAvailability) {
      if (responseOnCheckSubjectAvailability.status === SUCCESS_STATUS) {
        return responseOnCheckSubjectAvailability.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllSubject = async (data) => {
  try {
    let responseOnGetAllSubject = await axios.get(
      `/api/getAllSubject?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllSubject) {
      if (responseOnGetAllSubject.status === SUCCESS_STATUS) {
        return responseOnGetAllSubject.data
      }
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
    if (responseOnEditSubject) {
      if (responseOnEditSubject.status === SUCCESS_STATUS) {
        return responseOnEditSubject.data
      }
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
    let responseOnDeleteSubject = await axios.delete(
      `/api/deleteSubject/${data.id}`
    )
    if (responseOnDeleteSubject) {
      if (responseOnDeleteSubject.status === SUCCESS_STATUS) {
        return responseOnDeleteSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
