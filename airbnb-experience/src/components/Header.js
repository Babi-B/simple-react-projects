import React from "react";
import headerPics from "../images/photo-grid.png"

export default function Header() {
    return(
        <header className="header">
            <img src={headerPics} alt="header pics" className="header-pics"/>
        </header>
    );
}