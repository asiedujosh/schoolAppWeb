import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

export const addSlider = async (data) => {
  try {
    let responseOnAddSlider = await axios.post("/api/addSlider", data)
    if (responseOnAddSlider) {
      if (responseOnAddSlider.status === SUCCESS_STATUS) {
        return responseOnAddSlider.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getAllSlider = async (data) => {
  try {
    let responseOnGetAllSlider = await axios.get(
      `/api/getAllSlider?page=${data}&perPage=${LISTONPAGES}`
    )
    if (responseOnGetAllSlider) {
      if (responseOnGetAllSlider.status === SUCCESS_STATUS) {
        return responseOnGetAllSlider.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editSlider = async (data) => {
  try {
    let responseOnEditSlider = await axios.put(
      `/api/sliderUpdate/${data.id}`,
      data
    )
    if (responseOnEditSlider) {
      if (responseOnEditSlider.status === SUCCESS_STATUS) {
        return responseOnEditSlider.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteSlider = async (data) => {
  // console.log(data)
  try {
    let responseOnDeleteSlider = await axios.delete(
      `/api/deleteSlider/${data.id}`
    )

    if (responseOnDeleteSlider) {
      if (responseOnDeleteSlider.status === SUCCESS_STATUS) {
        return responseOnDeleteSlider.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
