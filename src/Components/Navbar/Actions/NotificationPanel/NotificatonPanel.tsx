import type { Notification } from "../../../Services/Notifications"
import "./NotificationPanel.css"

interface notificationProps{
    notifications: Notification[];
}

function NotificationPanel({notifications} : notificationProps){
    return(
        <div className="NotificationPanel">
            <h3>Notification</h3>
            <ul>
                {
                    notifications.map((n)=>(
                        <li key={n.id} className={n.isRead ? "read": "unread"}>
                            {n.message}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default NotificationPanel