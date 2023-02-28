import "./forms.css";

const NuevoCliente = ({ nuevoCliente, setNuevoCliente }) => {
  const [nombre, setNombre] = useState('');
  const [rfc, setRFC] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [direccion, setDireccion] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contacto, setContacto] = useState('');

  const [error, setError] = useState(false)


  //Validación del Formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, rfc, razonSocial, direccion, correo, telefono, contacto].includes('')) {
      console.log('hay al menos un campo vacio')

      setError(true)
      return;
    }
    setError(false);

    //Objeto de Cliente
    const objetoCliente = {
      nombre,
      rfc,
      razonSocial,
      direccion,
      correo,
      telefono,
      contacto
    }

    // console.log(objetoCliente)

    setNuevoCliente([...nuevoCliente, objetoCliente])

    //Reiniciar el formulario
    setNombre('')
    setRFC('')
    setRazonSocial('')
    setDireccion('')
    setCorreo('')
    setTelefono('')
    setContacto('')

  }

  return (
    <>

      <div className="contForm">
        <h1 className="text-indigo-800 mt-2 p-2">Creación de Nuevo Cliente</h1>

        <form action="#"
          onSubmit={handleSubmit}
          className="mb-3"
        >
          {error &&
            (<div className="bg-red-800 text-white text-center p-3 uppercase font-boldm mb-3 rounded">
              <p>Todos los campos son Obligatorios</p>
            </div>)}

          <div className="campos">
            <label htmlFor="nombre">Nombre del Cliente</label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre del Cliente"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="campos">
            <label htmlFor="razonSocial">RFC</label>
            <input
              id="rfc"
              type="text"
              placeholder="RFC"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={rfc}
              onChange={(e) => setRFC(e.target.value)} />
          </div>

          <div className="campos">
            <label htmlFor="razonSocial">Razón Social</label>
            <input
              id="razonSocial"
              type="text"
              placeholder="Razón Social"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={razonSocial}
              onChange={(e) => setRazonSocial(e.target.value)} />
          </div>

          <div className="campos">
            <label htmlFor="direccion">Dirección</label>
            <input
              id="direccion"
              type="string"
              placeholder="Dirección"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)} />
          </div>

          <div className="campos">
            <label htmlFor="correo">Correo del Contacto</label>
            <input
              id="correo"
              type="string"
              placeholder="Correo del Contacto"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)} />
          </div>

          <div className="campos">
            <label htmlFor="telefono">Teléfono de Contacto</label>
            <input
              id="telefono"
              type="string"
              placeholder="Teléfono de Contacto"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)} />
          </div>

          <div className="campos">
            <label htmlFor="contacto">Nombre de Contacto</label>
            <input
              id="contacto"
              type="text"
              placeholder="Nombre de Contacto"
              className="border-2 w-9/12 p-2 mt-2 placeholder-gray-400 rounded-md"
              value={contacto}
              onChange={(e) => setContacto(e.target.value)} />
          </div>

          <div className="input">
            <input type="submit"
              className=".btn bg-indigo-600 p-3 w-10/12 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
              value="Crear Cliente"
            />
          </div>
        </form >
      </div >
    </>
  )
}

export default NuevoCliente