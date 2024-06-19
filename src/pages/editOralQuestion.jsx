import { useState, useContext, useEffect } from "react"
import { trimAsterisks } from "../utils/trimStars"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { TopicApiData } from "../contextApi/topic/topicContextApi"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { ADDQUESTIONS } from "../constants/oralQuestionConstants"
import { useParams } from "react-router-dom"
import InputField from "../components/inputField"
import UploadAudio from "../components/uploadAudio"
import SelectField from "../components/selectField"
import SubmitBtn from "../components/submitButton"
import AddTopic from "./addTopic"
import LoadingBtn from "../components/loadingButton"
import OptionAnsInput from "../components/optionAnsInputField"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditOralQuestion = () => {
  let { id } = useParams()
  const { processUpdateOralQuestion, loading, oralQuestionFormData } =
    useContext(QuestionApiData)
  const { userProfile } = useContext(AuthApiData)
  const { examsList, examOptions } = useContext(ExamApiData)
  const { subjectList, subjectOptions } = useContext(SubjectApiData)
  const { yearList, yearOptions } = useContext(YearApiData)
  const { topicList } = useContext(TopicApiData)
  const [topicOptions, setTopicOptions] = useState()
  const [options, setOptions] = useState([])

  const [formData, setFormData] = useState({
    id: id,
    examType:
      (oralQuestionFormData &&
        examsList.find((item) => item.id == oralQuestionFormData.examType)
          ?.exam) ||
      "Not Available",
    subject:
      (oralQuestionFormData &&
        subjectList.find((item) => item.id == oralQuestionFormData.subject)
          ?.subject) ||
      "Not Available",
    year:
      (oralQuestionFormData &&
        yearList.find((item) => item.id == oralQuestionFormData.year)?.year) ||
      "Not Available",
    topic:
      (oralQuestionFormData &&
        topicList.filter((item) => item.id == oralQuestionFormData.topic)[0]) ||
      "Not Available",
    answer: oralQuestionFormData && oralQuestionFormData.answer,
    questionNo: oralQuestionFormData && oralQuestionFormData.questionNo,
    comment: oralQuestionFormData && oralQuestionFormData.comment,
    audioUpload: null,
    oldAudioPath: oralQuestionFormData && oralQuestionFormData.question,
    oldPath: oralQuestionFormData && oralQuestionFormData.oldPath,
    answerOptions: oralQuestionFormData && oralQuestionFormData.answerOptions,
    mimeType: oralQuestionFormData && oralQuestionFormData.mimeType,
    hints: oralQuestionFormData && oralQuestionFormData.hints,
  })

  useEffect(() => {
    let newData = []
    let trimStr = trimAsterisks(oralQuestionFormData.answerOptions)
    let splitOptions = trimStr.split("**")
    splitOptions.map((item, index) => {
      newData.push({ id: index + 1, value: item })
    })
    setOptions(newData)
  }, [])

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

  const handleOptionChange = (data, id) => {
    const index = options.findIndex((option) => option.id === id)

    if (index !== -1) {
      // If option with given ID exists, replace it
      const updatedOptions = [...options]
      updatedOptions[index] = { id: id, value: data }
      setOptions(updatedOptions)
    } else {
      // If option with given ID doesn't exist, add it
      setOptions([...options, { id: id, value: data }])
    }
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

  const handleAddOption = () => {
    setOptions([...options, { id: options.length + 1 }])
  }

  const handleSubmit = () => {
    let optionalAns = []
    options.map((item) => optionalAns.push(`${item.value}*`))
    let optionalAnsString = optionalAns.join("*")

    let newQuestData = {
      id: id,
      examType: mapId(formData.examType, examsList, "exam"),
      subject: mapId(formData.subject, subjectList, "subject"),
      year: mapId(formData.year, yearList, "year"),
      topic: mapId(formData.topic, topicList, "topic"),
      questionNo: formData.questionNo,
      comment: formData.comment,
      oldPath: formData.oldPath,
      question: formData.audioUpload,
      hints: formData.hints ? formData.hints : null,
      answerOptions: optionalAnsString.slice(0, -1),
      answer: formData.answer,
      mimeType: formData.mimeType,
      publisher: userProfile.username,
    }
    if (
      newQuestData.answerOptions !== null &&
      newQuestData.answerOptions !== ""
    ) {
      console.log(newQuestData)
      processUpdateOralQuestion(newQuestData)
    } else {
      console.log("One of the Options fields should not be empty")
    }
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
                      return item.type === "select" ? (
                        <SelectField
                          key={item.id}
                          field={item}
                          value={formData}
                          options={handleOptionAssign(item)}
                          change={(data, field) => {
                            handleInputChange(data, field)
                          }}
                        />
                      ) : (
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
                      )
                    })}
                  </div>

                  <div>
                    <h6 className="text-lg font-bold my-2">Question Section</h6>
                    <div>
                      <audio controls src={formData.oldAudioPath}>
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    <UploadAudio
                      change={(data, field) => {
                        handleInputChange(data, field)
                      }}
                    />
                  </div>

                  <div className="mt-10">
                    <h6 className="text-lg font-bold my-2">
                      Optional Answers Section
                    </h6>

                    {options?.map((option) => {
                      // console.log(option)
                      return (
                        <OptionAnsInput
                          key={option}
                          field={option}
                          value={option}
                          defaultVal={option.value}
                          change={(data, field) => {
                            handleOptionChange(data, field)
                          }}
                        />
                      )
                    })}
                    <button
                      type="button"
                      onClick={handleAddOption}
                      className="bg-gray-800 py-2 rounded-md px-4 text-white"
                    >
                      Add Option
                    </button>
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
                </div>
                <div className="mt-2 min-w-full flex items-center justify-center">
                  {loading ? (
                    <LoadingBtn />
                  ) : (
                    <SubmitBtn
                      text={ADDQUESTIONS.buttonText}
                      submit={handleSubmit}
                    />
                  )}
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

export default EditOralQuestion
