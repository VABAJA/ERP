import { Link } from "react-router-dom"

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
        </>
    )
}

export default CreaFactura
