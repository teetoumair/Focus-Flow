import "./ActiveProjects.css"

function ActiveProjects(){
    return(
        <div>
            <p>Active Projects</p>

            <div className="Row1">
                
                <div className="Card">
                    <h3>React Learning</h3>
                </div>
                
                <div className="Card">
                    <h3>Personal</h3>
                </div>
            
            </div>
            <div className="Row2">
                    <div className="Card">
                    <h3>Work Flow</h3>
                </div>
                <div className="Card">
                    <h3>React Learning</h3>
                </div>
            </div>
        </div>
    )
}

export default ActiveProjects