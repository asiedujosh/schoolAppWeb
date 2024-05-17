import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TopicTableContainer from "../components/topicTableContainer"

const Topic = () => {
  return (
    <>
      <div>
        <TopicTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Topic
