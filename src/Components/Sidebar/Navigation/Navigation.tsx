import { NavLink } from "react-router-dom"
import overviewIcon from "../../../assets/icons/overview.png"
import tasksIcon from "../../../assets/icons/tasks.png"
import projectsIcon from "../../../assets/icons/projects.png"
import analyticsIcon from "../../../assets/icons/analytics.png"
import settingsIcon from "../../../assets/icons/settings.png"
import "./Navigation.css"

function Navigation(){

    const navigationItems = [
        { id: 1, name: "Overview", icon: overviewIcon, path: "/" },
        { id: 2, name: "Tasks", icon: tasksIcon, path: "/tasks" },
        { id: 3, name: "Projects", icon: projectsIcon, path: "/projects" },
        { id: 4, name: "Analytics", icon: analyticsIcon, path: "/analytics" },
        { id: 5, name: "Settings", icon: settingsIcon, path: "/settings" },
    ]
    return(
        <nav>
            {
                navigationItems.map((item)=>
                    <NavLink className="nav button" key={item.id} to={item.path}>
                        <img src={item.icon} alt={item.name} width={20} height={20}/>
                        {item.name}
                    </NavLink>
                )
            }
        </nav>
    )
}

export default Navigation