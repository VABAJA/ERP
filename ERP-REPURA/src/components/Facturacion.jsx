// import NuevoCliente from '../components/forms/NuevoCliente'
import Sidebar from './Sidebar'
import PorTimbrar from "../components/PorTimbrar"
import CreaFactura from '../components/CreaFactura'

const Facturacion = () => {
  return (
    <>
      <div>
        <div className="mainContainer">

          <div className="containerSideBar">
            <Sidebar />

          </div>
          <div className="gContainer">

            <PorTimbrar />
            <CreaFactura />
          </div>
          {/* <NuevoCliente /> */}
        </div>
      </div>

    </>
  )
}

export default Facturacion
