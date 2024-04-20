import { useContext, useEffect, useState } from "react"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { QUESTIONSEARCH } from "../constants/questionConstants"
import PaginationContainer from "./paginationContainer"
import QuestionTable from "./questionTable"
import SelectField from "./selectField"
import InputField from "./inputField"
import SubmitBtn from "./submitButton"
// import PaginationContainer from "./paginationContainer"
// import PrintButton from "./printButton"

const QuestionTableContainer = () => {
  const { examsList } = useContext(ExamApiData)
  const { subjectList } = useContext(SubjectApiData)
  const { yearList } = useContext(YearApiData)
  const { processGetAllQuestion, paginationData } = useContext(QuestionApiData)
  const [examOptions, setExamOptions] = useState()
  const [subjectOptions, setSubjectOptions] = useState()
  const [yearOptions, setYearOptions] = useState()
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    examType: "all",
    subject: "all",
    year: "all",
  })

  useEffect(() => {
    processGetAllQuestion()
  }, [])

  useEffect(() => {
    let exams = ["all"]
    examsList &&
      examsList.map((item) => {
        exams.push(item.exam)
      })
    setExamOptions(exams)
    setFormData({ ...formData, examType: exams[0] })
  }, [examsList])

  useEffect(() => {
    let subjects = ["all"]
    subjectList &&
      subjectList.map((item) => {
        subjects.push(item.subject)
      })
    setSubjectOptions(subjects)
    setFormData({ ...formData, subject: subjects[0] })
  }, [subjectList])

  useEffect(() => {
    let years = ["all"]
    yearList &&
      yearList.map((item) => {
        years.push(item.year)
      })
    setYearOptions(years)
    setFormData({ ...formData, year: years[0] })
  }, [yearList])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  // const handleSearchChange = (data) => {
  //   console.log(data)
  //   setSearchTerm(data)
  // }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    console.log(searchTerm)
    //processSearchRecord(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <div className="flex">
        <div className="w-full mr-4">
          <SelectField
            field={QUESTIONSEARCH[0]}
            value={formData}
            options={examOptions}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
        </div>
        <div className="w-full mr-4">
          <SelectField
            field={QUESTIONSEARCH[1]}
            value={formData}
            options={subjectOptions}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
        </div>
        <div className="w-full mr-4">
          <SelectField
            field={QUESTIONSEARCH[2]}
            value={formData}
            options={yearOptions}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
        </div>
        <div className="w-full">
          <InputField
            field={QUESTIONSEARCH[3]}
            value={formData}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
        </div>
        <div className="w-full mx-4 mt-6">
          <div className="">
            <SubmitBtn text={"Search"} submit={handleSearchSubmit} />
          </div>
        </div>
      </div>
      <div className="overflow-auto" style={{ height: "80%" }}>
        <QuestionTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllQuestion}
      />
    </div>
  )
}

export default QuestionTableContainer
