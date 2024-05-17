import axios from "../../utils/axios.config"
import { SUCCESS_STATUS } from "../../constants/constant"

// export const addPackage = async (data) => {
//   try {
//     let responseOnAddPackage = await axios.post("/api/addPricePackage", data)
//     if (responseOnAddPackage.status === SUCCESS_STATUS) {
//       return responseOnAddPackage.data
//     } else {
//       return false
//     }
//   } catch (err) {
//     console.log(err)
//     return false
//   }
// }

export const getAllSubscribers = async () => {
  try {
    let responseOnGetAllSubscribers = await axios.get("/api/getAllSubscribers")
    if (responseOnGetAllSubscribers) {
      if (responseOnGetAllSubscribers.status === SUCCESS_STATUS) {
        return responseOnGetAllSubscribers.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const countSubscribers = async () => {
  try {
    let responseOnCountSubscribers = await axios.get("/api/countSubscribers")
    if (responseOnCountSubscribers) {
      if (responseOnCountSubscribers.status === SUCCESS_STATUS) {
        return responseOnCountSubscribers.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

// export const editSubscribers = async (data) => {
//   try {
//     let responseOnEditPackage = await axios.put(
//       `/api/packageUpdate/${data.id}`,
//       data
//     )
//     if (responseOnEditPackage.status === SUCCESS_STATUS) {
//       return responseOnEditPackage.data
//     } else {
//       return false
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const deletePackage = async (data) => {
//   //console.log(data);
//   try {
//     let responseOnDeleteTopic = await axios.delete("/api/deletePackage", {
//       data: data, // Pass the data in the config object
//       headers: {
//         "Content-Type": "application/json", // Set the Content-Type header if sending JSON data
//       },
//     })

//     if (responseOnDeleteTopic.status === SUCCESS_STATUS) {
//       return responseOnDeleteTopic.data
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }
