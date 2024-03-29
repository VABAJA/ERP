import {  AiOutlineDashboard, AiOutlineBars, AiOutlineFileDone, AiOutlineUser } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import logo from "../assets/RepuraLogoNew 1.svg"

const Sidebar = ({children}) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <AiOutlineDashboard />
    },
    {
      path: "/facturacion",
      name: "Facturacion",
      icon: <AiOutlineFileDone />
    },
    {
      path: "/miCuenta",
      name: "Mi Cuenta",
      icon: <AiOutlineUser />
    }
  ]
  return (
    <>
      <div className="container">
        <div style={{width: isOpen ? '300px' : '50px' }} className="sidebar">
          <div className="top_section">
            <h1 style={{display: isOpen ? 'block' : 'none' }} className="logo"><img src={logo} alt="logo" /></h1>
            <div style={{marginLeft: isOpen ? '50px' : '0px' }}  className="bars"><AiOutlineBars onClick={toggle}/></div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className="icon">{item.icon}</div>
              <div style={{display: isOpen ? 'block' : 'none' }} className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Sidebar
