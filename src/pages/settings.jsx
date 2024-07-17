import { useContext, useEffect, useState } from "react"
import Card from "../components/card"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { useNavigate } from "react-router-dom"
import SubmitBtn from "../components/submitButton"

const Settings = () => {
  const {
    processGetAbout,
    processGetTeam,
    processGetTnc,
    processGetProduct,
    processGetTestimonial,
    processGetHeroBanner,
  } = useContext(SystemInfoApiData)
  const navigate = useNavigate()

  useEffect(() => {
    processGetAbout(1)
    processGetTeam(1)
    processGetTnc(1)
    processGetTestimonial(1)
    processGetHeroBanner(1)
    processGetProduct(1)
  }, [])

  const goToCreateClass = () => {
    navigate("createClass")
  }

  const goToCreateSubject = () => {
    navigate("createSubject")
  }

  return (
    <div className="w-full">
      {/* <div className="flex space-x-4">
        <SubmitBtn text={"Switch Hero"} submit={goToCreateClass} />
        <SubmitBtn text={"Reports"} submit={goToCreateSubject} />
      </div> */}
      <div className="flex mt-2">
        <div className="w-1/4 mx-2">
          <Card title={"About"} link={"/dashboard/editAbout/1/edit"} />
        </div>
        <div className="w-1/4 mx-2">
          <Card title={"Team"} link={"/dashboard/editTeam/1/edit"} />
        </div>
        <div className="w-1/4 mx-2">
          <Card title={"T&C"} link={"/dashboard/editTnc/1/edit"} />
        </div>
        <div className="w-1/4 mx-2">
          <Card title={"Contact"} link={"contact"} />
        </div>
      </div>

      <div className="flex mt-4">
        <div className="w-1/4 mx-2">
          <Card title={"Testimonial"} link={"testimonial"} />
        </div>
        <div className="w-1/4 mx-2">
          <Card title={"Hero Banner"} link={"banner"} />
        </div>
        <div className="w-1/4 mx-2">
          <Card title={"Products"} link={"product"} />
        </div>
        <div className="w-1/4 mx-2">
          {/* <Card title={"Privacy"} link={"comments"} /> */}
        </div>
      </div>
    </div>
  )
}

export default Settings
