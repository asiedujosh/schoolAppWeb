import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import YearTableContainer from "../components/yearTableContainer"

const Year = () => {
  return (
    <>
      <div>
        <YearTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Year
