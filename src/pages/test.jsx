import React, { useState, useEffect } from "react"

const Test = () => {
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    console.log("Hello World 1")
  }, [popup])

  const handlePopup = () => {
    setPopup((item) => !item)
  }

  let ans = "goat"

  let options = "dog**cat**fish**goat"

  return (
    <>
      <div>Hello world</div>
      <button onClick={handlePopup} className="btn">
        Add User / Brand
      </button>

      {popup && (
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          This is my modal
        </div>
      )}
    </>
  )
}

export default Test
