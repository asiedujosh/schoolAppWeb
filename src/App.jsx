import React, { useEffect, useContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Login from "./pages/login"
import "./App.css"

// Lazy load components using dynamic import()
const AddPackage = React.lazy(() => import("./pages/addPackage"))
const AddMessage = React.lazy(() => import("./pages/addMessage"))
const Message = React.lazy(() => import("./pages/message"))
const ComingSoon = React.lazy(() => import("./pages/comingSoon"))
const EditPackage = React.lazy(() => import("./pages/editPackage"))
const Package = React.lazy(() => import("./pages/Package"))
const Price = React.lazy(() => import("./pages/price"))
const Subscriber = React.lazy(() => import("./pages/subscriber"))
const Priviledge = React.lazy(() => import("./pages/priviledge"))
const AddExams = React.lazy(() => import("./pages/addExam"))
const AddYear = React.lazy(() => import("./pages/addYear"))
const AddSubject = React.lazy(() => import("./pages/addSubject"))
const AddPriviledge = React.lazy(() => import("./pages/addPriviledge"))
const AddQuestion = React.lazy(() => import("./pages/addQuestion"))
const AddDuration = React.lazy(() => import("./pages/addDuration"))
const AddPrice = React.lazy(() => import("./pages/addPrice"))
const AddSlider = React.lazy(() => import("./pages/addSlider"))
const AddOralQuestion = React.lazy(() => import("./pages/addOralQuestion"))
const EditOralQuestion = React.lazy(() => import("./pages/editOralQuestion"))
const AddNews = React.lazy(() => import("./pages/addNews"))
const Duration = React.lazy(() => import("./pages/duration"))
const Exam = React.lazy(() => import("./pages/Exam"))
const EditExam = React.lazy(() => import("./pages/editExam"))
const EditLink = React.lazy(() => import("./pages/editLink"))
const EditStaff = React.lazy(() => import("./pages/editStaff"))
const EditTopic = React.lazy(() => import("./pages/editTopic"))
const EditDuration = React.lazy(() => import("./pages/editDuration"))
const EditPriviledge = React.lazy(() => import("./pages/editPriviledge"))
const EditPrice = React.lazy(() => import("./pages/editPrice"))
const Staff = React.lazy(() => import("./pages/Staff"))
const Slider = React.lazy(() => import("./pages/slider"))
const Users = React.lazy(() => import("./pages/Users"))
const AddStaff = React.lazy(() => import("./pages/addStaff"))
const EditQuestion = React.lazy(() => import("./pages/editQuestion"))
const ViewExam = React.lazy(() => import("./pages/viewExam"))
const Question = React.lazy(() => import("./pages/Question"))
const OralQuestion = React.lazy(() => import("./pages/OralQuestion"))
const Subject = React.lazy(() => import("./pages/Subject"))
const EditSubject = React.lazy(() => import("./pages/editSubject"))
const Year = React.lazy(() => import("./pages/Year"))
const EditYear = React.lazy(() => import("./pages/editYear"))
const Topic = React.lazy(() => import("./pages/Topic"))
const News = React.lazy(() => import("./pages/news"))
const EditNews = React.lazy(() => import("./pages/editNews"))
const AddLink = React.lazy(() => import("./pages/addLink"))
const ExamSubjectLink = React.lazy(() => import("./pages/ExamSubjectLink"))
const Setting = React.lazy(() => import("./pages/settings"))

//Pages
const About = React.lazy(() => import("./pages/about"))
const Team = React.lazy(() => import("./pages/team"))
const Tnc = React.lazy(() => import("./pages/tnc"))
const Contact = React.lazy(() => import("./pages/contact"))
const Testimonial = React.lazy(() => import("./pages/testimonial"))
const Banner = React.lazy(() => import("./pages/banner"))
const Product = React.lazy(() => import("./pages/products"))

const AddAbout = React.lazy(() => import("./pages/addAbout"))
const AddTeam = React.lazy(() => import("./pages/addTeam"))
const AddTnc = React.lazy(() => import("./pages/addTnc"))
const AddContact = React.lazy(() => import("./pages/addContact"))
const AddTestimony = React.lazy(() => import("./pages/addTestimony"))
const AddBanner = React.lazy(() => import("./pages/addBanner"))
const AddProduct = React.lazy(() => import("./pages/addProduct"))

const EditAbout = React.lazy(() => import("./pages/editAbout"))
const EditTeam = React.lazy(() => import("./pages/editTeam"))
const EditTnc = React.lazy(() => import("./pages/editTnc"))
const EditContact = React.lazy(() => import("./pages/editContact"))
const EditTestimonial = React.lazy(() => import("./pages/editTestimonial"))
const EditBanner = React.lazy(() => import("./pages/editBanner"))
const EditProduct = React.lazy(() => import("./pages/editProduct"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route
            path="addExams"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddExams />
              </React.Suspense>
            }
          />
          <Route
            path="addStaff"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddStaff />
              </React.Suspense>
            }
          />
          <Route
            path="addSubject"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddSubject />
              </React.Suspense>
            }
          />
          <Route
            path="addYear"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddYear />
              </React.Suspense>
            }
          />
          <Route
            path="addDuration"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddDuration />
              </React.Suspense>
            }
          />
          <Route
            path="addMessage"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddMessage />
              </React.Suspense>
            }
          />
          <Route
            path="addPrice"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddPrice />
              </React.Suspense>
            }
          />
          <Route
            path="addPackage"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddPackage />
              </React.Suspense>
            }
          />
          <Route
            path="addPriviledge"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddPriviledge />
              </React.Suspense>
            }
          />
          <Route
            path="addQuestion"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="addSlider"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddSlider />
              </React.Suspense>
            }
          />
          <Route
            path="addOralQuestion"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddOralQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="Exam"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Exam />
              </React.Suspense>
            }
          />

          <Route
            path="Notification"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Message />
              </React.Suspense>
            }
          />

          <Route
            path="Users"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Users />
              </React.Suspense>
            }
          />
          <Route
            path="Duration"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Duration />
              </React.Suspense>
            }
          />
          <Route
            path="Price"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Price />
              </React.Suspense>
            }
          />
          <Route
            path="Priviledge"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Priviledge />
              </React.Suspense>
            }
          />
          <Route
            path="Staff"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Staff />
              </React.Suspense>
            }
          />
          <Route
            path="Setting"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Setting />
              </React.Suspense>
            }
          />
          <Route
            path="Question"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Question />
              </React.Suspense>
            }
          />
          <Route
            path="oralQuestion"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <OralQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="Subject"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Subject />
              </React.Suspense>
            }
          />
          <Route
            path="Slider"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Slider />
              </React.Suspense>
            }
          />
          <Route
            path="Package"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Package />
              </React.Suspense>
            }
          />
          <Route
            path="Subscriber"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Subscriber />
              </React.Suspense>
            }
          />
          <Route
            path="editPackage/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditPackage />
              </React.Suspense>
            }
          />
          <Route
            path="editSubject/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditSubject />
              </React.Suspense>
            }
          />
          <Route
            path="editPriviledge/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditPriviledge />
              </React.Suspense>
            }
          />
          <Route
            path="editLink/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditLink />
              </React.Suspense>
            }
          />
          <Route
            path="editTopic/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditTopic />
              </React.Suspense>
            }
          />
          <Route
            path="editDuration/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditDuration />
              </React.Suspense>
            }
          />
          <Route
            path="Year"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Year />
              </React.Suspense>
            }
          />
          <Route
            path="editYear/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditYear />
              </React.Suspense>
            }
          />
          <Route
            path="topic"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Topic />
              </React.Suspense>
            }
          />
          <Route
            path="editExam/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditExam />
              </React.Suspense>
            }
          />
          <Route
            path="editStaff/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditStaff />
              </React.Suspense>
            }
          />
          <Route
            path="editQuestion/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="editPrice/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditPrice />
              </React.Suspense>
            }
          />
          <Route
            path="editOralQuestion/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditOralQuestion />
              </React.Suspense>
            }
          />
          <Route
            path="viewExam"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ViewExam />
              </React.Suspense>
            }
          />
          <Route
            path="News"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <News />
              </React.Suspense>
            }
          />
          <Route
            path="addNews"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddNews />
              </React.Suspense>
            }
          />
          <Route
            path="editNews/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditNews />
              </React.Suspense>
            }
          />
          <Route
            path="examSubjectLinkTable"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ExamSubjectLink />
              </React.Suspense>
            }
          />
          <Route
            path="addLink"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddLink />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/about"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <About />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/team"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Team />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/tnc"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Tnc />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/contact"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/testimonial"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Testimonial />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/banner"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Banner />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/product"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Product />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addAbout"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddAbout />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addTeam"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddTeam />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addTnc"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddTnc />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addContact"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddContact />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addTestimony"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddTestimony />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addBanner"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddBanner />
              </React.Suspense>
            }
          />

          <Route
            path="Setting/addProduct"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddProduct />
              </React.Suspense>
            }
          />

          <Route
            path="editAbout/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditAbout />
              </React.Suspense>
            }
          />

          <Route
            path="editTeam/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditTeam />
              </React.Suspense>
            }
          />

          <Route
            path="editTnc/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditTnc />
              </React.Suspense>
            }
          />

          <Route
            path="editContact/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditContact />
              </React.Suspense>
            }
          />

          <Route
            path="editTestimonial/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditTestimonial />
              </React.Suspense>
            }
          />

          <Route
            path="editBanner/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditBanner />
              </React.Suspense>
            }
          />

          <Route
            path="editProduct/:id/edit"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <EditProduct />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
