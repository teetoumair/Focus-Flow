import { Outlet, Navigate } from "react-router-dom"
import { useUser } from "../../Contexts/UserContext"
import Sidebar from "../../Sidebar/Sidebar"
import Navbar from "../../Navbar/Navbar"

function DashboardLayout(){

    const {user} = useUser()

    if (!user) return <Navigate to="/login" replace/>

    return(
        <div className="App">
            <Sidebar/>
            <main>
                <Navbar/>
                <Outlet/>
            </main>
        </div>
    )
}

export default DashboardLayout