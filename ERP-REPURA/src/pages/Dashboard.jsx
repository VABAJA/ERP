import { useState } from 'react'
import '../App.css'
import Sidebar from "../components/Sidebar"
import PorTimbrar from '../components/PorTimbrar'
// import CreaFactura from '../components/CreaFactura'
import Modal from '../components/Modal'




const Dashboard = () => {
    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    return (
        <>
            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}>
                <h1>Contenido desde Children</h1>
            </Modal>
            <div className="mainContainer">
                <Sidebar />
                <div className="gContainer">

                    <div className="widgets">
                        <PorTimbrar />
                    </div>
                    <div className="widgets">
                        <div className="widgets__content">
                            <button onClick={() => cambiarEstadoModal1(!estadoModal1)}>Crea Nueva Factura </button>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard
