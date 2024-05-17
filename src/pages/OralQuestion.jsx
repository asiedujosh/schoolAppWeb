import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import OralQuestionTableContainer from "../components/oralQuestionTableContainer"

const OralQuestion = () => {
  return (
    <>
      <div>
        <OralQuestionTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default OralQuestion
