import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

export const login = async (data) => {
  try {
    let responseOnLogin = await axios.post("/api/workerLogin", data)
    if (responseOnLogin.status === SUCCESS_STATUS) {
      return responseOnLogin.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const register = async (data) => {
  try {
    let responseOnRegister = await axios.post("/api/workerRegister", data)
    if (responseOnRegister.status === SUCCESS_STATUS) {
      return responseOnRegister.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}
