import { useState, useContext, useEffect } from "react"
import { DurationApiData } from "../contextApi/duration/durationContextApi"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examRelationContextApi"
import { PriceApiData } from "../contextApi/price/priceContextApi"
import { ADDPRICE } from "../constants/pricingConstants"
import InputField from "../components/inputField"
import SelectField from "../components/selectField"
import SubmitBtn from "../components/submitButton"
import { useParams } from "react-router-dom"
import LoadingBtn from "../components/loadingButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditPrice = () => {
  let { id } = useParams()
  const { durationOptions } = useContext(DurationApiData)
  const { processUpdatePrice, priceList } = useContext(PriceApiData)
  const { examSubjectLinkOptions } = useContext(ExamSubjectApiData)

  const [formData, setFormData] = useState({
    examSubjectId: null,
    pricing: null,
    durationType: null,
  })

  useEffect(() => {
    let data = priceList.filter((item) => item.id == id)
    console.log(data)
    setFormData({
      ...formData,
      examSubjectId: data[0].examSubjectId,
      pricing: data[0].price,
      durationType: data[0].durationType,
    })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    formData.examSubjectId = formData.examSubjectId || examSubjectLinkOptions[0]
    formData.pricing = formData.pricing
    formData.durationType = formData.durationType || durationOptions[0]

    let newData = {
      id: id,
      examSubjectId: formData.examSubjectId,
      pricing: formData.pricing,
      durationType: formData.durationType,
    }

    // console.log(newData)
    processUpdatePrice(newData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDPRICE.editTitle}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">
                  {ADDPRICE.editTitle}
                </h2>

                <div className="space-y-4">
                  {ADDPRICE.fieldDetail.map((item) => {
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
                          item.name === "examSubjectId"
                            ? examSubjectLinkOptions
                            : durationOptions
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
              <SubmitBtn text={ADDPRICE.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditPrice
