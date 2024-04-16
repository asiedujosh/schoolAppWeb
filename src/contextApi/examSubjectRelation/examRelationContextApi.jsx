import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  getAllExamSubjectLinked,
  addExamSubjectRelation,
} from "./examSubjectRelation"

export const ExamSubjectApiData = createContext()

const ExamSubjectApiDataProvider = (props) => {
  const [examSubjectLinkList, setExamSubjectLinkList] = useState([])

  const processGetAllExamSubjectLink = async () => {
    let response = await getAllExamSubjectLinked()
    if (response) {
      setExamSubjectLinkList(response.data.data)
    }
  }

  const processAddExamSubjectLink = async (data) => {
    let response = await addExamSubjectRelation(data)
    if (response) {
      processGetAllExamSubjectLink()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateExamSubject = async (data) => {
    let response = await editExamSubjectLink(data)
    if (response) {
      processGetAllExamSubjectLink()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteExamSubject = async (data) => {
    // console.log(data)
    let response = await deleteExamSubjectLink(data)
    if (response) {
      processGetAllExamSubjectLink()()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <ExamSubjectApiData.Provider
      value={{
        processGetAllExamSubjectLink,
        processAddExamSubjectLink,
        processUpdateExamSubject,
        processDeleteExamSubject,
        examSubjectLinkList,
      }}
    >
      {props.children}
    </ExamSubjectApiData.Provider>
  )
}

export default ExamSubjectApiDataProvider
