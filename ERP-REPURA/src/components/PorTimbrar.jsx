import { Link } from 'react-router-dom'

const porTimbrar = () => {
    return (
        <>
            <Link link to='/pendientes'>
                <div className="widgets__content">

                    <h4>Facturas Por Timbrar</h4>
                    <p>8</p>
                </div>


            </Link>
        </>
    )
}

export default porTimbrar
