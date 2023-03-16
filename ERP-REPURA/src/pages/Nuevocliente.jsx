import Sidebar from "../components/Sidebar"
import NuevoCliente from "../forms/NuevoCliente"

const Nuevocliente = () => {
    return (
        <>
            <div className="mainContainer">
                <Sidebar />
                <div className="gContainer">
                    <NuevoCliente />|
                </div>
            </div>

        </>
    )
}

export default Nuevocliente
