import React, { useContext } from "react"
import { PACKAGETABLE } from "../constants/packageConstants"
import { PackageApiData } from "../contextApi/package/packageContextApi"
import { Link } from "react-router-dom"

const PackageTable = () => {
  const { packageList, searchRecord } = useContext(PackageApiData)

  let viewProfile = (id) => {
    console.log(id)
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {PACKAGETABLE.map((item, index) => (
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
          {searchRecord.length > 0
            ? searchRecord.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.packagePrice}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.description}
                  </td>

                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editPackage/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeletePackage(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : packageList.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.packagePrice}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.description}
                  </td>
                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editYear/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeletePackage(item.id)
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

export default PackageTable
