import "./Status.css"

function Status(){
    return(
        <div className="StatusRow">
            <div className="Cards">
                <p>Pending Tasks</p>
            </div>
            <div className="Cards">
                <p>Completed Today</p>
            </div>
            <div className="Cards">
                <p>Focus Hours</p>
            </div>
        </div>
    )
}

export default Status