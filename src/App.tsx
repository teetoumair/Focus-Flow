import { useState } from "react"
import Sidebar from "./Components/Sidebar/Sidebar"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Projects from "./Pages/Projects/Projects"
import Analytics from "./Pages/Analytics/Analytics"
import Settings from "./Pages/Settings/Settings"
import Overview from "./Pages/Overview/Overview"
import Tasks from "./Pages/Tasks/Tasks"

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