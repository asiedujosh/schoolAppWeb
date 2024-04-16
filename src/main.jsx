import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import ExamApiDataProvider from "./contextApi/exams/examsContextApi.jsx"
import QuestionApiDataProvider from "./contextApi/questions/questionContextApi.jsx"
import SubjectApiDataProvider from "./contextApi/subjects/subjectContextApi.jsx"
import StaffApiDataProvider from "./contextApi/staff/staffContextApi.jsx"
import UserApiDataProvider from "./contextApi/users/userContextApi.jsx"
import PackageApiDataProvider from "./contextApi/package/packageContextApi.jsx"
import SubscribersApiDataProvider from "./contextApi/subscribers/subscribersContextApi.jsx"
import TopicApiDataProvider from "./contextApi/topic/topicContextApi.jsx"
import YearApiDataProvider from "./contextApi/year/yearContextApi.jsx"
import NewsApiDataProvider from "./contextApi/news/newsContextApi.jsx"
import ExamSubjectApiDataProvider from "./contextApi/examSubjectRelation/examRelationContextApi.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <StaffApiDataProvider>
        <PackageApiDataProvider>
          <SubscribersApiDataProvider>
            <UserApiDataProvider>
              <ExamApiDataProvider>
                <QuestionApiDataProvider>
                  <SubjectApiDataProvider>
                    <TopicApiDataProvider>
                      <YearApiDataProvider>
                        <NewsApiDataProvider>
                          <ExamSubjectApiDataProvider>
                            <App />
                          </ExamSubjectApiDataProvider>
                        </NewsApiDataProvider>
                      </YearApiDataProvider>
                    </TopicApiDataProvider>
                  </SubjectApiDataProvider>
                </QuestionApiDataProvider>
              </ExamApiDataProvider>
            </UserApiDataProvider>
          </SubscribersApiDataProvider>
        </PackageApiDataProvider>
      </StaffApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
