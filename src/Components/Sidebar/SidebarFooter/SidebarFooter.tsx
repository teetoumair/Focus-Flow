import "./SidebarFooter.css"
import helpIcon from "../../../assets/icons/Help.png"
import logoutIcon from "../../../assets/icons/Logout.png"

function SidebarFooter(){

    const footerItems=[
        {
            id: 1,
            icon: helpIcon,
            title:"Help",
        },
        {
            id: 2,
            icon: logoutIcon,
            title:"Logout",
        },
    ]

    return(
        <div className="Footer-Body">
            <footer>
                {
                    footerItems.map((items)=>
                        <a key={items.id}>
                            <img
                            src={items.icon}
                            alt ={items.title}
                            width = {20}
                            height = {20}
                            />
                            {items.title}
                        </a>
                    )
                }
            </footer>
        </div>
    )
}

export default SidebarFooter