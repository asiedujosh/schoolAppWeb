import React, { useContext, useEffect, useState } from "react"
import { PRIVILEDGETABLE } from "../constants/priviledgeConstants"
import { PriviledgeApiData } from "../contextApi/priviledge/priviledgeContextApi"
import { Link } from "react-router-dom"

const PriviledgeTable = () => {
  const { priviledgeList, searchPriviledgeRecord, processDeletePriviledge } =
    useContext(PriviledgeApiData)
  const [showPrompt, setShowPrompt] = useState(false)
  const [promptValue, setPromptValue] = useState("")

  //   useEffect(() => {
  //     if (searchExamRecord.length > 0) {
  //       console.log(searchExamRecord)
  //     }
  //   }, [searchExamRecord])

  const handlePrompt = () => {
    const value = prompt("Delete exams with linked questions?")
    if (value !== null) {
      console.log(value)
      setPromptValue(value)
    }
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {PRIVILEDGETABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchPriviledgeRecord.length > 0
            ? searchPriviledgeRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.username}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editPriviledge/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          // handlePrompt
                          processDeletePriviledge({ id: item.id })
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : priviledgeList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.username}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editPriviledge/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          // handlePrompt
                          processDeletePriviledge({ id: item.id })
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

export default PriviledgeTable
