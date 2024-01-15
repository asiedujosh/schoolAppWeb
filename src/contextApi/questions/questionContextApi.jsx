import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { addQuestion, getAllQuestion } from "./question"

export const QuestionApiData = createContext()

const QuestionApiDataProvider = (props) => {
  const [questionList, setQuestionList] = useState([])

  const processGetAllQuestion = async () => {
    let response = await getAllQuestion()
    if (response) {
      setQuestionList(response)
    }
  }

  const processAddQuestion = async (data) => {
    let response = await addQuestion(data)
    if (response) {
      notify(SUCCESS_STATUS)
    }
  }

  const processUpdateQuestion = async () => {}

  const processDeleteQuestion = async () => {}

  return (
    <QuestionApiData.Provider
      value={{
        processGetAllQuestion,
        processAddQuestion,
        processUpdateQuestion,
        processDeleteQuestion,
        questionList,
      }}
    >
      {props.children}
    </QuestionApiData.Provider>
  )
}

export default QuestionApiDataProvider
