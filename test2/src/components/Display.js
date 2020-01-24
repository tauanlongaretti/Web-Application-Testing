import React from "react";

function Display(props) {

    return (
        <div>
            <section className="scoreboard">
                <div className="balls">
                    <h2>BALLS</h2>
                    <div>{props.balls}</div>
                </div>
                <div className="strikes">
                    <h2>STRIKES</h2>
                    <div>{props.strikes}</div>
                </div>
            </section>
        </div>    
    )
}    

export default Display;