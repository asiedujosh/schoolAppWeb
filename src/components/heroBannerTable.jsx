import React, { useContext, useEffect, useState } from "react"
import { BANNERTABLE } from "../constants/pagesConstants"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { Link } from "react-router-dom"

const BannerTable = () => {
  const { heroBannerList, processDeleteHeroBanner } =
    useContext(SystemInfoApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {BANNERTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {heroBannerList?.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">{item.title}</td>
              <td className="border border-gray-200 py-4 px-2">{item.body}</td>
              <td className="w-1/4 border border-gray-200 py-4 px-2">
                <div className="flex space-x-2">
                  <Link
                    to={`/dashboard/editBanner/${item.id}/edit`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default BannerTable
