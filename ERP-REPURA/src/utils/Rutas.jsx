import { Routes, Route } from 'react-router-dom'
// import Login from '../components/Login'

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </>
  )
}

export default Rutas
