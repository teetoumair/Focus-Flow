import Sidebar from "./Components/Sidebar/Sidebar"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"

function App(){

    return(
        <div className="App">
            <Sidebar/>
            <main>
                <Navbar/>
            </main>
        </div>
    )
}

export default App