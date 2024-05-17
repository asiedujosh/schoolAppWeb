import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import QuestionTableContainer from "../components/questionTableContainer"

const Question = () => {
  return (
    <>
      <div>
        <QuestionTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Question
