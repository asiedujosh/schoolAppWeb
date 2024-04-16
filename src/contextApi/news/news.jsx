import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const addNews = async (data) => {
  try {
    let responseOnAddNews = await axios.post("/api/addNews", data)
    if (responseOnAddNews.status === SUCCESS_STATUS) {
      return responseOnAddNews.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchNewsRecords = async (data) => {
  try {
    let responseOnSearchNews = await axios.get(
      `/api/searchNews?keyword=${data}`
    )
    if (responseOnSearchNews.status === SUCCESS_STATUS) {
      return responseOnSearchNews.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllNews = async () => {
  try {
    let responseOnGetAllNews = await axios.get("/api/getAllNews")
    if (responseOnGetAllNews.status === SUCCESS_STATUS) {
      return responseOnGetAllNews.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editNews = async (data) => {
  try {
    let responseOnEditNews = await axios.put(`/api/newsUpdate/${data.id}`, data)
    if (responseOnEditNews.status === SUCCESS_STATUS) {
      return responseOnEditNews.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteNews = async (data) => {
  //console.log(data);

  try {
    let responseOnDeleteNews = await axios.delete("/api/deleteNews", {
      data: data, // Pass the data in the config object
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
      },
    })

    if (responseOnDeleteNews.status === SUCCESS_STATUS) {
      return responseOnDeleteNews.data
    }
  } catch (err) {
    console.error(err)
  }
}
