import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  searchExamSubjectRelation,
  getExamSubjectLinked,
  getAllExamSubjectLinked,
  addExamSubjectRelation,
  editExamSubjectLink,
  deleteExamSubjectLink,
} from "./examSubjectRelation"

export const ExamSubjectApiData = createContext()

const ExamSubjectApiDataProvider = (props) => {
  const [examSubjectAllList, setExamSubjectAllList] = useState([])
  const [examSubjectLinkList, setExamSubjectLinkList] = useState([])
  const [searchExamSubjectRecord, setSearchExamSubjectRecord] = useState([])
  const [examSubjectLinkOptions, setExamSubjectLinkOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processGetExamSubjectLink = async (data) => {
    let response = await getExamSubjectLinked(data || 1)
    if (response) {
      setExamSubjectLinkList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSearchExamsSubjectLink = async (data) => {
    let responseOnSearch = await searchExamSubjectRelation(data)
    if (responseOnSearch) {
      setSearchExamSubjectRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllExamSubjectLink = async () => {
    let response = await getAllExamSubjectLinked()
    if (response) {
      processExamsSubjectLinkOptions(response.data.data)
      setExamSubjectAllList(response.data.data)
    }
  }

  const processExamsSubjectLinkOptions = async (data) => {
    let examSubjectLinkOption = []
    data &&
      data.map((item) => {
        examSubjectLinkOption.push(item.name)
      })
    setExamSubjectLinkOptions(examSubjectLinkOption)
  }

  const processAddExamSubjectLink = async (data) => {
    let response = await addExamSubjectRelation(data)
    if (response) {
      processGetAllExamSubjectLink()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateExamSubject = async (data) => {
    let response = await editExamSubjectLink(data)
    if (response) {
      processGetAllExamSubjectLink()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteExamSubject = async (data) => {
    // console.log(data)
    let response = await deleteExamSubjectLink(data)
    if (response) {
      processGetExamSubjectLink()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <ExamSubjectApiData.Provider
      value={{
        searchExamSubjectRecord,
        processGetExamSubjectLink,
        processGetAllExamSubjectLink,
        processSearchExamsSubjectLink,
        processAddExamSubjectLink,
        processUpdateExamSubject,
        processDeleteExamSubject,
        examSubjectAllList,
        examSubjectLinkOptions,
        examSubjectLinkList,
        paginationData,
      }}
    >
      {props.children}
    </ExamSubjectApiData.Provider>
  )
}

export default ExamSubjectApiDataProvider
