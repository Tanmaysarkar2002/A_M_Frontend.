import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App