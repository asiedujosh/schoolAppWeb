import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addExamSubjectRelation = async (data) => {
  try {
    let responseOnAddExamSubject = await axios.post(
      "/api/linkExamSubject",
      data
    )
    if (responseOnAddExamSubject.status === SUCCESS_STATUS) {
      return responseOnAddExamSubject.data
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
    let responseOnGetExamSubject = await axios.get(
      "/api/getAllLinkedExamSubject"
    )
    if (responseOnGetExamSubject.status === SUCCESS_STATUS) {
      return responseOnGetExamSubject.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
