import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  // Add your sidebar links here
  const links = [
    "Exam",
    "Question",
    "Staff",
    "Subject",
    "Slider",
    "Setting",
    "Notification",
  ]

  return (
    <div className="bg-gray-800 text-white overflow-hidden w-40">
      <Link
        to={"/dashboard"}
        className="flex w-full items-center justify-center text-lg font-bold border-b py-4 border-gray-500 bg-gray-800 hover:bg-gray-600"
      >
        Dashboard
      </Link>
      <div>
        {links.map((link) => (
          <Link
            key={link}
            to={`/dashboard/${link}`}
            className="flex items-center justify-center w-full text-gray-400 border-b border-gray-500 bg-gray-800 hover:text-white py-4 hover:bg-gray-600"
          >
            <span className="w-1/2">{link}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
