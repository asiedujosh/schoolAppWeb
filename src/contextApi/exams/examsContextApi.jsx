import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addExams,
  getAllExams,
  editExams,
  deleteExams,
  checkExamAvailability,
  searchExamRecords,
} from "./exams"

export const ExamApiData = createContext()

const ExamApiDataProvider = (props) => {
  const [examsList, setExamsList] = useState([])
  const [searchExamRecord, setSearchExamRecord] = useState([])
  const [searchPaginationData, setSearchPaginationData] = useState(null)
  const [examOptions, setExamOptions] = useState()
  const [paginationData, setPaginationData] = useState()

  const processSearchExams = async (data) => {
    let responseOnSearch = await searchExamRecords(data)
    if (responseOnSearch) {
      setSearchExamRecord(responseOnSearch.data.data)
    }
  }

  const processCheckExamAvailability = async (data) => {
    let response = await checkExamAvailability(data)
    if (response) {
      return response.data.data
      // setPrompt((prev) => !prev)
    }
  }

  const processGetAllExams = async (data) => {
    let response = await getAllExams(data || 1)
    if (response) {
      setExamsList(response.data.data.data)
      processExamsOptions(response.data.data.data)
      setPaginationData(response.data.pagination)
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
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateExams = async (data) => {
    let response = await editExams(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteExams = async (data) => {
    // console.log(data)
    let response = await deleteExams(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <ExamApiData.Provider
      value={{
        processAddExams,
        processGetAllExams,
        processUpdateExams,
        processDeleteExams,
        processCheckExamAvailability,
        examsList,
        processSearchExams,
        paginationData,
        searchExamRecord,
        examOptions,
      }}
    >
      {props.children}
    </ExamApiData.Provider>
  )
}

export default ExamApiDataProvider
