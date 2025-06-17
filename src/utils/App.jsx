import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/Login.jsx';
import MainDashboard from '../pages/main_dashboard/MainDashboard.jsx';
import Footer from '../UI/footer.jsx';
import Header from '../UI/Header.jsx';
import BackButton from '../button/BackButton.jsx';


export default function App() {
  return (
    <>
      <BackButton />
    </>
  )
}