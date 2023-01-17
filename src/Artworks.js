import React from "react";
import './Artworks.css'
import Art from "./Art";
import PropTypes from "prop-types";


const Artworks = ({ data, config, addFavorite }) => {

    const artCards = data.map(data => {
        return (
            <Art
            key={data.id}
            id={data.id} 
            title={data.title}
            artist_title={data.artist_title}
            description={data.description} 
            image_id={data.image_id}
            config={config}
            addFavorite={addFavorite}
            // isLoved={isLoved}
            />
        )
    })

    return (
        <div className="artworks-container">
        {artCards}
        {console.log(artCards)}
        </div>
        
    )
}

export default Artworks

Artworks.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.string.isRequired,
    addFavorite: PropTypes.func.isRequired
}