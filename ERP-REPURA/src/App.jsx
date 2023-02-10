
import { useState } from 'react'
import Sidebar from "./components/sidebar/Sidebar"
import NuevoCliente from "./components/forms/NuevoCliente"


function App() {

  const [nuevoCliente, setNuevoCliente] = useState([]);

  return (
    <>
      <div className="mainContainer">

        <Sidebar />
        <NuevoCliente
          nuevoCliente={nuevoCliente}
          setNuevoCliente={setNuevoCliente}
        />

      </div>
    </>
  )
}

export default App
