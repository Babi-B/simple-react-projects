import React from "react";
import Card from "./Card";
import data from "../data"

export default function MainContent() {
    
    const cardElement = data.map((elt) => {
        return(
            <Card 
            key={elt.id}
            title={elt.title}
            coverImge={elt.coverImg}
            price={elt.price}
            stats={elt.stats}
            location={elt.location}
            openSpots={elt.openSpots}


        />
        )
    })
    return(
        <main className="mainContent">
            <h4>Onlie Experiences</h4>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <section className="card-section">
                {cardElement}
            </section>
        </main>
    );
}