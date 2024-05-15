import React, { useState } from "react"

const UploadAudio = ({ change }) => {
  const [audioUrl, setAudioUrl] = useState(null)

  const handleClearAudio = () => {
    setAudioUrl(null)
  }

  const handleAudioUpload = (e) => {
    const selectedAudio = e.target.files[0]
    const audioObjectUrl = URL.createObjectURL(selectedAudio)
    setAudioUrl(audioObjectUrl)
    change(selectedAudio, "audioUpload")
  }

  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-md">
      <div className="w-full md:w-1/2 pr-0 md:pr-4">
        {/* Display and play audio */}
        {audioUrl ? (
          <div className="flex">
            <audio controls>
              <source src={audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <button
              type="button"
              onClick={handleClearAudio}
              className="bg-gray-800 py-2 rounded-md px-4 mx-2 text-white"
            >
              Clear Audio
            </button>
          </div>
        ) : (
          <p>No audio available</p>
        )}
      </div>
      <div className="w-full md:w-1/2 mt-2 md:mt-0">
        <input
          type="file"
          accept="audio/*"
          onChange={handleAudioUpload}
          className="hidden"
          id="audio-upload"
        />
        <label
          htmlFor="audio-upload"
          className="cursor-pointer bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Upload Audio
        </label>
      </div>
    </div>
  )
}

export default UploadAudio
