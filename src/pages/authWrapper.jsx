import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthApiData } from "../contextApi/auth/authContextApi"

const AuthWrapper = ({ children }) => {
  const { processLogin, isLoading, setIsLoading, isAuthenticated } =
    useContext(AuthApiData)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }, [isAuthenticated])

  return <>{children}</>
}

export default AuthWrapper
