import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constants/constant"

//Add
export const addAbout = async (data) => {
  try {
    let responseOnAddAbout = await axios.post("/api/addAbout", data)
    if (responseOnAddAbout) {
      if (responseOnAddAbout.status === SUCCESS_STATUS) {
        return responseOnAddAbout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addTeam = async (data) => {
  try {
    let responseOnAddTeam = await axios.post("/api/addTeam", data)
    if (responseOnAddTeam) {
      if (responseOnAddTeam.status === SUCCESS_STATUS) {
        return responseOnAddTeam.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addTnc = async (data) => {
  try {
    let responseOnAddTnc = await axios.post("/api/addTnc", data)
    if (responseOnAddTnc) {
      if (responseOnAddTnc.status === SUCCESS_STATUS) {
        return responseOnAddTnc.data
      }
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addContact = async (data) => {
  try {
    let responseOnAddContact = await axios.post("/api/addContact", data)
    if (responseOnAddContact) {
      if (responseOnAddContact.status === SUCCESS_STATUS) {
        return responseOnAddContact.data
      }
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addTestimonial = async (data) => {
  try {
    let responseOnAddTestimonial = await axios.post("/api/addTestimonial", data)
    if (responseOnAddTestimonial) {
      if (responseOnAddTestimonial.status === SUCCESS_STATUS) {
        return responseOnAddTestimonial.data
      }
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addHeroBanner = async (data) => {
  try {
    let responseOnAddHeroBanner = await axios.post("/api/addHeroBanner", data)
    if (responseOnAddHeroBanner) {
      if (responseOnAddHeroBanner.status === SUCCESS_STATUS) {
        return responseOnAddHeroBanner.data
      }
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addProducts = async (data) => {
  try {
    let responseOnAddProducts = await axios.post("/api/addProducts", data)
    if (responseOnAddProducts) {
      if (responseOnAddProducts.status === SUCCESS_STATUS) {
        return responseOnAddProducts.data
      }
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const addBannerType = async (data) => {
  try {
    let responseOnAddBannerType = await axios.post("/api/addBannerType", data)
    if (responseOnAddBannerType) {
      if (responseOnAddBannerType.status === SUCCESS_STATUS) {
        return responseOnAddBannerType.data
      }
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

//Get
export const getAbout = async () => {
  try {
    let responseOnGetAbout = await axios.get(`/api/getAbout`)
    if (responseOnGetAbout) {
      if (responseOnGetAbout.status === SUCCESS_STATUS) {
        return responseOnGetAbout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getTeam = async () => {
  try {
    let responseOnGetTeam = await axios.get(`/api/getTeam`)
    if (responseOnGetTeam) {
      if (responseOnGetTeam.status === SUCCESS_STATUS) {
        return responseOnGetTeam.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getTNC = async () => {
  try {
    let responseOnGetTnc = await axios.get(`/api/getTNC`)
    if (responseOnGetTnc) {
      if (responseOnGetTnc.status === SUCCESS_STATUS) {
        return responseOnGetTnc.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getContact = async () => {
  try {
    let responseOnGetContact = await axios.get(`/api/getContact`)
    if (responseOnGetContact) {
      if (responseOnGetContact.status === SUCCESS_STATUS) {
        return responseOnGetContact.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getTestimonial = async () => {
  try {
    let responseOnGetTestimonial = await axios.get(`/api/getTestimonial`)
    if (responseOnGetTestimonial) {
      if (responseOnGetTestimonial.status === SUCCESS_STATUS) {
        return responseOnGetTestimonial.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getHeroBanner = async () => {
  try {
    let responseOnGetHeroBanner = await axios.get(`/api/getHeroBanner`)
    if (responseOnGetHeroBanner) {
      if (responseOnGetHeroBanner.status === SUCCESS_STATUS) {
        return responseOnGetHeroBanner.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getProducts = async () => {
  try {
    let responseOnGetProducts = await axios.get(`/api/getProducts`)
    if (responseOnGetProducts) {
      if (responseOnGetProducts.status === SUCCESS_STATUS) {
        return responseOnGetProducts.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getBannerType = async () => {
  try {
    let responseOnGetBannerType = await axios.get(`/api/getBannerType`)
    if (responseOnGetBannerType) {
      if (responseOnGetBannerType.status === SUCCESS_STATUS) {
        return responseOnGetBannerType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editAbout = async (data) => {
  try {
    let responseOnEditAbout = await axios.put(
      `/api/aboutUpdate/${data.id}`,
      data
    )
    if (responseOnEditAbout) {
      if (responseOnEditAbout.status === SUCCESS_STATUS) {
        return responseOnEditAbout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editTeam = async (data) => {
  try {
    let responseOnEditTeam = await axios.put(`/api/teamUpdate/${data.id}`, data)
    if (responseOnEditTeam) {
      if (responseOnEditTeam.status === SUCCESS_STATUS) {
        return responseOnEditTeam.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editTnc = async (data) => {
  try {
    let responseOnEditTnc = await axios.put(`/api/tncUpdate/${data.id}`, data)
    if (responseOnEditTnc) {
      if (responseOnEditTnc.status === SUCCESS_STATUS) {
        return responseOnEditTnc.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editContact = async (data) => {
  try {
    let responseOnEditContact = await axios.put(
      `/api/contactUpdate/${data.id}`,
      data
    )
    if (responseOnEditContact) {
      if (responseOnEditContact.status === SUCCESS_STATUS) {
        return responseOnEditContact.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editTestimonial = async (data) => {
  try {
    let responseOnEditTestimonial = await axios.put(
      `/api/testimonialUpdate/${data.id}`,
      data
    )
    if (responseOnEditTestimonial) {
      if (responseOnEditTestimonial.status === SUCCESS_STATUS) {
        return responseOnEditTestimonial.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editHeroBanner = async (data) => {
  try {
    let responseOnEditHeroBannner = await axios.put(
      `/api/heroBannerUpdate/${data.id}`,
      data
    )
    if (responseOnEditHeroBannner) {
      if (responseOnEditHeroBannner.status === SUCCESS_STATUS) {
        return responseOnEditHeroBannner.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editProducts = async (data) => {
  try {
    let responseOnEditProducts = await axios.put(
      `/api/productsUpdate/${data.id}`,
      data
    )
    if (responseOnEditProducts) {
      if (responseOnEditProducts.status === SUCCESS_STATUS) {
        return responseOnEditProducts.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const editBannerType = async (data) => {
  try {
    let responseOnEditBannerType = await axios.put(
      `/api/bannerTypeUpdate/${data.id}`,
      data
    )
    if (responseOnEditBannerType) {
      if (responseOnEditBannerType.status === SUCCESS_STATUS) {
        return responseOnEditBannerType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}

export const deleteAbout = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteAbout = await axios.delete(
      `/api/deleteAbout/${data.id}`
    )
    if (responseOnDeleteAbout) {
      if (responseOnDeleteAbout.status === SUCCESS_STATUS) {
        return responseOnDeleteAbout.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteTeam = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteTeam = await axios.delete(`/api/deleteTeam/${data.id}`)
    if (responseOnDeleteTeam) {
      if (responseOnDeleteTeam.status === SUCCESS_STATUS) {
        return responseOnDeleteTeam.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteTnc = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteTnc = await axios.delete(`/api/deleteTnc/${data.id}`)
    if (responseOnDeleteTnc) {
      if (responseOnDeleteTnc.status === SUCCESS_STATUS) {
        return responseOnDeleteTnc.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteContact = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteContact = await axios.delete(
      `/api/deleteContact/${data.id}`
    )
    if (responseOnDeleteContact) {
      if (responseOnDeleteContact.status === SUCCESS_STATUS) {
        return responseOnDeleteContact.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteTestimonial = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteTestimonial = await axios.delete(
      `/api/deleteTestimonial/${data.id}`
    )
    if (responseOnDeleteTestimonial) {
      if (responseOnDeleteTestimonial.status === SUCCESS_STATUS) {
        return responseOnDeleteTestimonial.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteHeroBanner = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteHeroBanner = await axios.delete(
      `/api/deleteHeroBanner/${data.id}`
    )
    if (responseOnDeleteHeroBanner) {
      if (responseOnDeleteHeroBanner.status === SUCCESS_STATUS) {
        return responseOnDeleteHeroBanner.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}

export const deleteBannerType = async (data) => {
  //console.log(data);
  try {
    let responseOnDeleteBannerType = await axios.delete(
      `/api/deleteBannerType/${data.id}`
    )
    if (responseOnDeleteBannerType) {
      if (responseOnDeleteBannerType.status === SUCCESS_STATUS) {
        return responseOnDeleteBannerType.data
      }
    } else {
      return false
    }
  } catch (err) {
    console.error(err)
  }
}
