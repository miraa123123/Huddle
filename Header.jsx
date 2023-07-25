import React from "react";
import logo from "../images/logo.svg"

export default function Header(){
    return(
        <header>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="cart">
                <button className="btn">Try It Free</button>
            </div>
        </header>
    )
}