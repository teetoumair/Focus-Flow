import { useState } from "react"
import "./TodayFocus.css"

function TodayFocus(){

    const ChoiceCardItems=[
        {
            id: 1,
            message: "Refactor Authentication Hooks",
            completed: false
        },
        {
            id: 2,
            message: "Update Portfolio Documentation",
            completed: false
        },
        {
            id: 3,
            message: "Client Meeting: FocusFlow Demo",
            completed: false
        },
        {
            id: 4,
            message: "Optimize SVG Assets",
            completed: false
        }
    ]

    return(
        <div>
            <p>Today's Focus</p>
            <div className="ChoiceCard">
                {
                    ChoiceCardItems.map((items)=>(
                        <div key={items.id}>
                            <input
                            type="checkbox"
                            />
                            <span>
                                {items.message}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodayFocus