import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Facturacion from './pages/Facturacion'
import Pendientes from './components/Pendientes'
import CreaFactura from './components/CreaFactura'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/facturacion',
    element: <Facturacion />,
  },
  {
    path: '/pendientes',
    element: <Pendientes />,
  },
  {
    path: '/CreaFactura',
    element: <CreaFactura />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
