
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './components/sidebar/Sidebar'

function App() {


  return (
    <>
      <div className="mainContainer">

        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/facturacion" />
        </Routes>
      </div>

    </>
  )
}



export default App
