
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import NuevoCliente from './components/forms/NuevoCliente'


function App() {

  const [nuevoCliente, setNuevoCliente] = useState([]);

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Dashboard />}>
          <div className="mainContainer">
            <Route path="/dashboard" element={<Dashboard />} />
          </div>
        </Route>
      </Routes>

      <Sidebar />
      <NuevoCliente
        nuevoCliente={nuevoCliente}
        setNuevoCliente={setNuevoCliente}
      /> */}


    </>
  )
}

export default App
