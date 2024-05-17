import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import StaffTableContainer from "../components/staffTableContainer"

const Staff = () => {
  return (
    <>
      <div>
        <StaffTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Staff
