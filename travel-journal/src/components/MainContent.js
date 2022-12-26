import React from "react";
import Post from "./Post";
import data from "../data"


export default function MainContent() {
    const postItems = data.map( postElts => {
        return(
            <Post 
                title={postElts.title}
                location={postElts.location}
                googleMapsUrl={postElts.googleMapsUrl}
                startDate={postElts.startDate}
                endDate={postElts.endDate}
                description={postElts.description}
                imageUrl={postElts.imageUrl}
            />
        )
    } )
    return(
        <main className="main-content">
            {postItems}<hr></hr>
        </main>
    )
}