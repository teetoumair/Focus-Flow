import ActiveProjects from "./Components/ActiveProjects/ActiveProjects"
import Status from "./Components/Status/Status"
import TodayFocus from "./Components/TodayFocus/TodayFocus"
import Welcome from "./Components/Welcome/Welcome"
import "./Overview.css"

function Overview(){
    return(
        <div className="Overview">
            <div>
                <Welcome name={"Umair"} tasksCount={5}/>
            </div>
            <div className="StatusCard">
                <Status/>
            </div>
            <div className="Row3">
                <div className="OverviewSection">
                    <TodayFocus/>
                </div>
                <div className="OverviewSection">
                    <ActiveProjects/>
                </div>
            </div>
        </div>
    )
}

export default Overview