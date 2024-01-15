import React, { useContext } from "react"
import { SUBJECTTABLE } from "../constants/subjectConstants"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"

const SubjectTable = () => {
  const { subjectList, searchRecord } = useContext(SubjectApiData)

  let viewProfile = (id) => {
    console.log(id)
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {SUBJECTTABLE.map((item) => (
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
                  {item.exam}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  <span
                    onClick={() => {
                      viewProfile(item.clientId)
                    }}
                  >
                    View
                  </span>
                </td>
              </tr>
            ))}

          {subjectList.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">
                {item.subject}
              </td>
              <td className="w-1/4 border border-gray-200 py-4 px-2">
                <div className="flex space-x-2">
                  <span
                    onClick={() => {
                      processViewCompanyProfile(item.id)
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    View
                  </span>
                  <span
                    onClick={() => {
                      processUpdateCompanyProfile(item.id)
                    }}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Edit
                  </span>

                  <span
                    onClick={() => {
                      processDeleteCompany(item.id)
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

export default SubjectTable
