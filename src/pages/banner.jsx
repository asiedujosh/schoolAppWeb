import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import HeroBannerTableContainer from "../components/heroBannerTableContainer"

const Banner = () => {
  return (
    <>
      <div>
        <HeroBannerTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Banner
