import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './util/ProtectedRoutes'
// import '../src/App.css'
import Dashboard from './components/Dashboard'
import Facturacion from './components/Facturacion'
import Login from './components/Login'

function App() {
  return (
    <>
      <div className='mainContainer'>

        <Routes>

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Login />} />

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/facturacion" element={<Facturacion />} />
          </Route>
        </Routes>
        {/* </div> */}
      </div>

    </>
  )
}



export default App
