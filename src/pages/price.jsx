import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PriceTableContainer from "../components/priceTableContainer"
import LabelBtn from "../components/labelButton"

const Price = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Price" path="/dashboard/addPrice" />
        </div>
      </div>
      <div>
        <PriceTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Price
