import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addExams,
  getAllExams,
  editExams,
  deleteExams,
  searchExamRecords,
} from "./exams"

export const ExamApiData = createContext()

const ExamApiDataProvider = (props) => {
  const [examsList, setExamsList] = useState([])
  const [searchExamRecord, setSearchExamRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [examOptions, setExamOptions] = useState()

  const processSearchExams = async (data) => {
    let responseOnSearch = await searchExamRecords(data)
    if (responseOnSearch) {
      setSearchExamRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllExams = async () => {
    let response = await getAllExams()
    if (response) {
      setExamsList(response.data.data)
      processExamsOptions(response.data.data)
    }
  }

  const processExamsOptions = async (data) => {
    let exams = []
    data &&
      data.map((item) => {
        exams.push(item.exam)
      })
    setExamOptions(exams)
  }

  const processAddExams = async (data) => {
    let response = await addExams(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateExams = async (data) => {
    let response = await editExams(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteExams = async (data) => {
    // console.log(data)
    let response = await deleteExams(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <ExamApiData.Provider
      value={{
        processAddExams,
        processGetAllExams,
        processUpdateExams,
        processDeleteExams,
        examsList,
        processSearchExams,
        searchExamRecord,
        examOptions,
      }}
    >
      {props.children}
    </ExamApiData.Provider>
  )
}

export default ExamApiDataProvider
