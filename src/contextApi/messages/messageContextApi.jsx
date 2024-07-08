import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addMessage,
  getAllMessage,
  searchMessage,
  deleteMessage,
} from "./message"

export const MessageApiData = createContext()

const MessageApiDataProvider = (props) => {
  const [messageList, setMessageList] = useState([])
  const [searchMessageRecord, setSearchMessageRecord] = useState([])
  const [paginationData, setPaginationData] = useState()

  const processSearchMessage = async (data) => {
    let responseOnSearch = await searchMessage(data)
    if (responseOnSearch) {
      setSearchMessageRecord(responseOnSearchMessage.data.data)
    }
  }

  const processGetMessage = async (data) => {
    let response = await getAllMessage(data || 1)
    if (response) {
      setMessageList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddMessage = async (data) => {
    let response = await addMessage(data)
    if (response) {
      processGetMessage()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteMessage = async (data) => {
    let response = await deleteMessage(data)
    if (response) {
      processGetMessage()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <MessageApiData.Provider
      value={{
        processSearchMessage,
        processGetMessage,
        processAddMessage,
        processDeleteMessage,
        messageList,
        paginationData,
        searchMessageRecord,
      }}
    >
      {props.children}
    </MessageApiData.Provider>
  )
}

export default MessageApiDataProvider
