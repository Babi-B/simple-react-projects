import React from "react";
import location_icon from "../images/location_icon.png"

export default function Post(props) {
    return(
        <section className="post-item">
            <img src={props.imageUrl} className="post-image"/>
            <div className="post-data">
                <div className="location_details">
                    <img src={location_icon} className="location_icon"/>
                    <span className="location">{props.location}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="post-info">
                    <h1 className="post-title">{props.title}</h1>
                    <p className="post-date">{props.startDate} - {props.endDate}</p>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </section>
    )
}