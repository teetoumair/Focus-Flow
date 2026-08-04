import { useState } from "react"
import Notification from "../../../assets/icons/Notification.png"

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
                <p>Notifications Panel</p>
            }
        </div>
    )
}

export default Actions