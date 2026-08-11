import { useNotifications } from "../../../../../Contexts/NotificationContext";
import type {Task} from "../../../../../Types/Types"
import { useState } from "react"
import "./TodayFocus.css"

interface TodayFocusProps {
    choices: Task[];
    setChoices: (value: React.SetStateAction<Task[]>) => void;
}

function TodayFocus({choices, setChoices}: TodayFocusProps){

    const { addNotification } = useNotifications()
    const [message, setMessage] = useState<string>("")

    const addTask = ()=>{
        addNotification("New Task Added")
        setChoices((previousChoices)=>
            [
                ...previousChoices,
                {
                    id: previousChoices.length+1,
                    message: message, 
                    isChecked: false
                }
            ]
        )
    }

    const deleteTask = (id: number)=>{
        addNotification("Task Deleted")
        setChoices((previousChoices)=>previousChoices.filter(
            tasks =>
                tasks.id!==id)
        )
    }

    const toggle = (id: number)=>{
        setChoices((previousChoices)=>previousChoices.map((tasks)=>
            tasks.id === id
            ?{
                ...tasks,
                isChecked: !tasks.isChecked
            }: tasks
        ))
    }

    return(
        <div>
            <p>Today's Focus</p>
            <div className="ChoiceCard">
                <div className="NewTask">
                    <input
                    placeholder="Add Task"
                    value = {message}
                    onChange={(e)=>setMessage(e.target.value)}
                    />
                    <button className="AddButton"
                    onClick={()=>{
                        addTask()
                        setMessage("")
                    }}>
                        Add Task
                    </button>
                </div>
                {
                    choices.map((items)=>(
                        <div key={items.id}>
                            <input
                            type="checkbox"
                            checked={items.isChecked}
                            onChange={()=>toggle(items.id)}
                            />
                            <span>
                                Task {items.id}: {items.message}
                                <button
                                onClick={()=>deleteTask(items.id)}>
                                    Delete
                                </button>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodayFocus