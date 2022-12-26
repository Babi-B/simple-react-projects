import React from "react";
import globe_icon from "../images/globe_icon.png"

export default function Navbar() {
    return(
        <nav className="navbar">
            <img src={globe_icon} /><span>my travel journal.</span>
        </nav>
    )
}