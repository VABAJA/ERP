import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './util/ProtectedRoutes'
import Dashboard from './components/Dashboard'
import Facturacion from './components/Facturacion'
import Login from './components/Login'

function App() {
  return (
    <>

      <Routes>
        {/* <div className='mainContainer'> */}

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/facturacion" element={<Facturacion />} />
          </Route>
        {/* </div> */}
      </Routes>

    </>
  )
}



export default App
