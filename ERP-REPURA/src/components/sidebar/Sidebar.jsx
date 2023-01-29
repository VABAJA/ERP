import "./sidebar.css";
import logo from "../../assets/RepuraLogoNew 1.svg"

const Sidebar = () => {
  return (
    <>
      <div className="containerSideBar">
        <div className="logo">
          <img src={logo} alt="LogoRepura" />

        </div>
        <div className="contList">

          <ul>
            <li className="text-indigo-100">Facturación</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
