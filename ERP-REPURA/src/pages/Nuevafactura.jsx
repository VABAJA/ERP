import Sidebar from "../components/Sidebar"
import NuevaFactura from "../forms/NuevaFactura"

const Nuevafactura = () => {
    return (
        <>
            <div className="mainContainer">
                <Sidebar />
                <div className="gContainer">
                    <NuevaFactura />|
                </div>
            </div>

        </>
    )
}

export default Nuevafactura
