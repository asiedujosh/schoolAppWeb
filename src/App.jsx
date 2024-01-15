/* src/App.jsx */
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
import AddExams from "./pages/addExam"
import AddYear from "./pages/addYear"
import AddSubject from "./pages/addSubject"
import AddQuestion from "./pages/addQuestion"
import Exam from "./pages/Exam"
import Question from "./pages/Question"
import Subject from "./pages/Subject"
import Year from "./pages/Year"
import Topic from "./pages/Topic"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="addExams" element={<AddExams />} />
          <Route path="addSubject" element={<AddSubject />} />
          <Route path="addYear" element={<AddYear />} />
          <Route path="addQuestion" element={<AddQuestion />} />
          <Route path="Exam" element={<Exam />} />
          <Route path="Question" element={<Question />} />
          <Route path="Subject" element={<Subject />} />
          <Route path="Year" element={<Year />} />
          <Route path="Topic" element={<Topic />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
