import Completed from "../../../../../../assets/StatusCardIcons/Completed.png"
import Focus from "../../../../../../assets/StatusCardIcons/Focus.png"
import Pending from "../../../../../../assets/StatusCardIcons/Pending.png"

import "./Status.css"

function Status(){
    return(
        <div className="StatusRow">
            <div className="Cards">
                <div className="IconBox">
                    <img className="cardIcon" src={Pending} alt="Pending"/>
                </div>
                <p>Pending Tasks</p>
                <h2>05</h2>
            </div>
            <div className="Cards">
                <div className="IconBox">
                    <img className="cardIcon" src= {Completed} alt="Pending"/>
                </div>
                <p>Completed Today</p>
                <h2>12</h2>
            </div>
            <div className="Cards">
                <div className="IconBox">
                    <img className="cardIcon" src= {Focus} alt="Pending"/>
                </div>
                <p>Focus Hours</p>
                <h2>4.2h</h2>
            </div>
        </div>
    )
}

export default Status