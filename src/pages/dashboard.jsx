import { useContext, useEffect } from "react"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { useNavigate } from "react-router-dom"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examRelationContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { DurationApiData } from "../contextApi/duration/durationContextApi"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { PriviledgeApiData } from "../contextApi/priviledge/priviledgeContextApi"
import { PackageApiData } from "../contextApi/package/packageContextApi"
import { TopicApiData } from "../contextApi/topic/topicContextApi"
import { StaffApiData } from "../contextApi/staff/staffContextApi"
import { UserApiData } from "../contextApi/users/userContextApi"
import { SubscribersApiData } from "../contextApi/subscribers/subscribersContextApi"

import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"

const Dashboard = () => {
  const { isAuthenticated, processRetrieve } = useContext(AuthApiData)
  const { processCountQuestion, processCountOralQuestion } =
    useContext(QuestionApiData)
  const { processGetAllExamSubjectLink } = useContext(ExamSubjectApiData)
  const { processGetAllPriviledge } = useContext(PriviledgeApiData)
  const { processGetAllExams } = useContext(ExamApiData)
  const { processGetAllSubject } = useContext(SubjectApiData)
  const { processGetAllYear } = useContext(YearApiData)
  const { processGetAllTopic } = useContext(TopicApiData)
  const { processGetAllStaff } = useContext(StaffApiData)
  const { processGetAllUser } = useContext(UserApiData)
  const { processGetAllPackage } = useContext(PackageApiData)
  const { processGetAllDuration } = useContext(DurationApiData)
  const { processGetAllSubscribers, processCountSubscribers } =
    useContext(SubscribersApiData)

  const navigate = useNavigate()

  useEffect(() => {
    processGetAllExams()
    processGetAllSubject()
    processGetAllYear()
    processGetAllTopic()
    processCountQuestion()
    processCountOralQuestion()
    processCountSubscribers()
    processGetAllStaff()
    processGetAllUser()
    processGetAllPackage()
    processGetAllPriviledge()
    processGetAllSubscribers()
    processGetAllExamSubjectLink()
    processGetAllDuration(1)
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      //navigate("/")
      //Dashboard try retreive
      let dataRetrieve = async () => {
        let auth = await processRetrieve()
        if (auth) {
          navigate("/dashboard")
        } else {
          navigate("/")
        }
      }
      dataRetrieve()
    }
  }, [isAuthenticated])

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <div className="p-4 flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
