import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import LabelBtn from "../components/labelButton"
import ProductTableContainer from "../components/productTableContainer"

const Product = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Product" path="/dashboard/Setting/addProduct" />
        </div>
      </div>
      <div>
        <ProductTableContainer />
      </div>
      <ToastContainer />
    </>
  )
}

export default Product
