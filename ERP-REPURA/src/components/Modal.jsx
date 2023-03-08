
const Modal = ({ children, estado, cambiarEstado }) => {
    return (
        <>
            {estado &&
                <div className="overlay">
                    <div className="modal">
                        <div className="modal__heading">
                        </div>
                        <i onClick={() => cambiarEstado(false)} className="modal__cerrar"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-x" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg></i>

                        <div className="modal__body">

                            <h1>¿El Cliente ya está registrado?</h1>
                        </div>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal
