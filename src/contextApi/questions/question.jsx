import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addQuestion = async (data) => {
  try {
    let responseOnAddQuestion = await axios.post("/api/addQuestion", data)
    if (responseOnAddQuestion.status === SUCCESS_STATUS) {
      return responseOnAddQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addOralQuestion = async (data) => {
  try {
    let responseOnAddOralQuestion = await axios.post(
      "/api/addOralQuestion",
      data
    )
    if (responseOnAddOralQuestion.status === SUCCESS_STATUS) {
      return responseOnAddOralQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const countQuestions = async () => {
  try {
    let responseOnCountQuestions = await axios.get("/api/countQuestions")
    if (responseOnCountQuestions.status === SUCCESS_STATUS) {
      return responseOnCountQuestions.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const countOralQuestions = async () => {
  try {
    let responseOnCountOralQuestions = await axios.get(
      "/api/countOralQuestions"
    )
    if (responseOnCountOralQuestions.status === SUCCESS_STATUS) {
      return responseOnCountOralQuestions.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchQuestion = async (data) => {
  try {
    let responseOnQuestionSearch = await axios.get(
      `/api/searchQuestion?examType=${data.examType}&year=${data.year}&subject=${data.subject}`
    )
    if (responseOnQuestionSearch.status === SUCCESS_STATUS) {
      return responseOnQuestionSearch.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const checkQuestionNo = async (data) => {
  try {
    let responseOnCheckQuestionNo = await axios.get(
      `/api/checkQuestionNo?examType=${data.examType}&year=${data.year}&subject=${data.subject}&questionNo=${data.questionNo}`
    )
    if (responseOnCheckQuestionNo.status === SUCCESS_STATUS) {
      return responseOnCheckQuestionNo.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const searchOralQuestion = async (data) => {
  try {
    let responseOnSearchOralQuestion = await axios.get(
      `/api/searchOralQuestion?examType=${data.examType}&year=${data.year}&subject=${data.subject}`
    )
    if (responseOnSearchOralQuestion.status === SUCCESS_STATUS) {
      return responseOnSearchOralQuestion.data
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllQuestion = async (data) => {
  try {
    let responseOnGetAllQuestion = await axios.get(
      `/api/getAllQuestion?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllQuestion.status === SUCCESS_STATUS) {
      return responseOnGetAllQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllOralQuestion = async (data) => {
  try {
    let responseOnGetAllOralQuestion = await axios.get(
      `/api/getAllOralQuestion?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllOralQuestion.status === SUCCESS_STATUS) {
      return responseOnGetAllOralQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editQuestion = async (data) => {
  try {
    let responseOnEditQuestion = await axios.put(
      `/api/questionUpdate/${data.id}`,
      data
    )
    if (responseOnEditQuestion.status === SUCCESS_STATUS) {
      return responseOnEditQuestion.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteQuestion = async (data) => {
  console.log(data)
  try {
    let responseOnDeleteQuestion = await axios.delete(
      `/api/deleteQuestion/${data.id}`
    )

    if (responseOnDeleteQuestion.status === SUCCESS_STATUS) {
      return responseOnDeleteQuestion.data
    }
  } catch (err) {
    console.error(err)
  }
}
