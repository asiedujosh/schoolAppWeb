import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import {
  addQuestion,
  addOralQuestion,
  deleteQuestion,
  editQuestion,
  searchQuestion,
  searchOralQuestion,
  getAllQuestion,
  getAllOralQuestion,
  countQuestions,
  countOralQuestions,
  checkQuestionNo,
} from "./question"

export const QuestionApiData = createContext()

const QuestionApiDataProvider = (props) => {
  const [noOfQuestions, setNoOfQuestions] = useState(0)
  const [noOfOralQuestions, setNoOfOralQuestions] = useState(0)
  const [questionList, setQuestionList] = useState([])
  const [oralQuestionList, setOralQuestionList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])
  const [questionFormData, setQuestionFormData] = useState({})
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

  const processSearchOralQuestion = async (data) => {
    setSearchLoad((prev) => !prev)
    let response = await searchOralQuestion(data)
    if (response) {
      setSearchRecord(response.data.data)
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
      setLoading((prev) => !prev)
    }
  }

  // Add Oral Questions
  const processAddOralQuestion = async (data) => {
    let response = await addOralQuestion(data)
    if (response) {
      notify(SUCCESS_STATUS)
      setLoading((prev) => !prev)
    } else {
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
      setLoading((prev) => !prev)
    }
  }

  // Edit Oral Questions

  // End Oral Questions

  const processDeleteQuestion = async (data) => {
    let response = await deleteQuestion(data)
    if (response) {
      processGetAllQuestion()
      setSearchRecord([])
      notify(SUCCESS_STATUS)
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
        processDeleteQuestion,
        preparingQuestForEdit,
        processCountOralQuestion,
        processCountQuestion,
        processSearchQuestion,
        processSearchOralQuestion,
        processGetAllOralQuestion,
        processCheckQuestionNo,
        noOfOralQuestions,
        noOfQuestions,
        oralQuestionList,
        questionList,
        searchRecord,
        setSearchRecord,
        questionFormData,
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
