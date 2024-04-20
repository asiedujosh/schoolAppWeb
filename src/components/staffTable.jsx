import React, { useContext } from "react"
import { STAFFTABLE } from "../constants/staffConstants"
import { StaffApiData } from "../contextApi/staff/staffContextApi"
import { Link } from "react-router-dom"

const StaffTable = () => {
  const { staffList, searchStaffRecord, processDeleteStaff } =
    useContext(StaffApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {STAFFTABLE.map((item, index) => (
              <th key={index} className="border border-gray-200 py-4 px-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchStaffRecord.length > 0
            ? searchStaffRecord.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.username}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.tel}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.role}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editStaff/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeleteStaff({ id: item.id })
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : staffList.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.username}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.tel}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.role}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editStaff/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeleteStaff({ id: item.id })
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

export default StaffTable
