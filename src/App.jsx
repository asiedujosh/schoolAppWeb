import React, { useEffect, useContext } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Test from "./pages/test"
import Login from "./pages/login"
import "./App.css"

// Lazy load components using dynamic import()
const AddPackage = React.lazy(() => import("./pages/addPackage"))
const EditPackage = React.lazy(() => import("./pages/editPackage"))
const Package = React.lazy(() => import("./pages/Package"))
const Subscriber = React.lazy(() => import("./pages/subscriber"))
const AddExams = React.lazy(() => import("./pages/addExam"))
const AddYear = React.lazy(() => import("./pages/addYear"))
const AddSubject = React.lazy(() => import("./pages/addSubject"))
const AddQuestion = React.lazy(() => import("./pages/addQuestion"))
const AddNews = React.lazy(() => import("./pages/addNews"))
const Exam = React.lazy(() => import("./pages/Exam"))
const EditExam = React.lazy(() => import("./pages/editExam"))
const EditLink = React.lazy(() => import("./pages/editLink"))
const EditStaff = React.lazy(() => import("./pages/editStaff"))
const EditTopic = React.lazy(() => import("./pages/editTopic"))
const Staff = React.lazy(() => import("./pages/Staff"))
const Users = React.lazy(() => import("./pages/Users"))
const AddStaff = React.lazy(() => import("./pages/addStaff"))
const EditQuestion = React.lazy(() => import("./pages/editQuestion"))
const ViewExam = React.lazy(() => import("./pages/viewExam"))
const Question = React.lazy(() => import("./pages/Question"))
const Subject = React.lazy(() => import("./pages/Subject"))
const EditSubject = React.lazy(() => import("./pages/editSubject"))
const Year = React.lazy(() => import("./pages/Year"))
const EditYear = React.lazy(() => import("./pages/editYear"))
const Topic = React.lazy(() => import("./pages/Topic"))
const News = React.lazy(() => import("./pages/news"))
const EditNews = React.lazy(() => import("./pages/editNews"))
const AddLink = React.lazy(() => import("./pages/addLink"))
const ExamSubjectLink = React.lazy(() => import("./pages/ExamSubjectLink"))

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
            path="addPackage"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <AddPackage />
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
            path="Exam"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Exam />
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
            path="Staff"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Staff />
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
            path="Subject"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Subject />
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
        </Route>
      </Routes>
    </Router>
  )
}

export default App
