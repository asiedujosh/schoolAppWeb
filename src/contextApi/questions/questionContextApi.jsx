import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"
import formatText from "../../utils/formatText"

import {
  addQuestion,
  deleteQuestion,
  editQuestion,
  getAllQuestion,
  countQuestions,
} from "./question"

export const QuestionApiData = createContext()

const QuestionApiDataProvider = (props) => {
  const [noOfQuestions, setNoOfQuestions] = useState(0)
  const [questionList, setQuestionList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])
  const [questionFormData, setQuestionFormData] = useState({})
  const [editClear, setEditClear] = useState(false)
  const [paginationData, setPaginationData] = useState()

  const preparingQuestForEdit = (id) => {
    setQuestionFormData()
    let data = questionList.filter((item) => item.id == id)

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

  const processCountQuestion = async () => {
    let response = await countQuestions()
    if (response) {
      // console.log(response)
      setNoOfQuestions(response.data.data)
    }
  }

  const processAddQuestion = async (data) => {
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
    }
  }

  const processUpdateQuestion = async (data) => {
    let response = await editQuestion(data)
    if (response) {
      processGetAllQuestion()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteQuestion = async (data) => {
    let response = await deleteQuestion(data)
    if (response) {
      processGetAllQuestion()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <QuestionApiData.Provider
      value={{
        paginationData,
        processGetAllQuestion,
        processAddQuestion,
        processUpdateQuestion,
        processDeleteQuestion,
        preparingQuestForEdit,
        processCountQuestion,
        noOfQuestions,
        questionList,
        searchRecord,
        questionFormData,
        editClear,
      }}
    >
      {props.children}
    </QuestionApiData.Provider>
  )
}

export default QuestionApiDataProvider
