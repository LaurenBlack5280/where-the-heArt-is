import React from "react";
import './Artworks.css'
import Art from "./Art";

const Artworks = ({ data, config}) => {
console.log(data)
    const artCards = data.map(data => {
        return (
            <Art
            id={data.id} 
            title={data.title}
            artist_title={data.artist_title} 
            image_id={data.image_id}
            config={config}
            />
        )
    })

    return (
        <div className="artworks-container">
        {artCards}
        </div>
        
    )
}

export default Artworks