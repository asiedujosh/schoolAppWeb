import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addNews,
  getAllNews,
  editNews,
  deleteNews,
  searchNewsRecords,
} from "./news"

export const NewsApiData = createContext()

const NewsApiDataProvider = (props) => {
  const [newsList, setNewsList] = useState([])
  const [searchNewsRecord, setSearchNewsRecord] = useState([])
  const [newsFormData, setNewsFormData] = useState({})

  const processSearchNews = async (data) => {
    let responseOnSearch = await searchNewsRecords(data)
    if (responseOnSearch) {
      setSearchNewsRecord(responseOnSearch.data.data)
    }
  }

  const preparingNewsForEdit = (id) => {
    setNewsFormData()
    let data = newsList.filter((item) => item.id == id)

    setNewsFormData((prevFormData) => ({
      ...prevFormData,
      title: data[0].title,
      news: data[0].news,
    }))

    // setEditClear((prev) => !prev)
  }

  const processGetAllNews = async () => {
    let response = await getAllNews()
    if (response) {
      console.log(response)
      setNewsList(response.data.data)
    }
  }

  const processAddNews = async (data) => {
    let response = await addNews(data)
    if (response) {
      processGetAllNews()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateNews = async (data) => {
    let response = await editNews(data)
    if (response) {
      processGetAllNews()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteNews = async (data) => {
    // console.log(data)
    let response = await deleteNews(data)
    if (response) {
      processGetAllNews()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <NewsApiData.Provider
      value={{
        processAddNews,
        processGetAllNews,
        processUpdateNews,
        processDeleteNews,
        newsList,
        processSearchNews,
        searchNewsRecord,
        preparingNewsForEdit,
        newsFormData,
      }}
    >
      {props.children}
    </NewsApiData.Provider>
  )
}

export default NewsApiDataProvider
