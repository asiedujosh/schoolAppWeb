import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ExamTableContainer from "../components/examTableContainer"

const Exam = () => {
  return (
    <>
      <div>
        <ExamTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Exam
