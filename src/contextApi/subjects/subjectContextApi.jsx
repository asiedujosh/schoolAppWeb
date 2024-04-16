import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import {
  addSubject,
  getAllSubject,
  editSubject,
  deleteSubject,
  searchSubjectRecords,
} from "./subject"

export const SubjectApiData = createContext()

const SubjectApiDataProvider = (props) => {
  const [subjectList, setSubjectList] = useState([])
  const [searchSubjectRecord, setSearchSubjectRecord] = useState([])
  const [subjectOptions, setSubjectOptions] = useState()

  const processSearchSubject = async (data) => {
    let responseOnSearch = await searchSubjectRecords(data)
    if (responseOnSearch) {
      setSearchSubjectRecord(responseOnSearch.data.data)
    }
  }

  const processGetAllSubject = async () => {
    let response = await getAllSubject()
    if (response) {
      setSubjectList(response.data.data)
      processSubjectOptions(response.data.data)
    }
  }

  const processSubjectOptions = async (data) => {
    let subjects = []
    data &&
      data.map((item) => {
        subjects.push(item.subject)
      })
    setSubjectOptions(subjects)
  }

  const processAddSubject = async (data) => {
    let response = await addSubject(data)
    if (response) {
      processGetAllSubject()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    }
  }

  const processUpdateSubject = async (data) => {
    let response = await editSubject(data)
    if (response) {
      processGetAllSubject()
      notify(SUCCESS_STATUS)
    }
  }

  const processDeleteSubject = async (data) => {
    // console.log(data)
    let response = await deleteSubject(data)
    if (response) {
      processGetAllExams()
      notify(SUCCESS_STATUS)
    }
  }

  return (
    <SubjectApiData.Provider
      value={{
        processGetAllSubject,
        processAddSubject,
        processUpdateSubject,
        processDeleteSubject,
        processSearchSubject,
        subjectList,
        searchSubjectRecord,
        subjectOptions,
      }}
    >
      {props.children}
    </SubjectApiData.Provider>
  )
}

export default SubjectApiDataProvider
