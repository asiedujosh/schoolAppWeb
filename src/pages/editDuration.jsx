import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DurationApiData } from "../contextApi/duration/durationContextApi"
import { ADDDURATION } from "../constants/durationConstants"
import InputField from "../components/inputField"
import SubmitBtn from "../components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditDuration = () => {
  let { id } = useParams()
  const { processUpdateDuration, durationList } = useContext(DurationApiData)
  const [formData, setFormData] = useState({
    id: id,
    name: null,
    noOfMonths: null,
  })

  useEffect(() => {
    let data = durationList.filter((item) => item.id == id)
    setFormData({
      ...formData,
      name: data[0].name,
      noOfMonths: data[0].noOfMonths,
    })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    // console.log(formData)
    processUpdateDuration(formData)
    //processAddQuestion(newQuestData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {"Edit Duration"}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {"Edit Duration"}
                </h2>

                <div className="space-y-2">
                  {ADDDURATION.fieldDetail.map((item) => {
                    return (
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
                <div className="mt-2 min-w-full flex items-center justify-center">
                  <SubmitBtn
                    text={ADDDURATION.buttonText}
                    submit={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditDuration
