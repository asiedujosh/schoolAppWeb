import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

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

export const getAllQuestion = async () => {
  try {
    let responseOnGetAllQuestion = await axios.get("/api/getAllQuestion")
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
  //console.log(data);

  try {
    let responseOnDeleteQuestion = await axios.delete("/api/deleteQuestion", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteQuestion.status === SUCCESS_STATUS) {
      return responseOnDeleteQuestion.data
    }
  } catch (err) {
    console.error(err)
  }
}
