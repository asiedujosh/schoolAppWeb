import React from "react"
import { Link } from "react-router-dom"

const Card = ({ title, content }) => {
  return (
    <div className="max-w-lg bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0">
      <Link to="/">
        <div className="w-60 h-40 transition-transform transform hover:scale-105 hover:shadow-md hover:bg-white hover:ring-2 hover:ring-white">
          <div className="py-4 px-6">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card
