export type Notification = {
    id: number;
    message: string;
    isRead: boolean
}

export const getNotifications = (): Notification[] => {
    return[
        { id: 1, message: "Task deadline today", isRead: false },
        { id: 2, message: "New project update", isRead: false },
        { id: 3, message: "Meeting at 3 PM", isRead: true },
    ]
}