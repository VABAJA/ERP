import "./form.css";

const Form = () => {
  return (
    

    <div className="contForm">
      {/* <h1 className="text-indigo-800">Creación de Nuevo Cliente</h1> */}
      <form action="">
        <div className="inputs">
          <label >Nombre del Cliente</label>
          <input type="text"
            placeholder="Nombre del Cliente" />
        </div>
        <div className="inputs">
          <label >Razón Social</label>
          <input type="text"
            placeholder="Razón Social" />
        </div>
        <div className="inputs">
          <label>Dirección</label>
          <input type="string"
            placeholder="Dirección" />
        </div>
        <div className="inputs">
          <label>Teléfono de Contacto</label>
          <input type="string"
            placeholder="Teléfono de Contacto" />
        </div>
        <div className="inputs">
          <label>Nombre de Contacto</label>
          <input type="text"
            placeholder="Nombre de Contacto" />
            </div>




      </form >


    </div >
  )
}

export default Form