import React from 'react'
import logo from "../logo.svg";
import mirealogo from "../MIREA_Logo.svg_-768x768.png";
import nodelogo from "../nodejs.png";

function Mymain() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={mirealogo} className="App-logo" alt="logo" />
            <img src={nodelogo} className="App-logo" alt="logo" />
            <div className="text">
                <p>
                     <code>REACT MIREA  NODEJS</code>
                </p>
            </div>


        </header>
    )
}

export default Mymain