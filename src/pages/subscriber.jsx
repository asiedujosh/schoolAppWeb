import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SubscriberTableContainer from "../components/subscriberTableContainer"

const Subscriber = () => {
  return (
    <>
      <div>
        <SubscriberTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Subscriber
