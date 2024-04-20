import { useContext, useEffect, useState } from "react"
import PaginationContainer from "./paginationContainer"
import { UserApiData } from "../contextApi/users/userContextApi"
import SearchContainer from "./searchContainer"
import UserTable from "./userTable"

const UserTableContainer = () => {
  const { processSearchUser, processGetAllUser, paginationData } =
    useContext(UserApiData)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (data) => {
    console.log(data)
    setSearchTerm(data)
  }

  const handleSearchSubmit = () => {
    //e.preventDefault()
    console.log(searchTerm)
    //processSearchRecord(searchTerm)
  }

  return (
    <div
      className="w-90 m-6 p-4 bg-white rounded shadow-lg"
      style={{ height: "73%" }}
    >
      <SearchContainer
        value={searchTerm}
        change={(data) => {
          handleSearchChange(data)
        }}
        submitSearch={() => {
          handleSearchSubmit()
        }}
      />
      <div className="overflow-auto" style={{ height: "80%" }}>
        <UserTable />
      </div>
      <PaginationContainer
        paginationData={paginationData}
        paginationFunction={processGetAllUser}
      />
    </div>
  )
}

export default UserTableContainer
