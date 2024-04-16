import ExamSubjectTableContainer from "../components/examSubjectContainer"
import LabelBtn from "../components/labelButton"

const ExamSubjectLink = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Link Exams With Subject" path="/dashboard/addLink" />
        </div>
      </div>
      <div>
        <ExamSubjectTableContainer />
      </div>
    </>
  )
}

export default ExamSubjectLink
