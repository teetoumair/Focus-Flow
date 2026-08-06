import "./Welcome.css"

interface WelcomeProps{
    name:string;
    tasksCount: number;
}

function Welcome({name, tasksCount}:WelcomeProps){
    return(
        <div>
            <h1>
                Welcome Back {name}
            </h1>
            <p>You have {tasksCount} tasks to complete today. Let's make it productive.</p>
        </div>
    )
}

export default Welcome