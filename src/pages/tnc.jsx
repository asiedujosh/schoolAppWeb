import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TncTableContainer from "../components/tncTableContainer"
import LabelBtn from "../components/labelButton"

const Tnc = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Tnc" path="/dashboard/Setting/addTnc" />
        </div>
      </div>
      <div>
        <TncTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Tnc
