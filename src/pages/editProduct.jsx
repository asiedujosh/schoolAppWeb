import { useState, useContext, useEffect } from "react"
import { ADDPRODUCT } from "../constants/pagesConstants"
import InputField from "../components/inputField"
import SubmitBtn from "../components/submitButton"
import UploadImage from "../components/uploadImage"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const EditProduct = () => {
  let { id } = useParams()
  const { productList, processUpdateProduct } = useContext(SystemInfoApiData)
  const [formData, setFormData] = useState({
    id: id,
    name: null,
    description: null,
    imageUpload: null,
  })

  useEffect(() => {
    let data = productList.filter((item) => item.id == id)
    // console.log(data)
    setFormData({
      ...formData,
      title: data[0].title,
      description: data[0].description,
      image: data[0].productImage,
    })
  }, [])

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    let submitData = {
      id: formData.id,
      title: formData.title,
      description: formData.description,
      imageUpload: formData.imageUpload || formData.image || "",
    }

    console.log(submitData)
    processUpdateProduct(submitData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDPRODUCT.editTitle}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-4">
                  {ADDPRODUCT.fieldDetail.map((item) => {
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
              <SubmitBtn text={ADDPRODUCT.buttonText} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default EditProduct
