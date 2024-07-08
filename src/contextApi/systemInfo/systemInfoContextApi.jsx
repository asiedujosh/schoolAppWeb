import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addAbout,
  addTeam,
  addTnc,
  addContact,
  addTestimonial,
  addHeroBanner,
  addProducts,
  addBannerType,
  getAbout,
  getTeam,
  getTNC,
  getContact,
  getTestimonial,
  getHeroBanner,
  getProducts,
  getBannerType,
  editAbout,
  editTeam,
  editTnc,
  editContact,
  editTestimonial,
  editHeroBanner,
  editProducts,
  editBannerType,
  deleteAbout,
  deleteTeam,
  deleteTnc,
  deleteContact,
  deleteTestimonial,
  deleteHeroBanner,
  deleteBannerType,
} from "./systemInfo"

export const SystemInfoApiData = createContext()

const SystemInfoApiDataProvider = (props) => {
  const [aboutList, setAboutList] = useState([])
  const [teamList, setTeamList] = useState([])
  const [tncList, setTncList] = useState([])
  const [contactList, setContactList] = useState([])
  const [testimonialList, setTestimonialList] = useState([])
  const [heroBannerList, setHeroBannerList] = useState([])
  const [productList, setProductList] = useState([])
  const [bannerTypeList, setBannerTypeList] = useState([])
  const [paginationData, setPaginationData] = useState([])

  const processGetAbout = async (data) => {
    let response = await getAbout(data || 1)
    if (response) {
      setAboutList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetTeam = async (data) => {
    let response = await getTeam(data || 1)
    if (response) {
      setTeamList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetTnc = async (data) => {
    let response = await getTNC(data || 1)
    if (response) {
      setTncList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetContact = async (data) => {
    let response = await getContact(data || 1)
    if (response) {
      setContactList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetTestimonial = async (data) => {
    let response = await getTestimonial(data || 1)
    if (response) {
      setTestimonialList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetHeroBanner = async (data) => {
    let response = await getHeroBanner(data || 1)
    if (response) {
      setHeroBannerList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetProduct = async (data) => {
    let response = await getProducts(data || 1)
    if (response) {
      setProductList(response.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processGetBannerType = async (data) => {
    let response = await getBannerType(data || 1)
    if (response) {
      setBannerTypeList(response.data.data.data)
      setPaginationData(response.data.pagination)
    }
  }

  const processAddAbout = async (data) => {
    let response = await addAbout(data)
    if (response) {
      processGetAbout()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddTeam = async (data) => {
    let response = await addTeam(data)
    if (response) {
      processGetTeam()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddTnc = async (data) => {
    let response = await addTnc(data)
    if (response) {
      processGetTnc()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddContact = async (data) => {
    let response = await addContact(data)
    if (response) {
      processGetContact()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddTestimonial = async (data) => {
    let response = await addTestimonial(data)
    if (response) {
      processGetTestimonial()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddHeroBanner = async (data) => {
    let response = await addHeroBanner(data)
    if (response) {
      processGetHeroBanner()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddProduct = async (data) => {
    let response = await addProducts(data)
    if (response) {
      processGetProduct()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processAddBannerType = async (data) => {
    let response = await addBannerType(data)
    if (response) {
      processGetBannerType()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateAbout = async (data) => {
    let response = await editAbout(data)
    if (response) {
      processGetAbout()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateTeam = async (data) => {
    let response = await editTeam(data)
    if (response) {
      processGetTeam()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateTnc = async (data) => {
    let response = await editTnc(data)
    if (response) {
      processGetTnc()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateContact = async (data) => {
    let response = await editContact(data)
    if (response) {
      processGetContact()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateTestimonial = async (data) => {
    let response = await editTestimonial(data)
    if (response) {
      processGetTestimonial()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateHeroBanner = async (data) => {
    let response = await editHeroBanner(data)
    if (response) {
      processGetHeroBanner()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateProduct = async (data) => {
    let response = await editProducts(data)
    if (response) {
      processGetProduct()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processUpdateBannerType = async (data) => {
    let response = await editBannerType(data)
    if (response) {
      processGetBannerType()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteAbout = async (data) => {
    // console.log(data)
    let response = await deleteAbout(data)
    if (response) {
      processGetAbout()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteTeam = async (data) => {
    // console.log(data)
    let response = await deleteTeam(data)
    if (response) {
      processGetTeam()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteTnc = async (data) => {
    // console.log(data)
    let response = await deleteTnc(data)
    if (response) {
      processGetTnc()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteContact = async (data) => {
    // console.log(data)
    let response = await deleteContact(data)
    if (response) {
      processGetContact()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteTestimonial = async (data) => {
    // console.log(data)
    let response = await deleteTestimonial(data)
    if (response) {
      processGetTestimonial()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteHeroBanner = async (data) => {
    // console.log(data)
    let response = await deleteHeroBanner(data)
    if (response) {
      processGetHeroBanner()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteProducts = async (data) => {
    // console.log(data)
    let response = await deleteProducts(data)
    if (response) {
      processGetProducts()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  const processDeleteBannerType = async (data) => {
    // console.log(data)
    let response = await deleteBannerType(data)
    if (response) {
      processGetBannerType()
      notify(SUCCESS_STATUS)
    } else {
      notify(BAD_REQUEST_STATUS)
    }
  }

  return (
    <SystemInfoApiData.Provider
      value={{
        aboutList,
        teamList,
        tncList,
        contactList,
        testimonialList,
        heroBannerList,
        productList,
        bannerTypeList,
        paginationData,
        processGetAbout,
        processGetTeam,
        processGetTnc,
        processGetContact,
        processGetTestimonial,
        processGetHeroBanner,
        processGetProduct,
        processGetBannerType,
        processAddAbout,
        processAddTeam,
        processAddTnc,
        processAddContact,
        processAddTestimonial,
        processAddHeroBanner,
        processAddProduct,
        processAddBannerType,
        processUpdateAbout,
        processUpdateTeam,
        processUpdateTnc,
        processUpdateContact,
        processUpdateTestimonial,
        processUpdateHeroBanner,
        processUpdateProduct,
        processUpdateBannerType,
        processDeleteAbout,
        processDeleteTeam,
        processDeleteTnc,
        processDeleteContact,
        processDeleteTestimonial,
        processDeleteHeroBanner,
        processDeleteProducts,
        processDeleteBannerType,
      }}
    >
      {props.children}
    </SystemInfoApiData.Provider>
  )
}

export default SystemInfoApiDataProvider
