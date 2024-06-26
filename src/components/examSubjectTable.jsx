import React, { useContext, useEffect } from "react"
import { examsName, subjectName, yearName } from "../utils/nameReturn"
import { EXAMSUBJECTTABLE } from "../constants/linkConstants"
import { SubjectApiData } from "../contextApi/subjects/subjectContextApi"
import { ExamApiData } from "../contextApi/exams/examsContextApi"
import { ExamSubjectApiData } from "../contextApi/examSubjectRelation/examRelationContextApi"

import { Link } from "react-router-dom"
import { YearApiData } from "../contextApi/year/yearContextApi"

const ExamSubjectTable = () => {
  const { examsList } = useContext(ExamApiData)
  const { subjectList } = useContext(SubjectApiData)
  const { yearList } = useContext(YearApiData)
  const {
    searchExamSubjectRecord,
    processGetAllExamSubjectLink,
    examSubjectLinkList,
    processDeleteExamSubject,
  } = useContext(ExamSubjectApiData)

  return (
    <>
      <table className="w-full table-auto rounded">
        <thead className="sticky top-0 z-10 bg-gray-100">
          <tr>
            {EXAMSUBJECTTABLE.map((item) => (
              <th className="border border-gray-200 py-4 px-2">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody
          className="w-full overflow-y-auto"
          style={{ maxHeight: "calc(80% - 3.5rem)" }}
        >
          {searchExamSubjectRecord.length > 0
            ? searchExamSubjectRecord.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {examsName(examsList, item.examId)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {subjectName(subjectList, item.subjectId)}({item.subjectId})
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.offerType}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.examTime}
                  </td>

                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editLink/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeleteExamSubject({ id: item.id })
                          //   processDeleteCompany(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                      >
                        Delete
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            : examSubjectLinkList.map((item) => (
                <tr key={item.id} className="border-t border-gray-200">
                  <td className="border border-gray-200 py-4 px-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {examsName(examsList, item.examId)}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {subjectName(subjectList, item.subjectId)}({item.subjectId})
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.offerType}
                  </td>
                  <td className="border border-gray-200 py-4 px-2">
                    {item.examTime}
                  </td>

                  <td className="w-1/4 border border-gray-200 py-4 px-2">
                    <div className="flex space-x-2">
                      <Link
                        to={`/dashboard/editLink/${item.id}/edit`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                      >
                        Edit
                      </Link>

                      <span
                        onClick={() => {
                          processDeleteExamSubject({ id: item.id })
                          //   processDeleteCompany(item.id)
                        }}
                        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded cursor-pointer"
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

export default ExamSubjectTable
