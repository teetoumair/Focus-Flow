import { useState } from "react"
import Sidebar from "./Components/Sidebar/Sidebar"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Projects from "./Pages/Projects"
import Analytics from "./Pages/Analytics"
import Settings from "./Pages/Settings"
import Overview from "./Pages/Overview"
import Tasks from "./Pages/Tasks"

function App(){

    const [activePage, setActivePage] = useState<string>("")
    return(
        <div className="App">
            <Sidebar/>
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