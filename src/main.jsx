import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import ExamApiDataProvider from "./contextApi/exams/examsContextApi.jsx"
import QuestionApiDataProvider from "./contextApi/questions/questionContextApi.jsx"
import SubjectApiDataProvider from "./contextApi/subjects/subjectContextApi.jsx"
import TopicApiDataProvider from "./contextApi/topic/topicContextApi.jsx"
import YearApiDataProvider from "./contextApi/year/yearContextApi.jsx"

import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <ExamApiDataProvider>
        <QuestionApiDataProvider>
          <SubjectApiDataProvider>
            <TopicApiDataProvider>
              <YearApiDataProvider>
                <App />
              </YearApiDataProvider>
            </TopicApiDataProvider>
          </SubjectApiDataProvider>
        </QuestionApiDataProvider>
      </ExamApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
