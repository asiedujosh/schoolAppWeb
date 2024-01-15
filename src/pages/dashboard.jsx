import { useContext, useEffect } from "react"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { useNavigate } from "react-router-dom"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { TopicApiData } from "../contextApi/topic/topicContextApi"

import { Outlet } from "react-router-dom"
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import Card from "../components/card"

const Dashboard = () => {
  const { isAuthenticated, processRetrieve } = useContext(AuthApiData)
  const { processGetAllExams } = useContext(ExamApiData)
  const { processGetAllSubject } = useContext(SubjectApiData)
  const { processGetAllYear } = useContext(YearApiData)
  const { processGetAllTopic } = useContext(TopicApiData)

  const navigate = useNavigate()

  useEffect(() => {
    processGetAllExams()
    processGetAllSubject()
    processGetAllYear()
    processGetAllTopic()
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
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
