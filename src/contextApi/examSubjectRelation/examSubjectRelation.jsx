import axios from "../../utils/axios.config"
import { SUCCESS_STATUS, LISTONPAGES } from "../../constants/constant"

export const addExamSubjectRelation = async (data) => {
  try {
    let responseOnAddExamSubject = await axios.post(
      "/api/linkExamSubject",
      data
    )
    if (responseOnAddExamSubject) {
      if (responseOnAddExamSubject.status === SUCCESS_STATUS) {
        return responseOnAddExamSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchExamSubjectRelation = async (data) => {
  try {
    let responseOnSearchExamSubject = await axios.get(
      `/api/searchExamSubject?keyword=${data}`
    )
    if (responseOnSearchExamSubject) {
      if (responseOnSearchExamSubject.status === SUCCESS_STATUS) {
        return responseOnSearchExamSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editExamSubjectLink = async (data) => {
  try {
    let responseOnLinkExamSubject = await axios.put(
      `/api/linkExamSubjectUpdate/${data.id}`,
      data
    )
    // console.log(data)
    if (responseOnLinkExamSubject) {
      if (responseOnLinkExamSubject.status === SUCCESS_STATUS) {
        return responseOnLinkExamSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getExamSubjectLinked = async (data) => {
  try {
    let responseOnGetExamSubject = await axios.get(
      `/api/getAllLinkedExamSubject?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetExamSubject) {
      if (responseOnGetExamSubject.status === SUCCESS_STATUS) {
        return responseOnGetExamSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllExamSubjectLinked = async () => {
  try {
    let responseOnGetAllExamSubject = await axios.get(
      `/api/mobileGetAllLinkedExamSubject`
    )
    if (responseOnGetAllExamSubject) {
      if (responseOnGetAllExamSubject.status === SUCCESS_STATUS) {
        return responseOnGetAllExamSubject.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const deleteExamSubjectLink = async (data) => {
  try {
    let responseOnDeleteExamSubjectLink = await axios.delete(
      `/api/deleteExamSubjectLink/${data.id}`
    )
    if (responseOnDeleteExamSubjectLink) {
      if (responseOnDeleteExamSubjectLink.status === SUCCESS_STATUS) {
        return responseOnDeleteExamSubjectLink.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}
