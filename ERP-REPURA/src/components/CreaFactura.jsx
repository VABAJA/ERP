import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"

const CreaFactura = () => {
    return (
        <>


            <div className="gContainer">

                <Link link to='/CreaFactura'>
                    <div className="widgets">

                        <h4>Crea una Nueva Factura</h4>
                    </div>
                </Link>
            </div>
            {/* <NuevoCliente /> */}

        </>
    )
}

export default CreaFactura
