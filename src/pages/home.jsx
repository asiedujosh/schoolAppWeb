import React from "react"
import Card from "../components/card"
import LabelBtn from "../components/labelButton"

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Questions" />
          <LabelBtn text="+ Questions" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Exams" />
          <LabelBtn text="+ Exams" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Subject" />
          <LabelBtn text="+ Subject" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Year" />
          <LabelBtn text="+ Year" />
        </div>
      </div>
      <div className="border-b border-gray-200 my-10"></div>
      <div className="flex flex-wrap -mx-4 my-6">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Quizes" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Users" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
          <Card title="Staff" />
        </div>
      </div>
    </>
  )
}

export default Home
