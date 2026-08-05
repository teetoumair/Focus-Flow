import Logo from "./LogoArea/Logo"
import Navigation from "./Navigation/Navigation"
import "./Sidebar.css"
import SidebarFooter from "./SidebarFooter/SidebarFooter"

interface SidebarProps{
    setActivePage: (page: string)=>void;
}

function Sidebar({setActivePage}:SidebarProps){
    return(
        <aside className="Sidebar">
            <Logo/>
            <Navigation setActivePage={setActivePage}/>
            <SidebarFooter/>
        </aside>
    )
}

export default Sidebar