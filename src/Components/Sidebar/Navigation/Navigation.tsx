import overviewIcon from "../../../assets/icons/overview.png"
import tasksIcon from "../../../assets/icons/tasks.png"
import projectsIcon from "../../../assets/icons/projects.png"
import analyticsIcon from "../../../assets/icons/analytics.png"
import settingsIcon from "../../../assets/icons/settings.png"
import "./Navigation.css"

interface NavigationProps{
    setActivePage : (page:string) =>void;
}

function Navigation({setActivePage}:NavigationProps){

    const navigationItems = [
        {
            id: 1,
            name: "Overview",
            icon: overviewIcon
        },
        {
            id: 2,
            name: "Tasks",
            icon: tasksIcon
        },
        {
            id: 3,
            name: "Projects",
            icon: projectsIcon
        },
        {
            id: 4,
            name: "Analytics",
            icon: analyticsIcon
        },
        {
            id: 5,
            name: "Settings",
            icon: settingsIcon
        },
    ]
    return(
        <nav>
            {
                navigationItems.map((item)=>
                    <button key={item.id}
                    onClick={()=>setActivePage(item.name)}>
                        <img src={item.icon}
                        alt = {item.name}
                        width={20}
                        height={20}
                        />
                        {item.name}
                    </button>
                )
            }
        </nav>
    )
}

export default Navigation