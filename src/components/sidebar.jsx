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
    <div
      className="bg-gray-800 text-white w-full overflow-hidden py-4"
      style={{ width: "10vw" }}
    >
      <Link
        to={"/dashboard"}
        className="text-lg font-bold border-b py-4 border-gray-500 bg-gray-800 px-14 hover:bg-gray-600"
      >
        Dashboard
      </Link>
      <div className="mt-4">
        {links.map((link) => (
          <Link
            key={link}
            to={`/dashboard/${link}`}
            className="block text-gray-400 border-b border-gray-500 bg-gray-800 px-14 hover:text-white py-4 hover:bg-gray-600"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
