import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addExams = async (data) => {
  try {
    let responseOnAddExams = await axios.post("/api/addExam", data)
    if (responseOnAddExams.status === SUCCESS_STATUS) {
      return responseOnAddExams.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchExamRecords = async (data) => {
  try {
    let responseOnSearchExam = await axios.get(
      `/api/searchExam?keyword=${data}`
    )
    if (responseOnSearchExam.status === SUCCESS_STATUS) {
      return responseOnSearchExam.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllExams = async (data) => {
  try {
    let responseOnGetAllExams = await axios.get(
      `/api/getAllExam?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllExams.status === SUCCESS_STATUS) {
      return responseOnGetAllExams.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editExams = async (data) => {
  try {
    let responseOnEditExams = await axios.put(
      `/api/examsUpdate/${data.id}`,
      data
    )
    if (responseOnEditExams.status === SUCCESS_STATUS) {
      return responseOnEditExams.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteExams = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteExams = await axios.delete(
      `/api/deleteExams/${data.id}`
    )

    if (responseOnDeleteExams.status === SUCCESS_STATUS) {
      return responseOnDeleteExams.data
    }
  } catch (err) {
    console.error(err)
  }
}
