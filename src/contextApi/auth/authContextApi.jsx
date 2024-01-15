import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS } from "../../constants/constant"
import axios from "../../utils/axios.config"

import { login, register, retrieve, logout } from "./auth"
import cookieMethods from "../../utils/cookieUtils"

export const AuthApiData = createContext()

const AuthApiDataProvider = (props) => {
  const [allUsers, setAllUsers] = useState([])
  const [userProfile, setUserProfile] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  //   const router = useRouter()

  const processLogin = async (data) => {
    let response = await login(data)
    if (response) {
      setUserProfile(response.data.client)
      // set the cookie
      cookieMethods.setCookies(response.data.token)
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`
      setIsAuthenticated(true)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      notify(BAD_REQUEST_STATUS, "Invalid Username/Password")
    }
  }

  const processRegister = async () => {
    let response = await register(data)
    if (response) {
      console.log(response)
    }
  }

  const processRetrieve = async () => {
    let cookieData = cookieMethods.getCookies()
    if (!cookieData.accessToken) return false
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${cookieData.accessToken}`

    let response = await retrieve()
    if (response) {
      // console.log(response)
      setUserProfile(response.data)
      setIsAuthenticated(true)
      return true
    } else {
      return false
    }
  }

  const processLogout = async () => {
    let response = await logout()
    if (response) {
      cookieMethods.deleteCookies()
      setIsAuthenticated(false)
      return false
    }
  }

  return (
    <AuthApiData.Provider
      value={{
        allUsers,
        setAllUsers,
        userProfile,
        setUserProfile,
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        setIsLoading,
        processLogin,
        processRegister,
        processLogout,
        processRetrieve,
      }}
    >
      {props.children}
    </AuthApiData.Provider>
  )
}

export default AuthApiDataProvider
