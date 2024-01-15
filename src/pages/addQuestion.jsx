import { useState, useContext, useEffect } from "react"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { TopicApiData } from "../contextApi/topic/topicContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { ADDQUESTIONS } from "../constants/questionConstants"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import TextAreaField from "../components/textAreaField"
import SubmitBtn from "../components/submitButton"
import AddTopic from "./addTopic"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddQuestion = () => {
  const { processAddQuestion } = useContext(QuestionApiData)
  const { userProfile } = useContext(AuthApiData)
  const { examsList } = useContext(ExamApiData)
  const { subjectList } = useContext(SubjectApiData)
  const { yearList } = useContext(YearApiData)
  const { topicList } = useContext(TopicApiData)
  const [examOptions, setExamOptions] = useState()
  const [subjectOptions, setSubjectOptions] = useState()
  const [topicOptions, setTopicOptions] = useState()
  const [yearOptions, setYearOptions] = useState()
  const [formData, setFormData] = useState({
    answer: "None",
  })

  useEffect(() => {
    let exams = []
    examsList &&
      examsList.map((item) => {
        exams.push(item.exam)
      })
    setExamOptions(exams)
    setFormData({ ...formData, examType: exams[0] })
  }, [examsList])

  useEffect(() => {
    let subjects = []
    subjectList &&
      subjectList.map((item) => {
        subjects.push(item.subject)
      })
    setSubjectOptions(subjects)
    setFormData({ ...formData, subject: subjects[0] })
  }, [subjectList])

  useEffect(() => {
    let years = []
    yearList &&
      yearList.map((item) => {
        years.push(item.year)
      })
    setYearOptions(years)
    setFormData({ ...formData, year: years[0] })
  }, [yearList])

  useEffect(() => {
    let topics = []
    topicList &&
      topicList.map((item) => {
        topics.push(item.topic)
      })
    setTopicOptions(topics)
    setFormData({ ...formData, topic: topics[0] })
  }, [topicList])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleOptionAssign = (item) => {
    let Option
    switch (item.name) {
      case "examType":
        Option = examOptions
        break
      case "subject":
        Option = subjectOptions
        break
      case "year":
        Option = yearOptions
        break
      case "topic":
        Option = topicOptions
        break
      default:
        Option = ["None", "A", "B", "C", "D", "E", "F", "G", "H"]
    }
    return Option
  }

  //Map Id to corresponding options
  const mapId = (item, itemList, name) => {
    let filteredItem = itemList.filter((items) => items[name] === item)
    return filteredItem && filteredItem[0] && filteredItem[0].id
    // return filteredItem[0].id
  }

  const handleSubmit = () => {
    // e.preventDefault()
    let newQuestData = {
      examType: mapId(formData.examType, examsList, "exam"),
      subject: mapId(formData.subject, subjectList, "subject"),
      year: mapId(formData.year, yearList, "year"),
      topic: mapId(formData.topic, topicList, "topic"),
      questionNo: formData.questionNo,
      question: formData.question,
      answerOptions: formData.answerOptions,
      answer: formData.answer,
      publisher: "admin",
    }
    processAddQuestion(newQuestData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDQUESTIONS.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDQUESTIONS.title}
                </h2>

                <div className="space-y-4">
                  {ADDQUESTIONS.fieldDetail.map((item) => {
                    return (
                      (item.type === "text" && (
                        <InputField
                          key={item.id}
                          field={item}
                          value={formData}
                          defaultVal={item.defaultValue}
                          readOnly={item.readOnly}
                          change={(data, field) => {
                            handleInputChange(data, field)
                          }}
                        />
                      )) ||
                      (item.type === "select" && (
                        <SelectField
                          key={item.id}
                          field={item}
                          value={formData}
                          options={handleOptionAssign(item)}
                          change={(data, field) => {
                            handleInputChange(data, field)
                          }}
                        />
                      )) ||
                      (item.type === "textArea" && (
                        <TextAreaField
                          key={item.id}
                          field={item}
                          value={formData}
                          options={item.options}
                          change={(data, field) => {
                            handleInputChange(data, field)
                          }}
                        />
                      ))
                    )
                  })}
                </div>
                <div className="mt-2 min-w-full flex items-center justify-center">
                  <SubmitBtn
                    text={ADDQUESTIONS.buttonText}
                    submit={handleSubmit}
                  />
                </div>
              </div>
              <AddTopic />
              {/**Card 2 */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddQuestion
