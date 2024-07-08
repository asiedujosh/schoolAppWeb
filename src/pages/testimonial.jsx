import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import TestimonialTableContainer from "../components/testimonialTableContainer"

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn
            text="Add Testimonial"
            path="/dashboard/Setting/addTestimony"
          />
        </div>
      </div>
      <div>
        <TestimonialTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Testimonial
