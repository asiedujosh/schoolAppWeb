import { useState, useContext, useEffect } from "react"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { TopicApiData } from "../contextApi/topic/topicContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { ADDQUESTIONS } from "../constants/questionConstants"
import InputField from "../components/inputField"
import BaseImage from "../components/base64ImageCard"
import UploadImageEdit from "../components/uploadMultipleImageEdit"
import { useParams } from "react-router-dom"
import SelectField from "../components/selectField"
import TextAreaField2 from "../components/textAreaField2"
import SubmitBtn from "../components/submitButton"
import AddTopic from "./addTopic"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditQuestion = () => {
  let { id } = useParams()
  const { processUpdateQuestion, questionFormData } =
    useContext(QuestionApiData)
  const { userProfile } = useContext(AuthApiData)
  const { examsList, examOptions } = useContext(ExamApiData)
  const { subjectList, subjectOptions } = useContext(SubjectApiData)
  const { yearList, yearOptions } = useContext(YearApiData)
  const { topicList } = useContext(TopicApiData)

  const [topicOptions, setTopicOptions] = useState()

  const [formData, setFormData] = useState({
    id: id,
    examType:
      (questionFormData &&
        examsList.find((item) => item.id == questionFormData.examType)?.exam) ||
      "Not Available",
    subject:
      (questionFormData &&
        subjectList.find((item) => item.id == questionFormData.subject)
          ?.subject) ||
      "Not Available",
    year:
      (questionFormData &&
        yearList.find((item) => item.id == questionFormData.year)?.year) ||
      "Not Available",
    topic:
      (questionFormData &&
        topicList.filter((item) => item.id == questionFormData.topic)[0]) ||
      "Not Available",
    answer: questionFormData && questionFormData.answer,
    questionNo: questionFormData && questionFormData.questionNo,
    question: questionFormData && questionFormData.question,
    questionEquation: questionFormData && questionFormData.questionEquation,
    answerOptions: questionFormData && questionFormData.answerOptions,
    optionsWithEquation:
      questionFormData && questionFormData.optionsWithEquation,
    imageOptions: questionFormData && questionFormData.imageOptions,
    hints: questionFormData && questionFormData.hints,
  })

  const [imageOptions, setImageOptions] = useState([])
  const [editedQuestion, setEditedQuestion] = useState("")

  useEffect(() => {
    let topics = []
    topicList &&
      topicList.map((item) => {
        topics.push(item.topic)
      })
    setTopicOptions(topics)
    setFormData({ ...formData, topic: topics[0] })
  }, [topicList])

  // useEffect(() => {
  //   formData.imageOptions = null
  // }, [imageOptions])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  // const handleQuestionChange = (data) => {
  //   setEditedQuestion(data)
  // }

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

  const handleClear = () => {
    setFormData({ ...formData, imageOptions: null })
  }

  const handleSubmit = () => {
    // e.preventDefault()

    let imageInfo = []
    imageOptions.length > 0 &&
      imageOptions.map((item) => {
        imageInfo.push(item.base64Data)
      })

    let newQuestData = {
      id: id,
      examType: mapId(formData.examType, examsList, "exam"),
      subject: mapId(formData.subject, subjectList, "subject"),
      year: mapId(formData.year, yearList, "year"),
      topic: mapId(formData.topic, topicList, "topic"),
      questionNo: formData.questionNo,
      question: formData.question,
      questionEquation: formData.questionEquation,
      answerOptions: formData.answerOptions,
      optionsWithEquation: formData.optionsWithEquation,
      imageOptions: imageInfo.length > 0 ? imageInfo : formData.imageOptions,
      hints: formData.hints,
      answer: formData.answer,
      publisher: userProfile.username,
    }

    if (
      (newQuestData.answerOptions !== null &&
        newQuestData.answerOptions !== "") ||
      (newQuestData.optionsWithEquation !== null &&
        newQuestData.optionsWithEquation !== "") ||
      (newQuestData.imageOptions !== null && newQuestData.imageOptions !== "")
    ) {
      processUpdateQuestion(newQuestData)
    } else {
      console.log("One of the Options fields should not be empty")
    }

    // console.log(newQuestData)
    // processAddQuestion(newQuestData)

    //processUpdateQuestion(newQuestData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDQUESTIONS.editTitle}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDQUESTIONS.editTitle}
                </h2>
                {/** Edit begins here */}

                <div className="">
                  <div className="flex w-full justify-between">
                    {ADDQUESTIONS.fieldDetail0.map((item) => {
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
                        ))
                      )
                    })}
                  </div>

                  <div className="flex w-full justify-between">
                    {ADDQUESTIONS.fieldDetail1.map((item) => {
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
                        ))
                      )
                    })}
                  </div>

                  <div>
                    <h6 className="text-lg font-bold my-2">Question Section</h6>
                    {ADDQUESTIONS.fieldDetail2.map((item) => {
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
                          <TextAreaField2
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

                  <div>
                    <h6 className="text-lg font-bold my-2">
                      Optional Answers Section
                    </h6>
                    {ADDQUESTIONS.fieldDetail3.map((item) => {
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
                          <TextAreaField2
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
                    <div>
                      <label className="text-gray-600">Image Options</label>
                      <UploadImageEdit
                        change={[imageOptions, setImageOptions]}
                      />
                      {formData.imageOptions !== null && (
                        <SubmitBtn
                          text="Clear"
                          submit={handleClear}
                          color="bg-grey-500"
                        />
                      )}
                    </div>
                    <div className="flex flex-row">
                      {formData.imageOptions !== "" &&
                        formData.imageOptions !== null &&
                        formData.imageOptions.split("**").map((item) => (
                          <div className="mx-2">
                            <BaseImage data={item} />
                          </div>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h6 className="text-lg font-bold my-2">Answer Section</h6>
                    {ADDQUESTIONS.fieldDetail4.map((item) => {
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
                        ))
                      )
                    })}
                  </div>
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

export default EditQuestion
