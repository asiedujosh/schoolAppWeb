import React from "react"

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
      <div className="text-lg font-bold mb-4">Dashboard</div>
      {links.map((link) => (
        <div key={link} className="mb-2">
          <a href="#" className="text-gray-400 hover:text-white">
            {link}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
