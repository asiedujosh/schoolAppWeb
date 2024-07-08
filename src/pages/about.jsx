import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import AboutTableContainer from "../components/aboutTableContainer"

const About = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add About" path="/dashboard/Setting/addAbout" />
        </div>
      </div>
      <div>
        <AboutTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default About
