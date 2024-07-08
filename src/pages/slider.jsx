import SliderTableContainer from "../components/sliderTableContainer"
import LabelBtn from "../components/labelButton"

const Slider = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <LabelBtn text="Add Slider" path="/dashboard/addSlider" />
        </div>
      </div>
      <div>
        <SliderTableContainer />
      </div>
    </>
  )
}

export default Slider
