import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import ContactTableContainer from "../components/contactTableContainer"

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Contact" path="/dashboard/Setting/addContact" />
        </div>
      </div>
      <div>
        <ContactTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Contact
