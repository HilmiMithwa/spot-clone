import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from '../pages/login/Login'
import MainDashboard from '../pages/main_dashboard/MainDashboard'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<MainDashboard />} />
      </Routes>
    </Router>
  )
}
