import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { addExams, getAllExams } from "./exams"

export const ExamApiData = createContext()

const ExamApiDataProvider = (props) => {
  const [examsList, setExamsList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])

  const processGetAllExams = async () => {
    let response = await getAllExams()
    if (response) {
      setExamsList(response.data.data)
    }
  }

  const processAddExams = async (data) => {
    let response = await addExams(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateExams = async () => {}

  const processDeleteExams = async () => {}

  return (
    <ExamApiData.Provider
      value={{
        processAddExams,
        processGetAllExams,
        examsList,
        searchRecord,
      }}
    >
      {props.children}
    </ExamApiData.Provider>
  )
}

export default ExamApiDataProvider
