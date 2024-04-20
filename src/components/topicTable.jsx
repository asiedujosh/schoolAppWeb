import React, { useContext } from "react"
import { TOPICTABLE } from "../constants/topicConstants"
import { Link } from "react-router-dom"
import { TopicApiData } from "../contextApi/topic/topicContextApi"

const TopicTable = () => {
  const { topicList, searchRecord, processDeleteTopic } =
    useContext(TopicApiData)

  let viewProfile = (id) => {
    console.log(id)
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {TOPICTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchRecord &&
            searchRecord.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="border border-gray-200 py-4 px-2">
                  {item.topic}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  <div className="flex space-x-2">
                    <Link
                      to={`/dashboard/editTopic/${item.id}/edit`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Edit
                    </Link>

                    <span
                      onClick={() => {
                        processDeleteTopic({ id: item.id })
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}

          {topicList.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">{item.topic}</td>
              <td className="w-1/4 border border-gray-200 py-4 px-2">
                <div className="flex space-x-2">
                  <Link
                    to={`/dashboard/editTopic/${item.id}/edit`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>

                  <span
                    onClick={() => {
                      processDeleteTopic({ id: item.id })
                    }}
                    className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Delete
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TopicTable
