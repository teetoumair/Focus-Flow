import { useState } from "react"
import Actions from "./Actions/Actions"
import SearchBar from "./SearchBar/SearchBar"
import UserProfile from "./UserProfile/UserProfile"
import "./Navbar.css"

function Navbar(){

    const [search, setSearch] = useState<string>("")
    
    return(
        <header className="Navbar">
            <div className="Left">
                <SearchBar
                search={search}
                setSearch={setSearch}/>
            </div>
            <div className="Right">
                <Actions/>
                <UserProfile/>
            </div>
        </header>
    )
}

export default Navbar