import React, { useContext, useEffect, useState } from "react"
import { CONTACTTABLE } from "../constants/pagesConstants"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { Link } from "react-router-dom"

const ContactTable = () => {
  const { contactList, processDeleteContact } = useContext(SystemInfoApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {CONTACTTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {contactList.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="border border-gray-200 py-4 px-2">{item.email}</td>
              <td className="border border-gray-200 py-4 px-2">
                {item.phoneNo}
              </td>
              <td className="border border-gray-200 py-4 px-2">
                {item.address}
              </td>
              <td className="w-1/4 border border-gray-200 py-4 px-2">
                <div className="flex space-x-2">
                  <Link
                    to={`/dashboard/editContact/${item.id}/edit`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>

                  <span
                    onClick={() => {
                      // handlePrompt
                      processDeleteContact({ id: item.id })
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

export default ContactTable