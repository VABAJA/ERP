const NuevaFactura = () => {
    return (
        <div>
            <div className="contForm">
                <h3>Productos a Facturar</h3>
                <form action="#"
                    onSubmit={handleSubmit}
                    className="mb-3">
                    {error &&
                        (<div className="bg-red-800 text-white text-center p-3 uppercase font-boldm mb-3 rounded">
                            <p>Todos los campos son Obligatorios</p>
                        </div>)}

                    <div className="campos">
                        <label htmlFor="nombre">Producto</label>
                        <input
                            id="nombre"
                            type="text"
                            placeholder="Nombre del Cliente"
                            className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>

                    <div className="campos">
                        <label htmlFor="razonSocial">Cantidad</label>
                        <input
                            id="rfc"
                            type="text"
                            placeholder="RFC"
                            className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={rfc}
                            onChange={(e) => setRFC(e.target.value)} />
                    </div>

                    <div className="input">
                        <input type="submit"
                            className=".btn bg-indigo-600 p-3 w-10/12 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                            value="Crear Cliente"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NuevaFactura
