import Form from "./components/Form"
import Sidebar from "./components/sidebar/Sidebar"


function App() {

  return (
    <>
      <div className="container">
        <Sidebar />
        <Form />
        <h1 className="text-red-600">Hola Mundo</h1>
      </div>
    </>
  )
}

export default App
