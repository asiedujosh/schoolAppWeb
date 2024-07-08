import { useState, useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { ADDTEAM } from "../constants/pagesConstants"
import TextAreaField2 from "../components/textAreaField2"
import SubmitBtn from "../components/submitButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditTeam = () => {
  let { id } = useParams()
  const { processUpdateTeam, teamList } = useContext(SystemInfoApiData)
  const [formData, setFormData] = useState({
    id: id,
    team: null,
  })

  useEffect(() => {
    let data = teamList.filter((item) => item.id == id)
    setFormData({
      ...formData,
      team: data[0].team,
    })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    let newData = {
      id: formData.id,
      team: formData.question?.level?.content || formData.team,
    }
    processUpdateTeam(newData)
    //processAddQuestion(newQuestData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {"Edit Team"}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">{"Edit Team"}</h2>

                <div className="space-y-2">
                  {ADDTEAM.fieldDetail.map((item) => {
                    return (
                      <TextAreaField2
                        key={item.id}
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
                <div className="mt-2 min-w-full flex items-center justify-center">
                  <SubmitBtn text={ADDTEAM.buttonText} submit={handleSubmit} />
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

export default EditTeam
