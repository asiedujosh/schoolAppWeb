import { useState, useContext, useEffect } from "react"
import { DurationApiData } from "../contextApi/duration/durationContextApi"
import { ADDDURATION } from "../constants/durationConstants"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import SubmitBtn from "../components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddDuration = () => {
  const { processAddDuration } = useContext(DurationApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = async () => {
    processAddDuration(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDDURATION.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDDURATION.title}
                </h2>

                <div className="space-y-4">
                  {ADDDURATION.fieldDetail.map((item) => {
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
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={ADDDURATION.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AddDuration
