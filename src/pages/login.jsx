import { useState, useContext, useEffect } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"
import { useNavigate } from "react-router-dom"
import InputField from "../components/inputField"
import SubmitBtn from "../components/submitButton"
import LoadingBtn from "../components/loadingButton"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  USERNAME_FIELD,
  PASSWORD_FIELD,
  LOGIN_PAGE_TEXT,
} from "../constants/loginConstants"

const Login = () => {
  const { processLogin, isLoading, setIsLoading, isAuthenticated } =
    useContext(AuthApiData)
  const [formData, setFormData] = useState({})
  const [error, setError] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }, [isAuthenticated])

  const handleInputChange = (data, field) => {
    setError([])
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    setIsLoading(!isLoading)

    // let newErr = []
    // if (!formData.personnel_id)
    //   newErr.push({
    //     id: USERNAME_FIELD.name,
    //     name: USERNAME_FIELD.label,
    //     status: true,
    //   })

    // if (!formData.password)
    //   newErr.push({
    //     id: PASSWORD_FIELD.name,
    //     name: PASSWORD_FIELD.name,
    //     status: true,
    //   })

    // if (newErr.length > 0) {
    //   setIsLoading(false)
    //   setError(newErr)
    // } else {
    //   processLogin(formData)
    // }
    // console.log(formData)
    processLogin(formData)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:py-24">
      <div className="flex items-center justify-center h-1/2 mt-32">
        <div className="bg-white mx-4 sm:w-1/2 h-1/2 sm:h-1/2 md:w-5/6 md:h-5/6 lg:w-5/6 lg:h-4/5 px-6 py-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <h5 className="text-lg font-bold text-gray-800 mb-4">
              {LOGIN_PAGE_TEXT.title}
            </h5>
          </div>
          <InputField
            field={USERNAME_FIELD}
            value={formData}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />
          <InputField
            field={PASSWORD_FIELD}
            value={formData}
            change={(data, field) => {
              handleInputChange(data, field)
            }}
          />

          <SubmitBtn text={LOGIN_PAGE_TEXT.buttonText} submit={handleSubmit} />
        </div>
      </div>
      <ToastContainer />
    </main>
  )
}

export default Login
