import { useState } from "react"
import Sidebar from "./Components/Sidebar/Sidebar"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Projects from "./Components/Dashboard/Pages/Projects/Projects"
import Analytics from "./Components/Dashboard/Pages/Analytics/Analytics"
import Settings from "./Components/Dashboard/Pages/Settings/Settings"
import Overview from "./Components/Dashboard/Pages/Overview/Overview"
import Tasks from "./Components/Dashboard/Pages/Tasks/Tasks"

function App(){

    const [activePage, setActivePage] = useState<string>("Overview")
    return(
        <div className="App">
            <Sidebar setActivePage={setActivePage}/>
            <main>
                <Navbar/>
                <div>
                    {
                        activePage === "Overview" &&
                        <Overview/>
                    }

                    {
                        activePage === "Tasks" &&
                        <Tasks/>
                    }

                    {
                        activePage === "Projects" &&
                        <Projects/>
                    }

                    {
                        activePage === "Analytics" &&
                        <Analytics/>
                    }

                    {
                        activePage === "Settings" &&
                        <Settings/>
                    }
                </div>
            </main>
        </div>
    )
}

export default App