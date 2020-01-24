import React, { useState } from "react";

export const addStrike = currentStrikes => {
    return currentStrikes + 1;
}

export const addBalls = currentBalls => {
    return currentBalls + 1;
}

export const addStrikeForBall = currentStrikes => {
    if(currentStrikes < 2) {
        return currentStrikes + 1;
    } else {
        return currentStrikes;
    }
}

function Dashboard() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    if (strikes > 3) {
        setStrikes(1);
    }

    if (balls > 4) {
        setBalls(1);
    }

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="balls">
                    <h2></h2>
                </div>
            </section>
            <section className="buttons">

            </section>
        </div>
    )
}

export default Dashboard;