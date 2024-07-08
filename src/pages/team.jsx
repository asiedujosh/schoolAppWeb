import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import TeamTableContainer from "../components/teamTableContainer"

const Team = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Team" path="/dashboard/Setting/addTeam" />
        </div>
      </div>
      <div>
        <TeamTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Team
