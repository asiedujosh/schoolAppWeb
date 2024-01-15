import React from "react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  // Add your sidebar links here
  const links = [
    "Exam",
    "Question",
    "Staff",
    "Settings",
    "Subject",
    "Report",
    "Analyses",
  ]

  return (
    <div className="bg-gray-800 text-white p-4" style={{ width: "10vw" }}>
      <Link to={"/dashboard"} className="text-lg font-bold mb-4">
        Dashboard
      </Link>
      {links.map((link) => (
        <div key={link} className="mb-2">
          <Link
            to={`/dashboard/${link}`}
            className="text-gray-400 hover:text-white"
          >
            {link}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
