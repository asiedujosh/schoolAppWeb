import MessageTableContainer from "../components/messageTableContainer"
import LabelBtn from "../components/labelButton"

const Message = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Message" path="/dashboard/addMessage" />
        </div>
      </div>
      <div>
        <MessageTableContainer />
      </div>
    </>
  )
}

export default Message
