import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Facturacion from './pages/Facturacion'
import Nuevafactura from './pages/Nuevafactura'
import Nuevocliente from './pages/Nuevocliente'

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
    path: '/nuevafactura',
    element: <Nuevafactura />,
  },
  {
    path: '/nuevocliente',
    element: <Nuevocliente />,
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
