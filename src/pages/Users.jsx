import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UserTableContainer from "../components/userTableContainer"

const Users = () => {
  return (
    <>
      <div>
        <UserTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Users
