import React from "react"
import ReactDOM from "react-dom/client"
import AuthApiDataProvider from "./contextApi/auth/authContextApi.jsx"
import ExamApiDataProvider from "./contextApi/exams/examsContextApi.jsx"
import QuestionApiDataProvider from "./contextApi/questions/questionContextApi.jsx"
import DurationApiDataProvider from "./contextApi/duration/durationContextApi.jsx"
import SubjectApiDataProvider from "./contextApi/subjects/subjectContextApi.jsx"
import StaffApiDataProvider from "./contextApi/staff/staffContextApi.jsx"
import PriceApiDataProvider from "./contextApi/price/priceContextApi.jsx"
import PriviledgeApiDataProvider from "./contextApi/priviledge/priviledgeContextApi.jsx"
import MessageApiDataProvider from "./contextApi/messages/messageContextApi.jsx"
import UserApiDataProvider from "./contextApi/users/userContextApi.jsx"
import PackageApiDataProvider from "./contextApi/package/packageContextApi.jsx"
import SubscribersApiDataProvider from "./contextApi/subscribers/subscribersContextApi.jsx"
import TopicApiDataProvider from "./contextApi/topic/topicContextApi.jsx"
import YearApiDataProvider from "./contextApi/year/yearContextApi.jsx"
import NewsApiDataProvider from "./contextApi/news/newsContextApi.jsx"
import ExamSubjectApiDataProvider from "./contextApi/examSubjectRelation/examRelationContextApi.jsx"
import SliderApiDataProvider from "./contextApi/slider/sliderContextApi.jsx"
import SystemInfoApiDataProvider from "./contextApi/systemInfo/systemInfoContextApi.jsx"
import App from "./App.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthApiDataProvider>
      <StaffApiDataProvider>
        <PriviledgeApiDataProvider>
          <SliderApiDataProvider>
            <MessageApiDataProvider>
              <PackageApiDataProvider>
                <SystemInfoApiDataProvider>
                  <SubscribersApiDataProvider>
                    <UserApiDataProvider>
                      <PriceApiDataProvider>
                        <ExamApiDataProvider>
                          <DurationApiDataProvider>
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
                          </DurationApiDataProvider>
                        </ExamApiDataProvider>
                      </PriceApiDataProvider>
                    </UserApiDataProvider>
                  </SubscribersApiDataProvider>
                </SystemInfoApiDataProvider>
              </PackageApiDataProvider>
            </MessageApiDataProvider>
          </SliderApiDataProvider>
        </PriviledgeApiDataProvider>
      </StaffApiDataProvider>
    </AuthApiDataProvider>
  </React.StrictMode>
)
