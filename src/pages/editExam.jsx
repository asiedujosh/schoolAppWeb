import { useState, useContext, useEffect } from "react"
import { ADDEXAM } from "../constants/examConstants"
import InputField from "../components/inputField"
import SubmitBtn from "../components/submitButton"
import LoadingBtn from "../components/loadingButton"
import UploadImage from "../components/uploadImage"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditExams = () => {
  let { id } = useParams()
  const { examsList, processUpdateExams } = useContext(ExamApiData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState([])
  const [formData, setFormData] = useState({
    id: id,
    examType: null,
    position: null,
    imageUpload: null,
  })

  useEffect(() => {
    let data = examsList.filter((item) => item.id == id)
    // console.log(data)
    setFormData({
      ...formData,
      examType: data[0].exam,
      examImage: data[0].examImage,
      position: data[0].position,
      image: data[0].examImage,
    })
    setLoading(false)
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = (e) => {
    // e.preventDefault()
    //processAddExams(formData)
    let submitData = {
      id: formData.id,
      examType: formData.examType,
      position: formData.position,
      imageUpload: formData.imageUpload || formData.image || "",
    }
    // console.log(submitData)
    processUpdateExams(submitData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDEXAM.editTitle}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  {ADDEXAM.fieldDetail.map((item) => {
                    return (
                      <InputField
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
                  <UploadImage
                    imagePreview={formData.image}
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDEXAM.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditExams
