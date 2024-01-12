import React from "react"

const LabelBtn = ({ text, color }) => {
  const submitColor = `w-full mt-3 ${
    color ? "bg-red-500" : "bg-gray-800"
  } text-white py-2 rounded-md hover:${
    color ? "bg-red-400" : "bg-gray-600"
  }  transition duration-300`
  return <button className={submitColor}>{text}</button>
}

export default LabelBtn
