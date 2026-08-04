import { useState } from "react"
import Notification from "../../../assets/icons/Notification.png"
import NotificationPanel from "./NotificationPanel/NotificatonPanel"

function Actions(){

    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false)
    
    return(
        <div>
            <button
            onClick={()=>setIsNotificationOpen(!isNotificationOpen)}>
            <img 
            src={Notification}
            alt="Notification" 
            width = {16}
            height = {20}
            />
            </button>
            {
                isNotificationOpen &&
                <NotificationPanel/>
            }
        </div>
    )
}

export default Actions