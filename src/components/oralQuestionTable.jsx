import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { QUESTIONTABLE } from "../constants/questionConstants"
import { QuestionApiData } from "../contextApi/questions/questionContextApi"
import { Link } from "react-router-dom"

const OralQuestionTable = () => {
  const {
    oralQuestionList,
    searchRecord,
    preparingQuestForEdit,
    editClear,
    processDeleteQuestion,
  } = useContext(QuestionApiData)

  const navigate = useNavigate()

  let viewEdit = (id) => {
    preparingQuestForEdit(id)
    navigate(`/dashboard/editQuestion/${id}/edit`)
  }

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {QUESTIONTABLE.map((item) => (
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
                  {item.questionNo}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  <audio controls src={item.audio_url}>
                    Your browser does not support the audio element.
                  </audio>
                </td>
                <td className="border border-gray-200 py-4 px-2 ">
                  {item.answer}
                </td>
                <td className="w-1/6 border border-gray-200 py-4 px-2">
                  <div className="flex space-x-2">
                    <span
                      onClick={() => {
                        // console.log(item.id)
                        viewEdit(item.id)
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Edit
                    </span>

                    <span
                      onClick={() => {
                        processDeleteQuestion({ id: item.id })
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}

          {searchRecord.length == 0 &&
            oralQuestionList.map((item) => (
              <tr key={item.id} className="border-t border-gray-200">
                <td className="border border-gray-200 py-4 px-2">
                  {item.questionNo}
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  <audio controls src={item.audio_url}>
                    Your browser does not support the audio element.
                  </audio>
                </td>
                <td className="border border-gray-200 py-4 px-2">
                  {item.answer}
                </td>
                <td className="w-1/6 border border-gray-200 py-4 px-2">
                  <div className="flex space-x-2">
                    <span
                      onClick={() => {
                        viewEdit(item.id)
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      Edit
                    </span>

                    <span
                      onClick={() => {
                        processDeleteQuestion({ id: item.id })
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

export default OralQuestionTable
