import React, { useCallback, useState } from "react"
import SubmitBtn from "./submitButton"
import { useDropzone } from "react-dropzone"

const UploadImageTwo = ({ change }) => {
  // const [imageData, setImageData] = useState([]);
  const maxFileSize = 4 * 1024 * 1024 // 4MB in bytes
  const allowedFileTypes = ["image/png", "image/jpeg"]

  const onDrop = useCallback(async (acceptedFiles) => {
    const updatedImageData = await Promise.all(
      acceptedFiles.map(async (file) => {
        if (file.size > maxFileSize) {
          console.error(`File "${file.name}" exceeds the maximum size of 1MB.`)
          return null // Skip this file
        }

        if (!allowedFileTypes.includes(file.type)) {
          console.error(`File "${file.name}" is not a valid PNG or JPEG file.`)
          return null // Skip this file
        }

        const base64Data = await getBase64(file)
        return {
          file,
          base64Data,
        }
      })
    )

    const filteredImageData = updatedImageData.filter((data) => data !== null)

    change[1]((prevImageData) => [...prevImageData, ...filteredImageData])
  }, [])

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const handleClear = () => {
    change[1]([])
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="container mx-auto my-8">
      <div
        {...getRootProps()}
        className={`dropzone border-dashed border-2 border-gray-400 p-6 rounded-md text-center ${
          isDragActive ? "bg-gray-100" : "bg-white"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag 'n' drop some images here, or click to select images
        </p>
      </div>
      <div className="flex flex-wrap mt-4">
        {change[0].map((data, index) => (
          <div key={index} className="w-1/4 p-4">
            <img
              src={URL.createObjectURL(data.file)}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
      <div>
        {change[0].length > 0 && (
          <SubmitBtn text="Clear" submit={handleClear} color="bg-grey-500" />
        )}
      </div>
    </div>
  )
}

export default UploadImageTwo
