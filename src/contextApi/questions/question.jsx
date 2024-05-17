import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addQuestion = async (data) => {
  try {
    let responseOnAddQuestion = await axios.post("/api/addQuestion", data)
    if (responseOnAddQuestion) {
      if (responseOnAddQuestion.status === SUCCESS_STATUS) {
        return responseOnAddQuestion.data
      }
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
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    if (responseOnAddOralQuestion) {
      if (responseOnAddOralQuestion.status === SUCCESS_STATUS) {
        return responseOnAddOralQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const countQuestions = async () => {
  try {
    let responseOnCountQuestions = await axios.get("/api/countQuestions")
    if (responseOnCountQuestions) {
      if (responseOnCountQuestions.status === SUCCESS_STATUS) {
        return responseOnCountQuestions.data
      }
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
    if (responseOnCountOralQuestions) {
      if (responseOnCountOralQuestions.status === SUCCESS_STATUS) {
        return responseOnCountOralQuestions.data
      }
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
    if (responseOnQuestionSearch) {
      if (responseOnQuestionSearch.status === SUCCESS_STATUS) {
        return responseOnQuestionSearch.data
      }
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
    if (responseOnCheckQuestionNo) {
      if (responseOnCheckQuestionNo.status === SUCCESS_STATUS) {
        return responseOnCheckQuestionNo.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const checkOralQuestionNo = async (data) => {
  try {
    let responseOnCheckOralQuestionNo = await axios.get(
      `/api/checkOralQuestionNo?examType=${data.examType}&year=${data.year}&subject=${data.subject}&questionNo=${data.questionNo}`
    )
    if (responseOnCheckOralQuestionNo) {
      if (responseOnCheckOralQuestionNo.status === SUCCESS_STATUS) {
        return responseOnCheckOralQuestionNo.data
      }
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
    if (responseOnSearchOralQuestion) {
      if (responseOnSearchOralQuestion.status === SUCCESS_STATUS) {
        return responseOnSearchOralQuestion.data
      }
    } else {
      return false
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
    if (responseOnGetAllQuestion) {
      if (responseOnGetAllQuestion.status === SUCCESS_STATUS) {
        return responseOnGetAllQuestion.data
      }
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
    if (responseOnGetAllOralQuestion) {
      if (responseOnGetAllOralQuestion.status === SUCCESS_STATUS) {
        return responseOnGetAllOralQuestion.data
      }
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
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    if (responseOnEditQuestion) {
      if (responseOnEditQuestion.status === SUCCESS_STATUS) {
        return responseOnEditQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editOralQuestion = async (data) => {
  try {
    let responseOnEditOralQuestion = await axios.post(
      `/api/oralQuestionUpdate/${data.id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    if (responseOnEditOralQuestion) {
      if (responseOnEditOralQuestion.status === SUCCESS_STATUS) {
        return responseOnEditOralQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteQuestion = async (data) => {
  try {
    let responseOnDeleteQuestion = await axios.delete(
      `/api/deleteQuestion/${data.id}`
    )
    if (responseOnDeleteQuestion) {
      if (responseOnDeleteQuestion.status === SUCCESS_STATUS) {
        return responseOnDeleteQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteOralQuestion = async (data) => {
  try {
    let responseOnDeleteOralQuestion = await axios.delete(
      `/api/deleteOralQuestion/${data.id}?oldPath=${data.oldPath}`
    )

    if (responseOnDeleteOralQuestion) {
      if (responseOnDeleteOralQuestion.status === SUCCESS_STATUS) {
        return responseOnDeleteOralQuestion.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
