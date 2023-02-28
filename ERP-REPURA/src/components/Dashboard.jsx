import '../App.css'
import Sidebar from "./Sidebar"
import PorTimbrar from "../components/PorTimbrar"



const Dashboard = () => {
    return (
        <>
            <div className="mainContainer">

                <div className="containerSideBar">
                    <Sidebar />
                </div>
                <PorTimbrar />

            </div>
        </>
    )
}

export default Dashboard
