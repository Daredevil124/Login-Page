import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.jsx';
function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
