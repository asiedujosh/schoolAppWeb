/* src/App.jsx */
import React, { useEffect, useContext } from "react"
import { AuthApiData } from "./contextApi/auth/authContextApi"
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

function App() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthApiData)

  // useEffect(() => {
  //   console.log(isAuthenticated)
  //   if (isAuthenticated) <Navigate to="/dashboard" />
  // }, [isAuthenticated])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
