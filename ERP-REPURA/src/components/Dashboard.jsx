import '../App.css'
import Sidebar from "./Sidebar"
import PorTimbrar from "../components/PorTimbrar"



const Dashboard = () => {
    return (
        <>
        <div className="containerSideBar">
            <Sidebar />
        </div>
        <PorTimbrar />

        </>
    )
}

export default Dashboard
