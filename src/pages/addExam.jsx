import { useState, useContext, useEffect } from "react"
import { ADDEXAM } from "../constants/examConstants"
import InputField from "../components/inputField"
import SubmitBtn from "../components/submitButton"
import LoadingBtn from "../components/loadingButton"
import UploadImage from "../components/uploadImage"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CurtainPrompt from "../components/curtainPrompt"

const AddExams = () => {
  const { processAddExams, processCheckExamAvailability } =
    useContext(ExamApiData)
  const [prompt, setPrompt] = useState(false)
  const [finalData, setFinalData] = useState()
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const proceedSubmit = () => {
    setPrompt((prev) => !prev)
    processAddYear(finalData)
  }

  const dontProceedSubmit = () => {
    setPrompt((prev) => !prev)
  }

  const handleSubmit = async () => {
    console.log(formData)
    setFinalData(formData)
    let checkExamAvails = await processCheckExamAvailability(formData)
    if (checkExamAvails) {
      setPrompt((prev) => !prev)
    } else {
      processAddExams(formData)
    }
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDEXAM.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2">
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
      {prompt && (
        <CurtainPrompt
          promptTitle={
            formData.examType
              ? `Exam name ${formData?.examType} already exist, do you want to continue?`
              : `Exam name not entered, do you want to continue?`
          }
          yesFunction={proceedSubmit}
          noFunction={dontProceedSubmit}
        />
      )}
    </>
  )
}

export default AddExams
