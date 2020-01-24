import React, { useState } from "react";
import Display from "./Display";

function Dashboard() {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);

    if (strikes > 2) {
        setStrikes(0);
    }

    if (balls > 3) {
        setBalls(0);
    }

    const addStrike = strikes => {
        setStrikes(strikes + 1);
    }
    
    const addBall = balls => {
        setBalls (balls + 1);
    }
    
    const addStrikeForFoul = strikes => {
        if(strikes < 2) {
            setStrikes(strikes + 1);
        } else {
            setStrikes(strikes);
        }
    }
    
    const addHit = () => {
        setStrikes(0); 
        setBalls(0);
    }
    
    return (
        <div className="container">
            <Display 
              strikes={strikes}
              balls={balls}
            />
            <section className="buttons">
                <div>
                    <button 
                      onClick={() => addBall(balls)}
                      className="ballButton">Ball
                    </button>
                    <button
                      onClick={() => addStrike(strikes)}
                      className="strikesButton">Strike
                    </button>
                    <button
                        onClick={() => addStrikeForFoul(strikes)}
                        className="foulButton">Foul
                    </button>
                    <button 
                      onClick={() => addHit()}>Hit</button>
                </div>
            </section>
        </div>
    )
}

export default Dashboard;