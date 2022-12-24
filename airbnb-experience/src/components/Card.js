import React from "react";
import cardImage from "../images/katie-zaferes.png"
import starIcon from "../images/star.png"


export default function Card(props) {
    return(
        <section className="card-display">
            <img src={`../images/${props.coverImg}`} className="card-image"/>
            <span className="ratings"><img src={starIcon} />&nbsp;<b>{props.stats.rating} </b>({props.stats.reviewCount}) • USA</span>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </section>
    );
}