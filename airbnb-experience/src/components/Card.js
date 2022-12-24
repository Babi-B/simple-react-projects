import React from "react";
import starIcon from "../images/star.png"


export default function Card(props) {
   let bannerText = "";
   props.openSpots ? bannerText = "AVAILABLE" : bannerText = "SOLD OUT" 
   
    return(
        <section className="card-display">
            <span className="banner">{bannerText}</span>
            <img src={`images/${props.coverImge}`} className="card-image"/>
            <span className="ratings"><img src={starIcon} />&nbsp;<b>{props.stats.rating} </b>({props.stats.reviewCount}) • {props.location}</span>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </section>
    );
}