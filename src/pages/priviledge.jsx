import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import PriviledgeTableContainer from "../components/priviledgeTableContainer"

const Priviledge = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn
            text="Add Priviledged Username"
            path="/dashboard/addPriviledge"
          />
        </div>
      </div>
      <div>
        <PriviledgeTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Priviledge
