import React from "react"
import Card from "../components/card"
import LabelBtn from "../components/labelButton"

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Questions" link="Question" />
          <LabelBtn text="+ Questions" path="addQuestion" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Exams" link="Exam" />
          <LabelBtn text="+ Exams" path="addExams" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Subject" link="Subject" />
          <LabelBtn text="+ Subject" path="addSubject" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Year" link="Year" />
          <LabelBtn text="+ Year" path="addYear" />
        </div>
      </div>
      <div className="border-b border-gray-200 my-10"></div>
      <div className="flex flex-wrap -mx-4 my-6">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Quizes" link="Quiz" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Users" link="Users" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Staff" link="Staff" />
        </div>
      </div>
    </>
  )
}

export default Home
