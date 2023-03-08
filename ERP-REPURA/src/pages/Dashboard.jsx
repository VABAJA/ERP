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
                <div className="modal__body">

                    <h1>¿El Cliente ya está registrado?</h1>
                </div>
                <div className="modal__footer">
                    <i><svg xmlns="http://www.w3.org/2000/svg" className="icon icons icon-tabler icon-tabler-circle-check" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7bc62d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 12l2 2l4 -4" />
                    </svg></i>
                    <i><svg xmlns="http://www.w3.org/2000/svg" className="icon icons icon-tabler icon-tabler-ban" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
                    </svg></i>
                </div>
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
