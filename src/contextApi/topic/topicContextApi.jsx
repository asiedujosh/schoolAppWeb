import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { addTopic, getAllTopic } from "./topic"

export const TopicApiData = createContext()

const TopicApiDataProvider = (props) => {
  const [topicList, setTopicList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])

  const processGetAllTopic = async () => {
    let response = await getAllTopic()
    if (response) {
      setTopicList(response.data.data)
    }
  }

  const processAddTopic = async (data) => {
    let response = await addTopic(data)
    if (response) {
      processGetAllTopic()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateTopic = async (data) => {
    let response = await editTopic(data)
    if (response) {
      processGetAllTopic()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteTopic = async (data) => {
    let response = await deleteTopic(data)
    if (response) {
      processGetAllTopic()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <TopicApiData.Provider
      value={{
        processGetAllTopic,
        processAddTopic,
        processUpdateTopic,
        processDeleteTopic,
        searchRecord,
        topicList,
      }}
    >
      {props.children}
    </TopicApiData.Provider>
  )
}

export default TopicApiDataProvider
