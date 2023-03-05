import { Link } from 'react-router-dom'
import logo from "../assets/RepuraLogoNew 1.svg"

const Sidebar = () => {
  return (
    <>
      <div className="containerSideBar">
        <div className="logo">
          <img src={logo} alt="LogoRepura" />

        </div>
        <div className="contList">

          <ul>
            <li><Link link to="/dashboard">Inicio</Link></li>
            <li><Link link to="/facturacion">Facturación </Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
