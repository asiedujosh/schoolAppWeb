import React, { useState } from "react"
import { Alphabets } from "../utils/options"

const OptionAnsInput = ({ field, value, change, defaultVal }) => {
  //   const [optionValue, setOptionValue] = useState("")

  const handleInputChange = (e) => {
    //console.log(e.target.value)
    change(e.target.value, field.id)
  }

  return (
    <div className="mb-4 w-full mx-2 my-2">
      <label className="text-gray-600">{`Option ${Alphabets[field.id]}`}</label>
      <input
        type="text"
        id={`option${field.id}`}
        name={`option${field.id}`}
        value={value[field.value] || defaultVal}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
      />
    </div>
  )
}

export default OptionAnsInput
