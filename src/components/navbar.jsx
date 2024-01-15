import React, { useContext } from "react"
import { AuthApiData } from "../contextApi/auth/authContextApi"

const Navbar = () => {
  const { userProfile, processLogout } = useContext(AuthApiData)

  let handleLogout = () => {
    // console.log("Logginout")
    processLogout()
  }

  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="flex items-center">
        <div className="mr-4">
          <span className="text-xl font-bold">
            Welcome {userProfile && userProfile.username}
          </span>
        </div>
      </div>
      <div>
        <div className="flex">
          <button className="text-gray-400 hover:text-white mr-4">
            Notifications
          </button>
          <button
            className="text-gray-400 hover:text-white"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
