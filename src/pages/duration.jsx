import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DurationTableContainer from "../components/durationTableContainer"
import LabelBtn from "../components/labelButton"

const Duration = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Duration" path="/dashboard/addDuration" />
        </div>
      </div>
      <div>
        <DurationTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Duration
