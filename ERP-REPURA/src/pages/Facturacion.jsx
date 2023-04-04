import Sidebar from "../components/Sidebar"
import Pendientes from "../components/Pendientes"

const Facturacion = () => {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="gContainer">
          <Pendientes />


        </div>
      </div>
    </>
  )
}

export default Facturacion
