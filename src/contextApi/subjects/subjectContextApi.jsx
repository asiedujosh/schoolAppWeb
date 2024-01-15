import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constants/constant"

import { addSubject, getAllSubject } from "./subject"

export const SubjectApiData = createContext()

const SubjectApiDataProvider = (props) => {
  const [subjectList, setSubjectList] = useState([])
  const [searchRecord, setSearchRecord] = useState([])

  const processGetAllSubject = async () => {
    let response = await getAllSubject()
    if (response) {
      setSubjectList(response.data.data)
    }
  }

  const processAddSubject = async (data) => {
    let response = await addSubject(data)
    if (response) {
      processGetAllSubject()
      notify(SUCCESS_STATUS)
      //   router.push(`/users`)
    }
  }

  const processUpdateSubject = async () => {}

  const processDeleteSubject = async () => {}

  return (
    <SubjectApiData.Provider
      value={{
        processGetAllSubject,
        processAddSubject,
        processUpdateSubject,
        processDeleteSubject,
        subjectList,
        searchRecord,
      }}
    >
      {props.children}
    </SubjectApiData.Provider>
  )
}

export default SubjectApiDataProvider
