
const Facturas = ({ status, cuenta }) => {
  return (
    <>
      <div className="Facturas" >
        {status === "Pendientes" ? <p> Facturas Pendientes de Timbrar</p> : <p>Facturas Timbradas</p>}
        {cuenta && <p>{cuenta}</p>}


      </div>
    </>
  )

}




export { Facturas };
