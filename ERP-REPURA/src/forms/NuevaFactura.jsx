import { useState } from "react";


const NuevaFactura = ({ nuevaFactura, setNuevaFactura }) => {
    const [buscaCliente, setbuscaCliente] = useState('');
    const [numeroCliente, setnumeroCliente] = useState('');
    const [nombreCliente, setnombreCliente] = useState('');
    const [razonSocial, setrazonSocial] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contacto, setContacto] = useState('');
    const [producto, setProducto] = useState('');

    const [error, setError] = useState(false)

    //Validacion del Formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // if ([numeroCliente, nombreCliente, razonSocial, direccion, telefono, contacto].includes('')) {
        //     console.log('Hay al menos un campo vacio')
        if ([buscaCliente].includes('')) {
            console.log('El campo de busqueda esta vacio')

            setError(true)
            return;
        }

        // console.log(objetoFactura)

        setNuevaFactura([...nuevaFactura, objetoFactura])
        //reiniciar el formulario
        setbuscaCliente('')
        setnumeroCliente('')
        setnombreCliente('')
        setrazonSocial('')
        setDireccion('')
        setTelefono('')
        setContacto('')
        setProducto('')
    }

    //Objeto de factura
    const objetoFactura = {
        buscaCliente,
        numeroCliente,
        nombreCliente,
        razonSocial,
        direccion,
        telefono,
        contacto,
        producto
    }
    return (
        <div className="contForm">
            <h3>Creacion de Nueva Factura</h3>
            <form action="#"
                onSubmit={handleSubmit}
                className="mb-3"
            >
                {error &&
                    (<div className="bg-red-800 text-white text-center p-3 uppercase font-boldm mb-3 rounded">
                        <p>Debes ingresar el nombre del Cliente</p>
                    </div>)}

                <div className="campos">
                    <label htmlFor="buscaCliente">Busqueda de Cliente</label>
                    <input
                        id="buscaCliente"
                        type="text"
                        placeholder="Busqueda del Cliente"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={buscaCliente}
                        onChange={(e) => setbuscaCliente(e.target.value)}
                    />
                    <span><i><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg></i></span>
                </div>
                <div className="campos">
                    <label htmlFor="numeroCliente">Numero del Cliente</label>
                    <input
                        id="numeroCliente"
                        type="text"
                        placeholder="Numero del Cliente"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={numeroCliente}
                        onChange={(e) => setnumeroCliente(e.target.value)}
                        disabled />
                </div>

                <div className="campos">
                    <label htmlFor="nombreCliente">Nombre del Cliente</label>
                    <input
                        id="nombreCliente"
                        type="text"
                        placeholder="nombreCliente"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreCliente}
                        onChange={(e) => setnombreCliente(e.target.value)}
                        disabled />
                </div>

                <div className="campos">
                    <label htmlFor="razonSocial">Razón Social</label>
                    <input
                        id="razonSocial"
                        type="text"
                        placeholder="Razón Social"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={razonSocial}
                        onChange={(e) => setrazonSocial(e.target.value)}
                        disabled />
                </div>

                <div className="campos">
                    <label htmlFor="direccion">Dirección</label>
                    <input
                        id="direccion"
                        type="string"
                        placeholder="Dirección"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        disabled />
                </div>

                <div className="campos">
                    <label htmlFor="telefono">Correo del Contacto</label>
                    <input
                        id="telefono"
                        type="string"
                        placeholder="Correo del Contacto"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        disabled />
                </div>

                <div className="campos">
                    <label htmlFor="telefono">Teléfono de Contacto</label>
                    <input
                        id="telefono"
                        type="string"
                        placeholder="Teléfono de Contacto"
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={telefono}
                        onChange={(e) => setContacto(e.target.value)}
                        disabled />
                </div>

                <h2>Productos a Facturar</h2>

                <div className="campos">
                    <label htmlFor="producto">Producto</label>
                    <select value={producto}
                        onChange={(e) => setProducto(e.target.value)}
                        className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md">
                        <option value='Botellon Solo Liquido'>Botellon Solo Liquido</option>
                        <option value='Botellon a como Dato'>Botellon a como Dato</option>
                        <option value='Botellon como agua desmineralizada'>Botellon como agua desmineralizada</option>
                        <option value='Reposicion de Botellon'>Reposicion de Botellon</option>
                        <option value='Botellitas Caja 1/2 L'>Botellitas caja 1/2 L</option>
                        <option value='Botellitas Caja 1 L'>Botellitas Caja 1 L</option>
                        <option value='Botellitas Cada 1 1/2 L'>Botellitas Cada 1 1/2 L</option>
                        <option value='Botellitas Cada 5 L'>Botellitas Cada 5 L</option>
                        <option value='Estante a como Dato 10 B'>Estante a como Dato 10 B</option>
                        <option value='Estante a como Dato 20 B'>Estante a como Dato 20 B</option>
                        <option value='Estante a como Dato 40 B'>Estante a como Dato 40 B</option>
                        <option value='Agua Desmineralizada a Granel'>Agua Desmineralizada a Granel</option>
                        <option value='Otros'>Otros</option>
                    </select>
                </div>

                <div className="input">
                    <input type="submit"
                        className=".btn bg-indigo-600 p-3 w-10/12 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                        value="Buscar Cliente"
                    />
                </div>
            </form >
        </div>
    )
}


export default NuevaFactura
