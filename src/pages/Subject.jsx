import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SubjectTableContainer from "../components/subjectTableContainer"

const Subject = () => {
  return (
    <>
      <div>
        <SubjectTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Subject
