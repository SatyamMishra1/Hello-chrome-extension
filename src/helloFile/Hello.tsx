import React, { ReactNode } from "react";
import './HelloStyle.css'

function Hello(): ReactNode {
    let randomNum: number = Math.floor((Math.random() * 10) + 1); //Generating random numbers
    return (
        <div className="hello-style" style={randomNum % 2 === 0 ? { color: 'red' } : { color: 'green' }}>
            Hello
        </div>
    )
}

export default Hello;