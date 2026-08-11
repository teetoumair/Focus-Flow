import { useState, useEffect } from "react"
import type { Notification } from "../../Services/Notifications"
import { getNotifications } from "../../Services/Notifications"
import NotificationIcon from "../../../assets/icons/Notification.png"
import NotificationPanel from "./NotificationPanel/NotificatonPanel"

function Actions(){

    const [notifications, setNotifications] = useState<Notification[]>([])
    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false)
    const unReadCount = notifications.filter(n=>!n.isRead).length
    
    useEffect(()=>{
        setNotifications(getNotifications())
    }, [])

    return(
        <div>
            <button
            onClick={()=>setIsNotificationOpen(!isNotificationOpen)}>
            <img 
            src={NotificationIcon}
            alt="Notification" 
            width = {16}
            height = {20}
            />
            </button>
            {
                unReadCount>0 && <span className="Badge">{unReadCount}</span>
            }
            {
                isNotificationOpen &&
                <NotificationPanel notifications = {notifications}/>
            }
        </div>
    )
}

export default Actions