import Logo from "./LogoArea/Logo"
import Navigation from "./Navigation/Navigation"
import "./Sidebar.css"
import SidebarFooter from "./SidebarFooter/SidebarFooter"
 

function Sidebar(){
    return(
        <aside className="Sidebar">
            <Logo/>
            <Navigation/>
            <SidebarFooter/>
        </aside>
    )
}

export default Sidebar