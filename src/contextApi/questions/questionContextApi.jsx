import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import {
  addQuestion,
  addOralQuestion,
  deleteQuestion,
  deleteOralQuestion,
  editQuestion,
  editOralQuestion,
  searchQuestion,
  searchOralQuestion,
  getAllQuestion,
  getAllOralQuestion,
  countQuestions,
  countOralQuestions,
  checkQuestionNo,
  checkOralQuestionNo,
} from "./question"

export const QuestionApiData = createContext()

const QuestionApiDataProvider = (props) => {
  const [noOfQuestions, setNoOfQuestions] = useState(0)
  const [noOfOralQuestions, setNoOfOralQuestions] = useState(0)
  const [questionList, setQuestionList] = useState([])
  const [oralQuestionList, setOralQuestionList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])
  const [searchOralRecord, setSearchOralRecord] = useState([])
  const [questionFormData, setQuestionFormData] = useState({})
  const [oralQuestionFormData, setOralQuestionFormData] = useState({})
  const [editClear, setEditClear] = useState(false)
  const [paginationData, setPaginationData] = useState()
  const [loading, setLoading] = useState(false)
  const [searchLoad, setSearchLoad] = useState(false)
  const [prompt, setPrompt] = useState(false)

  const preparingQuestForEdit = (id) => {
    setQuestionFormData()
    let data
    data = questionList.filter((item) => item.id == id)
    if (data.length == 0) {
      data = searchRecord.filter((item) => item.id == id)
    }

    setQuestionFormData((prevFormData) => ({
      ...prevFormData,
      examType: data[0].examId,
      year: data[0].yearId,
      subject: data[0].subjectId,
      topic: data[0].topicId,
      answer: data[0].answer,
      questionNo: data[0].questionNo,
      question: data[0].question,
      questionEquation: data[0].questionEquation,
      answerOptions: data[0].options,
      optionsWithEquation: data[0].optionsWithEquation,
      imageOptions: data[0].imageOptions,
      hints: data[0].hints,
    }))

    // setEditClear((prev) => !prev)
  }

  const preparingOralQuestForEdit = (id) => {
    setOralQuestionFormData()
    let data
    data = oralQuestionList.filter((item) => item.id == id)
    if (data.length == 0) {
      data = searchOralRecord.filter((item) => item.id == id)
    }

    setOralQuestionFormData((prevFormData) => ({
      ...prevFormData,
      examType: data[0].examId,
      year: data[0].yearId,
      subject: data[0].subjectId,
      topic: data[0].topicId,
      comment: data[0].comment,
      answer: data[0].answer,
      questionNo: data[0].questionNo,
      oldPath: data[0].question,
      question: data[0].audio_url,
      mimeType: data[0].mimeType,
      answerOptions: data[0].options,
      hints: data[0].hints,
    }))
  }

  const processGetAllQuestion = async (data) => {
    let response = await getAllQuestion(data || 1)
    if (response) {
      setQuestionList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetAllOralQuestion = async (data) => {
    let response = await getAllOralQuestion(data || 1)
    if (response) {
      setOralQuestionList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processSearchQuestion = async (data) => {
    setSearchLoad((prev) => !prev)
    let response = await searchQuestion(data)
    if (response) {
      setSearchRecord(response.data.data)
      setSearchLoad((prev) => !prev)
    }
  }

  const processCheckQuestionNo = async (data) => {
    let response = await checkQuestionNo(data)
    if (response) {
      return response.data.data
      // setPrompt((prev) => !prev)
    }
  }

  const processCheckOralQuestionNo = async (data) => {
    let response = await checkOralQuestionNo(data)
    if (response) {
      return response.data.data
    }
  }

  const processSearchOralQuestion = async (data) => {
    setSearchLoad((prev) => !prev)
    let response = await searchOralQuestion(data)
    if (response) {
      setSearchOralRecord(response.data.data)
      setSearchLoad((prev) => !prev)
    }
  }

  const processCountQuestion = async () => {
    let response = await countQuestions()
    if (response) {
      // console.log(response)
      setNoOfQuestions(response.data.data)
    }
  }

  const processCountOralQuestion = async () => {
    let response = await countOralQuestions()
    if (response) {
      setNoOfOralQuestions(response.data.data)
    }
  }

  const processAddQuestion = async (data) => {
    console.log(data)
    setLoading((prev) => !prev)
    let signs = ["span", "em"]

    signs.map((item) => {
      let staff = formatText(data.question, item)
      if (staff) {
        data.question = staff
      }
    })

    let response = await addQuestion(data)
    if (response) {
      notify(SUCCESS_STATUS)
      setLoading((prev) => !prev)
    } else {
      notify(BAD_REQUEST_STATUS)
      setLoading((prev) => !prev)
    }
  }

  // Add Oral Questions
  const processAddOralQuestion = async (data) => {
    setLoading((prev) => !prev)
    let response = await addOralQuestion(data)
    if (response) {
      notify(SUCCESS_STATUS)
      setLoading((prev) => !prev)
    } else {
      notify(BAD_REQUEST_STATUS)
      setLoading((prev) => !prev)
    }
  }
  // End oral Question

  const processUpdateQuestion = async (data) => {
    setLoading((prev) => !prev)
    let response = await editQuestion(data)
    if (response) {
      processGetAllQuestion()
      setSearchRecord([])
      notify(SUCCESS_STATUS)
      setLoading((prev) => !prev)
    } else {
      notify(BAD_REQUEST_STATUS)
      setLoading((prev) => !prev)
    }
  }

  // Edit Oral Questions
  const processUpdateOralQuestion = async (data) => {
    setLoading((prev) => !prev)
    let response = await editOralQuestion(data)
    if (response) {
      processGetAllOralQuestion()
      setSearchOralRecord([])
      notify(SUCCESS_STATUS)
      setLoading((prev) => !prev)
    } else {
      notify(BAD_REQUEST_STATUS)
      setLoading((prev) => !prev)
    }
  }
  // End Oral Questions

  const processDeleteQuestion = async (data) => {
    let response = await deleteQuestion(data)
    if (response) {
      processGetAllQuestion()
      setSearchRecord([])
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteOralQuestion = async (data) => {
    let response = await deleteOralQuestion(data)
    if (response) {
      processGetAllOralQuestion()
      setSearchOralRecord([])
      notify(SUCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <QuestionApiData.Provider
      value={{
        paginationData,
        processGetAllQuestion,
        processAddQuestion,
        processAddOralQuestion,
        processUpdateQuestion,
        processUpdateOralQuestion,
        processDeleteQuestion,
        processDeleteOralQuestion,
        preparingQuestForEdit,
        processCountOralQuestion,
        processCountQuestion,
        processSearchQuestion,
        processSearchOralQuestion,
        processGetAllOralQuestion,
        processCheckQuestionNo,
        processCheckOralQuestionNo,
        noOfOralQuestions,
        noOfQuestions,
        oralQuestionList,
        questionList,
        searchRecord,
        searchOralRecord,
        setSearchRecord,
        questionFormData,
        oralQuestionFormData,
        preparingOralQuestForEdit,
        editClear,
        loading,
        setLoading,
        searchLoad,
        prompt,
        setPrompt,
      }}
    >
      {props.children}
    </QuestionApiData.Provider>
  )
}

export default QuestionApiDataProvider
