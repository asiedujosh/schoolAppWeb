import React from "react"
import { Link } from "react-router-dom"

const LabelBtn = ({ text, color, path }) => {
  const submitColor = `w-full mt-3 ${
    color ? "bg-red-500" : "bg-gray-800"
  } text-white py-2 rounded-md hover:${
    color ? "bg-red-400" : "bg-gray-600"
  }  transition duration-300`
  return (
    <Link to={path}>
      <button className={submitColor}>{text}</button>
    </Link>
  )
}

export default LabelBtn
