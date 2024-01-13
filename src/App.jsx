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
import "./App.css"
import AddSubject from "./pages/addSubject"
import AddQuestion from "./pages/addQuestion"

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
        </Route>
      </Routes>
    </Router>
  )
}

export default App
