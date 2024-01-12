import React from "react"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4">
      <div className="flex items-center">
        <div className="mr-4">
          <span className="text-xl font-bold">Welcome</span>
        </div>
      </div>
      <div>
        <div className="flex">
          <button className="text-gray-400 hover:text-white mr-4">
            Notifications
          </button>
          <button className="text-gray-400 hover:text-white">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
