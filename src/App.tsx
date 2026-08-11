
import Login from "./Components/Dashboard/Pages/Login/Login"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Projects from "./Components/Dashboard/Pages/Projects/Projects"
import Analytics from "./Components/Dashboard/Pages/Analytics/Analytics"
import Settings from "./Components/Dashboard/Pages/Settings/Settings"
import Overview from "./Components/Dashboard/Pages/Overview/Overview"
import Tasks from "./Components/Dashboard/Pages/Tasks/Tasks"
import DashboardLayout from "./Components/Dashboard/DashboardLayout/DashboardLayout"

function App(){
    return(
        <Routes>
            <Route path="/login" element = {<Login/>} />
            <Route element={<DashboardLayout/>}>
                <Route path="/" element={<Overview/>}/>
                <Route path="/tasks" element={<Tasks/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/analytics" element={<Analytics/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Route>
        </Routes>
    )
}

export default App