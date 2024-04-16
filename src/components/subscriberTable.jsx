import React, { useContext } from "react"
import { SUBSCRIBERTABLE } from "../constants/subscriberConstants"
import { SubscribersApiData } from "../contextApi/subscribers/subscribersContextApi"
import { Link } from "react-router-dom"

const SubscriberTable = () => {
  const { subscribersList, searchRecord } = useContext(SubscribersApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {SUBSCRIBERTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchRecord.length > 0
            ? searchRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.tel}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.package}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.amount}
                  </td>
                </tr>
              ))
            : subscribersList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.tel}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.package}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.amount}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  )
}

export default SubscriberTable
