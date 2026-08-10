import "./NotificationPanel.css"

function NotificationPanel(){
    return(
        <div className="NotificationPanel">
            <h3>
                Notification
            </h3>
            <ul>
                <li>Task deadline today</li>
                <li>New project update</li>
                <li>Meeting at 3 PM</li>
            </ul>
        </div>
    )
}

export default NotificationPanel