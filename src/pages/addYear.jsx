import { useState, useContext, useEffect } from "react"
import { YearApiData } from "../contextApi/year/yearContextApi"
import { ADDYEAR } from "../constants/yearConstants"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import SubmitBtn from "../components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CurtainPrompt from "../components/curtainPrompt"

const AddYear = () => {
  const { processAddYear, processCheckYearAvailability } =
    useContext(YearApiData)
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
    setFinalData(formData)

    let checkYearAvails = await processCheckYearAvailability(formData)
    if (checkYearAvails) {
      setPrompt((prev) => !prev)
    } else {
      processAddYear(formData)
    }
    // e.preventDefault()

    // console.log(formData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDYEAR.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">{ADDYEAR.title}</h2>

                <div className="space-y-4">
                  {ADDYEAR.fieldDetail.map((item) => {
                    return item.type === "text" ? (
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
                        options={item.options}
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
              <SubmitBtn text={ADDYEAR.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {prompt && (
        <CurtainPrompt
          promptTitle={
            formData.examsYear
              ? `Year ${formData?.examsYear} already exist, do you want to continue?`
              : `Year name is empty, do you want to continue?`
          }
          yesFunction={proceedSubmit}
          noFunction={dontProceedSubmit}
        />
      )}
    </>
  )
}

export default AddYear
