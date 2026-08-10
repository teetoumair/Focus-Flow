import { useState } from "react"
import type { Task } from "../../../Types/Types"
import ActiveProjects from "./Components/ActiveProjects/ActiveProjects"
import Status from "./Components/Status/Status"
import TodayFocus from "./Components/TodayFocus/TodayFocus"
import Welcome from "./Components/Welcome/Welcome"
import "./Overview.css"

function Overview(){

    const [choices, setChoices] = useState<Task[]>([])

    return(
        <div className="Overview">
            <div>
                <Welcome name={"Umair"} tasksCount={choices.length}/>
            </div>
            <div className="StatusCard">
                <Status choices = {choices}/>
            </div>
            <div className="Row3">
                <div className="OverviewSection">
                    <TodayFocus choices={choices} setChoices={setChoices}/>
                </div>
                <div className="OverviewSection">
                    <ActiveProjects/>
                </div>
            </div>
        </div>
    )
}

export default Overview