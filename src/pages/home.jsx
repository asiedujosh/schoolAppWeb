import React, { useContext } from "react"
import Card from "../components/card"
import LabelBtn from "../components/labelButton"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { SubscribersApiData } from "../contextApi/subscribers/subscribersContextApi"
// import { TopicApiData } from "../contextApi/topic/topicContextApi"
import { PackageApiData } from "../contextApi/package/packageContextApi"
import { StaffApiData } from "../contextApi/staff/staffContextApi"
import { UserApiData } from "../contextApi/users/userContextApi"

const Home = () => {
  const { userProfile, admin } = useContext(AuthApiData)
  const { noOfQuestions } = useContext(QuestionApiData)
  const { examsList } = useContext(ExamApiData)
  const { noOfSubscribers } = useContext(SubscribersApiData)
  const { packageList } = useContext(PackageApiData)
  const { subjectList } = useContext(SubjectApiData)
  const { yearList } = useContext(YearApiData)
  const { userList } = useContext(UserApiData)
  const { staffList } = useContext(StaffApiData)

  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Linked Exams & Subject" path="examSubjectLinkTable" />
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Special Packages" path="addSubject" />
        </div>
      </div>
      <div className="border-b border-gray-200 my-5"></div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Questions" link="Question" qty={noOfQuestions} />
          <LabelBtn text="+ Questions" path="addQuestion" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Exams" link="Exam" qty={examsList.length} />
          <LabelBtn text="+ Exams" path="addExams" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Subject" link="Subject" qty={subjectList.length} />
          <LabelBtn text="+ Subject" path="addSubject" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Year" link="Year" qty={yearList.length} />
          <LabelBtn text="+ Year" path="addYear" />
        </div>
      </div>
      <div className="border-b border-gray-200 my-10"></div>
      <div className="flex flex-wrap -mx-4 my-6">
        {admin && (
          <>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <Card title="Staff" link="Staff" qty={staffList.length} />
              <LabelBtn text="+ Staff" path="addStaff" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <Card title="Package" link="Package" qty={packageList.length} />
              <LabelBtn text="+ Package" path="addPackage" />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <Card
                title="Subscriber"
                link="Subscriber"
                qty={noOfSubscribers}
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <Card title="Users" link="Users" qty={userList.length} />
            </div>
          </>
        )}

        {/* <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Quizes" link="Quiz" />
        </div> */}
      </div>
      <div className="border-b border-gray-200 my-10"></div>
      <div className="flex flex-wrap -mx-4 my-6">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="News" link="News" />
          <LabelBtn text="+ News" path="addNews" />
        </div>
      </div>
    </>
  )
}

export default Home
