import Sidebar from "../components/Sidebar"
import { Facturas } from "../components/Facturas"

const Facturacion = () => {
  return (
    <>
      <div className="mainContainer">
        <Sidebar />
        <div className="containerFacturas">
          <Facturas 
          status="Pendientes"
          cuenta="10"  />

          <Facturas 
          status="Timbradas"
          cuenta = "5" />


        </div>
      </div>
    </>
  )
}

export default Facturacion
