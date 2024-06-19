import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addDuration = async (data) => {
  try {
    let responseOnAddDuration = await axios.post("/api/addDuration", data)
    if (responseOnAddDuration) {
      if (responseOnAddDuration.status === SUCCESS_STATUS) {
        return responseOnAddDuration.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const searchDuration = async (data) => {
  try {
    let responseOnSearchDuration = await axios.get(
      `/api/searchDuration?keyword=${data}`
    )
    if (responseOnSearchDuration) {
      if (responseOnSearchDuration.status === SUCCESS_STATUS) {
        return responseOnSearchDuration.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const getAllDuration = async (data) => {
  try {
    let responseOnGetAllDuration = await axios.get(
      `/api/getAllDuration?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllDuration) {
      if (responseOnGetAllDuration.status === SUCCESS_STATUS) {
        return responseOnGetAllDuration.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editDuration = async (data) => {
  try {
    let responseOnEditDuration = await axios.put(
      `/api/durationUpdate/${data.id}`,
      data
    )
    if (responseOnEditDuration) {
      if (responseOnEditDuration.status === SUCCESS_STATUS) {
        return responseOnEditDuration.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteDuration = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteDuration = await axios.delete(
      `/api/deleteDuration/${data.id}`
    )

    if (responseOnDeleteDuration) {
      if (responseOnDeleteDuration.status === SUCCESS_STATUS) {
        return responseOnDeleteDuration.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
