import React, { useState, useEffect } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["image"],
  ],
}

const TextAreaField2 = ({ field, value, change }) => {
  const [newValue, setNewValue] = useState(`${value[field.name]}`)

  console.log(value[field.name])
  useEffect(() => {
    setNewValue(value[field.name])
  }, [])

  useEffect(() => {
    change(newValue, "question")
  }, [newValue])

  //   const handleInputChange = (e) => {
  //     change(e.target.value, field.name)
  //   }

  return (
    <div className="mb-4">
      <label htmlFor="message" className="text-gray-600">
        {field.label}
      </label>

      <div>
        <ReactQuill
          theme="snow"
          value={newValue ? newValue : value[field.name]}
          onChange={setNewValue}
          className=""
          modules={modules}
        />
      </div>
    </div>
  )
}

export default TextAreaField2
