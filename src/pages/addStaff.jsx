import { useState, useContext, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { StaffApiData } from "../contextApi/staff/staffContextApi"
import { ADDSTAFF } from "../constants/staffConstants"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import SubmitBtn from "../components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const AddStaff = () => {
  const { processAddStaff } = useContext(StaffApiData)
  const [formData, setFormData] = useState({
    role: ADDSTAFF.fieldDetail[5].options[0],
  })

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    console.log(formData)
    processAddStaff(formData)
    //processAddQuestion(newQuestData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDSTAFF.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">{ADDSTAFF.title}</h2>

                <div className="space-y-2">
                  {ADDSTAFF.fieldDetail.map((item) => {
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
                      (item.type === "password" && (
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
                  <SubmitBtn text={ADDSTAFF.buttonText} submit={handleSubmit} />
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

export default AddStaff
