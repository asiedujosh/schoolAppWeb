import { useState, useContext, useEffect } from "react"
import { ADDNEWS } from "../constants/newsConstants"
import TextAreaField from "../components/textAreaField"
import { NewsApiData } from "../contextApi/news/newsContextApi"
import { ToastContainer, toast } from "react-toastify"
import InputField from "../components/inputField"
import SubmitBtn from "../components/submitButton"
import "react-toastify/dist/ReactToastify.css"

const AddNews = () => {
  const { processAddNews } = useContext(NewsApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    let newData = {
      title: formData && formData.title,
      news: formData && formData.question,
    }

    // console.log(formData)
    processAddNews(newData)
  }

  return (
    <>
      <div className="checkPoint overflow-y-scroll">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDNEWS.title}
            </h2>
          </div>
          <hr class="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <h2 className="text-lg font-semibold mb-2">{ADDNEWS.title}</h2>

                <div>
                  <h6 className="text-lg font-bold my-2">News Section</h6>
                  {ADDNEWS.fieldDetail.map((item) => {
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
                      (item.type === "textArea" && (
                        <TextAreaField
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
                  <SubmitBtn text={ADDNEWS.buttonText} submit={handleSubmit} />
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

export default AddNews
