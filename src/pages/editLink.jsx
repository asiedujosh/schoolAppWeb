import { useState, useContext, useEffect } from "react"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examRelationContextApi"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { ADDLINK } from "../constants/linkConstants"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import SubmitBtn from "../components/submitButton"
import { useParams } from "react-router-dom"
import LoadingBtn from "../components/loadingButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditLink = () => {
  let { id } = useParams()
  const { examsList } = useContext(ExamApiData)
  const { subjectList } = useContext(SubjectApiData)
  const { yearList } = useContext(YearApiData)
  const { processGetAllExamSubjectLink, examSubjectLinkList } =
    useContext(ExamSubjectApiData)
  const { processUpdateExamSubject } = useContext(ExamSubjectApiData)
  const [error, setError] = useState([])
  const [examNameOnlyState, setExamNameOnlyState] = useState([])
  const [yearNameOnlyState, setYearNameOnlyState] = useState([])
  const [subjectNameOnlyState, setSubjectNameOnlyState] = useState([])
  const [formData, setFormData] = useState({
    examType: null,
    year: null,
    subject: null,
    offerType: null,
    amount: null,
  })

  useEffect(() => {
    let data = examSubjectLinkList.filter((item) => item.id == id)
    console.log(data)
    setFormData({
      ...formData,
      examType: data[0].examType,
      year: data[0].year,
      subject: data[0].subject,
      offerType: data[0].offerType,
      amount: data[0].price,
    })
  }, [])

  useEffect(() => {
    let onlyExamNameList = []
    if (examsList.length > 0) {
      examsList.map((item) => {
        onlyExamNameList.push(item.exam)
      })
    }
    setExamNameOnlyState(onlyExamNameList)
  }, [examsList])

  useEffect(() => {
    let onlySubjectNameList = []
    if (subjectList.length > 0) {
      subjectList.map((item) => {
        onlySubjectNameList.push(item.subject)
      })
    }
    setSubjectNameOnlyState(onlySubjectNameList)
  }, [subjectList])

  useEffect(() => {
    let onlyYearNameList = []
    if (yearList.length > 0) {
      yearList.map((item) => {
        onlyYearNameList.push(item.year)
      })
    }
    setYearNameOnlyState(onlyYearNameList)
  }, [yearList])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    formData.examType = formData.examType || examNameOnlyState[0]
    formData.year = formData.year || yearNameOnlyState[0]
    formData.subject = formData.subject || subjectNameOnlyState[0]
    formData.offerType = formData.offerType || subjectNameOnlyState[0]

    //convert to ids
    let choseExamId = examsList.filter(
      (item) => item.exam === formData.examType
    )[0].id
    let choseYearId = yearList.filter((item) => item.year === formData.year)[0]
      .id
    let choseSubjectId = subjectList.filter(
      (item) => item.subject === formData.subject
    )[0].id

    let newData = {
      id: id,
      examId: choseExamId,
      yearId: choseYearId,
      subjectId: choseSubjectId,
      offerType: formData.offerType,
      price: formData.amount,
    }

    processUpdateExamSubject(newData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDLINK.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">{ADDLINK.title}</h2>

                <div className="space-y-4">
                  {ADDLINK.fieldDetail.map((item) => {
                    return item.type !== "select" ? (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    ) : (
                      <SelectField
                        field={item}
                        value={formData}
                        options={
                          (item.name == "examType" && examNameOnlyState) ||
                          (item.name == "year" && yearNameOnlyState) ||
                          (item.name == "subject" && subjectNameOnlyState) ||
                          (item.name == "offerType" && item.options)
                        }
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDLINK.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditLink
