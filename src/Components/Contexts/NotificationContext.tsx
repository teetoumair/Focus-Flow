import { useState, createContext, useContext } from "react"

interface Notification{
    id: number;
    message: string;
    isRead: boolean;
}

interface NotificationContextType{
    notifications: Notification[];
    addNotification: (message: string) => void
}

const NotificationContext= createContext<NotificationContextType | null>(null)

function NotificationProvider({children}: {children : React.ReactNode}){

    const [notifications, setNotifications] = useState<Notification[]>([])

    const addNotification = (message: string) => {
        setNotifications(prev => [
            ...prev,
            {id: Date.now(), message, isRead: false}
        ])
    }

    return(
        <NotificationContext.Provider value ={{notifications, addNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotifications=()=>{
    const ctx = useContext(NotificationContext)
    if (!ctx) throw new Error("useNotifications must be in the NotificationProvider")
    return ctx
}

export default NotificationProvider